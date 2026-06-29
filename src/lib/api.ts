import { cache } from "react";
import {
  LandingPage,
  LeadPayload,
  LeadResponse,
  Organization,
  OrderPayload,
  OrderResponse,
  ShippingOption,
  VisitorSessionPayload,
  VisitorSessionResponse,
} from "./types";

const API_BASE_URL = process.env.LARAVEL_API_BASE_URL ?? "http://localhost:8000/api";

// Server-only. Never import this module from a "use client" component —
// LARAVEL_API_* env vars are not NEXT_PUBLIC_ and the keys must stay off the browser.
async function apiFetch<T>(
  path: string,
  keyHeader: "X-Public-Key" | "X-Private-Key",
  init?: RequestInit
): Promise<T> {
  const key =
    keyHeader === "X-Public-Key"
      ? process.env.LARAVEL_API_PUBLIC_KEY ?? ""
      : process.env.LARAVEL_API_SECRET_KEY ?? "";

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      [keyHeader]: key,
      ...init?.headers,
    },
  });

  const body = await res.json();

  if (!res.ok || body.success === false) {
    throw new Error(body.message ?? `API ${path} failed with ${res.status}`);
  }

  return body.data as T;
}

// The live backend sends shipping options as { name, price, time } instead of
// the documented { label, cost } — normalize here so the rest of the app can
// rely on the documented LandingPage shape.
type RawShippingOption = { name: string; price: number; time?: string };

function normalizeLandingPage(raw: LandingPage): LandingPage {
  return {
    ...raw,
    shipping_options: (raw.shipping_options as unknown as (ShippingOption | RawShippingOption)[]).map(
      (opt): ShippingOption =>
        "name" in opt ? { label: opt.name, cost: opt.price, time: opt.time } : opt
    ),
  };
}

// Wrapped in React cache() so the metadata pass and the render pass within a
// single request share one fetch+parse instead of doing the work twice.
export const getLandingPages = cache(async (): Promise<LandingPage[]> => {
  const pages = await apiFetch<LandingPage[]>("/landing-pages", "X-Public-Key", {
    next: { revalidate: 60, tags: ["landing-pages"] },
  });
  return pages.map(normalizeLandingPage);
});

export const getLandingPage = cache(async (idOrSlug: string | number): Promise<LandingPage> => {
  const page = await apiFetch<LandingPage>(`/landing-pages/${idOrSlug}`, "X-Public-Key", {
    next: { revalidate: 60, tags: ["landing-pages"] },
  });
  return normalizeLandingPage(page);
});

export const getOrganization = cache((): Promise<Organization> => {
  return apiFetch<Organization>("/organization", "X-Private-Key", {
    next: { revalidate: 60, tags: ["organization"] },
  });
});

// Used by this app's own Route Handlers (src/app/api/*), which proxy browser
// requests to Laravel while holding the private key server-side. Returns the
// raw status + body so the proxy can mirror Laravel's response verbatim.
export async function proxyPrivatePost(
  path: string,
  payload: unknown
): Promise<{ status: number; body: unknown }> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Private-Key": process.env.LARAVEL_API_SECRET_KEY ?? "",
    },
    body: JSON.stringify(payload),
  });

  return { status: res.status, body: await res.json() };
}

export function createOrder(payload: OrderPayload) {
  return proxyPrivatePost("/orders", payload) as Promise<{
    status: number;
    body: { success: true; data: OrderResponse } | { success: false; message: string } | { message: string; errors: Record<string, string[]> };
  }>;
}

export function createVisitorSession(payload: VisitorSessionPayload) {
  return proxyPrivatePost("/visitor-sessions", payload) as Promise<{
    status: number;
    body: { success: true; data: VisitorSessionResponse } | { success: false; message: string };
  }>;
}

export function createLead(payload: LeadPayload) {
  return proxyPrivatePost("/leads", payload) as Promise<{
    status: number;
    body: { success: true; data: LeadResponse } | { success: false; message: string } | { message: string; errors: Record<string, string[]> };
  }>;
}
