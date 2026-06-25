"use client";

import { FbEventName, FbEventPayload } from "./types";
import { getFbCookies } from "./attribution";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function newEventId(): string {
  return crypto.randomUUID();
}

/**
 * Fires the browser Pixel event and the server-side CAPI duplicate with the
 * same event_id, so Meta dedupes them (recommended pattern for Pixel + CAPI).
 */
export function trackEvent(
  eventName: FbEventName,
  params: {
    value?: number;
    currency?: string;
    product_slug?: string;
    /** Raw PII — sent to CAPI only (hashed server-side), never to the Pixel. */
    phone?: string;
    name?: string;
    email?: string;
  } = {}
) {
  const eventId = newEventId();
  const eventTime = Math.floor(Date.now() / 1000);
  const { phone, name, email, ...pixelParams } = params;

  if (typeof window !== "undefined" && window.fbq) {
    // Pixel gets only non-PII params; eventID is the CAPI dedup key.
    window.fbq("track", eventName, pixelParams, { eventID: eventId });
  }

  const fbCookies = typeof window !== "undefined" ? getFbCookies() : {};

  const payload: FbEventPayload = {
    event_name: eventName,
    event_id: eventId,
    event_time: eventTime,
    event_source_url: typeof window !== "undefined" ? window.location.href : undefined,
    ...pixelParams,
    ...fbCookies,
    ...(phone ? { phone } : {}),
    ...(name ? { name } : {}),
    ...(email ? { email } : {}),
  };

  fetch("/api/fb-events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => {
    // best-effort: a dropped CAPI event must not block the user flow
  });
}
