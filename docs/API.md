# External API Spec (for Laravel backend)

This Next.js app calls the Laravel backend over HTTP/JSON. **The browser never talks to Laravel directly.** All calls to Laravel happen server-side only, inside this app:

- Server Components (e.g. `src/app/page.tsx`, `src/app/landingpage/[slug]/page.tsx`) call `src/lib/api.ts` directly during render.
- The browser's `OrderForm` ("use client") only ever calls this app's own Route Handler `POST /api/orders` (same-origin, relative path). That Route Handler runs server-side and is the one that talks to Laravel.

This doc tells the Laravel dev exactly which endpoints, payloads, and auth to build on the Laravel side.

```
Browser  --(same-origin /api/* )-->  Next.js server  --(LARAVEL_API_BASE_URL)-->  Laravel
```

`src/lib/api.ts` must never be imported from a `"use client"` file — its env vars are server-only and a client bundle has no `process.env` for them.

## Base URL

Server reads the Laravel base URL from `LARAVEL_API_BASE_URL` (server-only, **not** `NEXT_PUBLIC_*`). Laravel app should expose all routes under `/api`.

```
LARAVEL_API_BASE_URL=https://your-laravel-domain.com/api
```

## Authentication

Every server-to-server request to Laravel sends two headers:

```
X-Public-Key: <public key>
X-Secret-Key: <secret key>
```

Set in this app's `.env` as `LARAVEL_API_PUBLIC_KEY` / `LARAVEL_API_SECRET_KEY` (server-only, never `NEXT_PUBLIC_*` — these must never reach the browser bundle).

Laravel side: validate both on every endpoint via middleware (e.g. `app/Http/Middleware/VerifyApiKeys.php`). Reject with `401` if missing/invalid:

```json
{ "message": "Invalid API credentials" }
```

Keys are issued per-client (this frontend is one client). Store valid key pairs in a table or config, not hardcoded.

Public key + secret key pair = one trusted frontend deployment. Not user auth — there's no login/session for the storefront visitor. No auth header rotation needed (these are server-to-server level secrets).

---

## Endpoints

### 1. `GET /api/landingpages`

List all landing pages / products. Used for sitemap / listing.

**Response `200`** — array of `LandingPage` objects (shape below).

### 2. `GET /api/landingpages/{slug}`

Single landing page by slug. Drives the product/offer page (images, sizes, pricing, shipping options, reviews, etc). Called on every page load — `no-store`, no caching.

**Response `200`** — single `LandingPage` object.

**Response `404`** if slug not found:
```json
{ "message": "Landing page not found" }
```

**`LandingPage` shape:**

```ts
{
  slug: string;
  title: string;
  subtitle: string;
  subtitle2?: string;
  thumbnail: string;          // image URL
  benefits_image: string;     // image URL
  why_buy_image: string;      // image URL
  video_id: string;           // e.g. YouTube ID
  offers: Offer[];
  size_price_offers?: SizePriceOffer[];
  price_label?: string;
  accent_color?: string;       // hex, e.g. "#ff4d6d"
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string[];
  og_image?: string;
  canonical?: string;
  benefits: string[];
  why_buy: string[];
  important_points: string[];
  sizes: string[];             // e.g. ["32","34","36",...,"44"]
  shipping_options: ShippingOption[];
  gallery: string[];           // image URLs
  reviews?: string[];
  whatsapp: string;            // phone number for WA link
  phone: string;
  hasColor?: boolean;          // show color field in checkout form
  hasNote?: boolean;           // show note field in checkout form
}
```

```ts
type Offer = {
  label: string;       // e.g. "1 pcs"
  price: number;
  old_price?: number;  // strikethrough price
  img: string;
  size?: string;
  color?: string;
};

type SizePriceOffer = {
  label: string;
  price: number;
};

type ShippingOption = {
  label: string;   // e.g. "ঢাকার ভিতরে"
  cost: number;     // e.g. 80
};
```

### 3. `POST /api/orders`

Submit a checkout / order. Called once when customer submits the billing form.

**Request body:**

```ts
{
  product_slug: string;     // which landing page / product
  name: string;              // customer name, required
  phone: string;             // BD format, required — validate ^01[3-9]\d{8}$
  address: string;           // full address, required
  size: string;               // one of the product's `sizes`
  shipping_option: string;    // must match a `label` from that product's shipping_options
  quantity: number;           // currently always 1 from frontend, don't assume it stays 1
  offer_label: string;        // which `Offer.label` was selected
  color?: string;              // present only if hasColor=true on the product
  note?: string;                // present only if hasNote=true on the product
}
```

**Server should:**
- Look up `product_slug`, validate it exists.
- Validate `shipping_option` matches one of that product's `shipping_options`.
- Compute `total` = offer price + shipping cost (don't trust a client-sent total — there isn't one, by design).
- Persist order with status `pending`.
- Return an `order_id`.

**Response `201`:**

```ts
{
  order_id: string;
  status: "pending" | "confirmed" | "cancelled";
  total: number;   // computed server-side, in BDT, integer (no decimals shown in UI)
}
```

**Response `422`** on validation failure — return Laravel's standard validation error shape, frontend currently just checks `res.ok`, but structure response as:

```json
{ "message": "The given data was invalid.", "errors": { "phone": ["..."] } }
```

---

## Notes for Laravel implementation

- All requests are JSON in, JSON out. Frontend sends `Content-Type: application/json`.
- No cookies/sessions used — keep endpoints stateless, auth is the two API-key headers only.
- `GET /landingpages/{slug}` is hit on every storefront page load — cache aggressively server-side (Laravel cache / CDN), but the frontend itself sends `cache: no-store` so it always asks fresh.
- Currency is BDT, integers (no paisa/decimals in UI).
- Recommend rate-limiting `POST /orders` per IP/public-key to avoid spam orders (Laravel built-in throttle middleware).

## Current state of this repo

No real Laravel backend wired up yet. `src/app/api/landingpages/route.ts`, `src/app/api/landingpages/[slug]/route.ts`, and `src/app/api/orders/route.ts` are Next.js Route Handlers returning mock data from `src/lib/mock-products.ts` — they stand in for Laravel today and run server-side only, same as real Laravel would. Mock `POST /orders` returns the exact response shapes documented above (`422` with `{ message, errors }`, `404` with `{ message }`), so Laravel can be swapped in without touching `OrderForm.tsx`.

`src/lib/api.ts` is the one module that will call the real Laravel base URL once `LARAVEL_API_BASE_URL` is set. It is used only by Server Components today (`src/app/page.tsx`, `src/app/landingpage/[slug]/page.tsx`) — never import it from a `"use client"` file.

To swap in a real Laravel backend later: set `LARAVEL_API_BASE_URL` / `LARAVEL_API_PUBLIC_KEY` / `LARAVEL_API_SECRET_KEY` in `.env.local`, and have the Route Handlers in `src/app/api/*` call `src/lib/api.ts` instead of `mock-products.ts`.
