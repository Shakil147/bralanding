"use client";

import { FbEventName, FbEventPayload } from "./types";

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
  params: { value?: number; currency?: string; product_slug?: string } = {}
) {
  const eventId = newEventId();

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params, { eventID: eventId });
  }

  const payload: FbEventPayload = {
    event_name: eventName,
    event_id: eventId,
    ...params,
  };

  fetch("/api/fb-events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => {
    // best-effort: a dropped CAPI event must not block the user flow
  });
}
