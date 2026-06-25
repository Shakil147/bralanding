"use client";

const SESSION_KEY = "bra_session_token";
const UTM_KEY = "bra_utm_params";

const UTM_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
] as const;

export type UtmParams = Partial<Record<(typeof UTM_FIELDS)[number], string>>;

export function getSessionToken(): string {
  let token = localStorage.getItem(SESSION_KEY);
  if (!token) {
    token = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, token);
  }
  return token;
}

// First-touch attribution: capture utm/fbclid params on whichever page load
// has them, then keep returning that set for the rest of the browser session
// (sessionStorage) even after the visitor navigates to a URL without them.
export function getUtmParams(): UtmParams {
  const params = new URLSearchParams(window.location.search);
  const fromUrl: UtmParams = {};
  let hasAny = false;
  for (const field of UTM_FIELDS) {
    const v = params.get(field);
    if (v) {
      fromUrl[field] = v;
      hasAny = true;
    }
  }
  if (hasAny) {
    sessionStorage.setItem(UTM_KEY, JSON.stringify(fromUrl));
    return fromUrl;
  }
  const stored = sessionStorage.getItem(UTM_KEY);
  return stored ? (JSON.parse(stored) as UtmParams) : {};
}

// Reads Meta's first-party cookies for CAPI matching. _fbc is synthesized from
// fbclid (fb.1.<unixMs>.<fbclid>) when the cookie itself hasn't been set yet —
// e.g. the Pixel script hasn't run or the visitor blocks it.
export function getFbCookies(): { fbp?: string; fbc?: string } {
  const read = (name: string): string | undefined => {
    const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : undefined;
  };

  const fbp = read("_fbp");
  let fbc = read("_fbc");

  if (!fbc) {
    const { fbclid } = getUtmParams();
    if (fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;
  }

  return { ...(fbp ? { fbp } : {}), ...(fbc ? { fbc } : {}) };
}

export function getDeviceInfo() {
  const ua = navigator.userAgent;
  const device_type = /Tablet|iPad/i.test(ua)
    ? "tablet"
    : /Mobi|Android/i.test(ua)
      ? "mobile"
      : "desktop";

  const browserMatch = ua.match(/(Edg|OPR|Chrome|Firefox|Safari)\/([\d.]+)/);
  const browser = browserMatch?.[1].replace("Edg", "Edge").replace("OPR", "Opera");
  const browser_version = browserMatch?.[2];

  const os = /Windows/i.test(ua)
    ? "Windows"
    : /Android/i.test(ua)
      ? "Android"
      : /iPhone|iPad|iOS/i.test(ua)
        ? "iOS"
        : /Mac OS/i.test(ua)
          ? "macOS"
          : /Linux/i.test(ua)
            ? "Linux"
            : undefined;

  return { browser, browser_version, os, device_type };
}
