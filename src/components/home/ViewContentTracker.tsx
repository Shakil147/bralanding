"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/fbPixel";

export default function ViewContentTracker({
  slug,
  price,
}: {
  slug: string;
  price: number;
}) {
  const firedRef = useRef(false);

  useEffect(() => {
    // Guard against StrictMode double-mount firing two ViewContents with
    // different event_ids (which Meta can't dedupe).
    if (firedRef.current) return;
    firedRef.current = true;
    trackEvent("ViewContent", { product_slug: slug, value: price, currency: "BDT" });
  }, [slug, price]);

  return null;
}
