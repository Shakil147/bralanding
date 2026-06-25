import { NextRequest, NextResponse } from "next/server";
import { getOrganization } from "@/lib/api";
import { FbEventPayload } from "@/lib/types";

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

  const res = await fetch(
    `https://graph.facebook.com/v19.0/${org.facebook_pixel_id}/events?access_token=${org.facebook_capi_token}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [
          {
            event_name: body.event_name,
            event_id: body.event_id,
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            custom_data: {
              value: body.value,
              currency: body.currency,
              content_name: body.product_slug,
            },
          },
        ],
      }),
    }
  );

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
