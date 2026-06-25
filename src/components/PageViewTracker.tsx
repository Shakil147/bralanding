"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/fbPixel";

// Fires PageView through trackEvent so it hits both the browser Pixel and CAPI
// with one shared event_id (dedup). Replaces the inline fbq('track','PageView')
// in the init script — firing in both places would double-count.
export default function PageViewTracker() {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    trackEvent("PageView");
  }, []);

  return null;
}
