"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/fbPixel";

export default function ViewContentTracker({
  slug,
  price,
}: {
  slug: string;
  price: number;
}) {
  useEffect(() => {
    trackEvent("ViewContent", { product_slug: slug, value: price, currency: "BDT" });
  }, [slug, price]);

  return null;
}
