import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { getOrganization } from "@/lib/api";
import { FbEventPayload } from "@/lib/types";

const GRAPH_VERSION = "v21.0";

/** SHA-256 hex of a normalized value, per Meta's EMQ requirements. Empty → undefined. */
function hashEmq(value: string | undefined): string | undefined {
  const normalized = value?.trim().toLowerCase();
  if (!normalized) return undefined;
  return createHash("sha256").update(normalized).digest("hex");
}

/** Bangladeshi phone → E.164-ish digits (8801XXXXXXXXX) before hashing. */
function normalizePhone(phone: string | undefined): string | undefined {
  if (!phone) return undefined;
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) digits = "88" + digits;
  else if (digits.startsWith("1")) digits = "880" + digits;
  return digits || undefined;
}

function clientIp(req: NextRequest): string | undefined {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? undefined;
}

/** Drops undefined keys so Meta never sees empty fields (which hurt EMQ). */
function compact<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined && v !== null && v !== "")
  ) as Partial<T>;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as FbEventPayload;

  if (!body.event_name || !body.event_id) {
    return NextResponse.json(
      { error: "validation_failed", fields: ["event_name", "event_id"] },
      { status: 422 }
    );
  }

  const org = await getOrganization().catch(() => null);

  if (!org?.facebook_pixel_id || !org?.facebook_capi_token) {
    return NextResponse.json({ events_received: 0, fbtrace_id: null });
  }

  const normalizedPhone = normalizePhone(body.phone);
  const [firstName, ...restName] = (body.name ?? "").trim().split(/\s+/);

  const userData = compact({
    client_ip_address: clientIp(req),
    client_user_agent: req.headers.get("user-agent") ?? undefined,
    // fbp/fbc are already in Meta's hashed-cookie format — pass verbatim.
    fbp: body.fbp,
    fbc: body.fbc,
    em: hashEmq(body.email),
    ph: hashEmq(normalizedPhone),
    fn: hashEmq(firstName || undefined),
    ln: hashEmq(restName.length ? restName.join(" ") : undefined),
    external_id: hashEmq(normalizedPhone),
  });

  const customData = compact({
    value: body.value,
    currency: body.currency,
    content_name: body.product_slug,
    content_ids: body.product_slug ? [body.product_slug] : undefined,
    content_type: body.product_slug ? "product" : undefined,
  });

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: body.event_name,
        event_id: body.event_id,
        event_time: body.event_time ?? Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: body.event_source_url,
        user_data: userData,
        custom_data: customData,
      },
    ],
  };

  const testCode = process.env.FB_TEST_EVENT_CODE;
  if (testCode) payload.test_event_code = testCode;

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${org.facebook_pixel_id}/events?access_token=${org.facebook_capi_token}`;
  const init: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  // One retry: CAPI is fire-and-forget, but a single retry rescues transient 5xx/network blips.
  let res: Response | null = null;
  let data: unknown = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      res = await fetch(url, init);
      data = await res.json().catch(() => null);
      if (res.ok) break;
      if (res.status < 500) break; // 4xx won't be fixed by retrying
    } catch (err) {
      if (attempt === 1) {
        console.error("[fb-capi] network error", {
          event: body.event_name,
          error: err instanceof Error ? err.message : String(err),
        });
        return NextResponse.json({ events_received: 0, fbtrace_id: null }, { status: 502 });
      }
    }
  }

  if (!res || !res.ok) {
    const d = data as { error?: { message?: string }; fbtrace_id?: string } | null;
    console.error("[fb-capi] graph error", {
      event: body.event_name,
      status: res?.status,
      message: d?.error?.message,
      fbtrace_id: d?.fbtrace_id,
    });
  }

  return NextResponse.json(data, { status: res?.status ?? 502 });
}
