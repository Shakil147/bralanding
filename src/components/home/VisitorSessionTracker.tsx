"use client";

import { useEffect } from "react";
import { getDeviceInfo, getSessionToken, getUtmParams } from "@/lib/attribution";

export default function VisitorSessionTracker({ landingPage }: { landingPage: string }) {
  useEffect(() => {
    const session_token = getSessionToken();
    // visitor-sessions has no fbclid field — that's leads-only.
    const { fbclid: _fbclid, ...utm } = getUtmParams();
    const { browser, browser_version, os, device_type } = getDeviceInfo();

    fetch("/api/visitor-sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        session_token,
        landing_page: landingPage,
        ...utm,
        browser,
        browser_version,
        os,
        device_type,
      }),
    }).catch(() => {
      // best-effort: a dropped session ping must not block the user flow
    });
  }, [landingPage]);

  return null;
}
