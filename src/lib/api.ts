import { LandingPage, OrderPayload, OrderResponse } from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000/api";

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });

  if (!res.ok) {
    throw new Error(`API ${path} failed with ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export function getLandingPage(slug: string): Promise<LandingPage> {
  return apiFetch<LandingPage>(`/landingpages/${slug}`, { cache: "no-store" });
}

export function getLandingPages(): Promise<LandingPage[]> {
  return apiFetch<LandingPage[]>("/landingpages", { cache: "no-store" });
}

export function createOrder(payload: OrderPayload): Promise<OrderResponse> {
  return apiFetch<OrderResponse>("/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
