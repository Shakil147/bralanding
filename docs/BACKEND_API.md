# API Documentation

Base URL: `https://<your-domain>/api`

All responses are JSON. Successful responses use `"success": true` with a `data` key. Errors use `"success": false` with a `message`, or `"error"` for auth failures.

## Authentication

Two key types, scoped to an Organization (`organization_api_keys` table).

| Key type | Prefix | Header | Used for |
|---|---|---|---|
| Public  | `pk_` | `X-Public-Key` (or `?public_key=` / `?api_key=` query param) | Public read-only endpoints |
| Private | `sk_` | `X-Private-Key` | Write endpoints (orders, leads, visitor sessions) |

Keys must be `is_active = true`. Each successful request updates the key's `last_used_at`.

**401 responses:**
```json
{ "error": "Unauthorized. Missing public API key." }
{ "error": "Unauthorized. Invalid key type. Only public keys (pk_...) are allowed." }
{ "error": "Unauthorized. Invalid or inactive public API key." }
```
(Same pattern for private key, swap "public" → "private", `pk_` → `sk_`.)

All endpoints resolve the organization from the API key — never pass `organization_id` in the body.

---

## Public Endpoints (`X-Public-Key: pk_...`)

### GET `/landing-pages`
List all active landing pages for the organization.

**Response 200**
```json
{
  "success": true,
  "data": [
    {
      "slug": "summer-sale",
      "title": "...",
      "subtitle": "...",
      "subtitle2": "...",
      "thumbnail": "https://.../storage/...",
      "benefits_image": "https://...",
      "why_buy_image": "https://...",
      "video_id": "youtube-id-or-null",
      "accent_color": "#ff0000",
      "seo_title": "...",
      "seo_description": "...",
      "seo_keywords": ["..."],
      "canonical": "https://yourapp.com/landingpage/summer-sale",
      "price_label": "...",
      "offers": [
        { "product_id": 12, "label": "1 pc", "price": 990, "old_price": 1200, "img": "https://..." }
      ],
      "size_price_offers": [],
      "benefits": [],
      "why_buy": [],
      "important_points": [],
      "sizes": ["S", "M", "L"],
      "shipping_options": [
        { "label": "Inside Dhaka", "cost": 60 }
      ],
      "gallery": ["https://..."],
      "reviews": ["https://..."],
      "whatsapp": "8801XXXXXXXXX",
      "phone": "8801XXXXXXXXX",
      "hasColor": true,
      "hasNote": false
    }
  ]
}
```

### GET `/landing-pages/{idOrSlug}`
Single landing page by numeric `id` or `slug`. Same shape as one item above (no array wrapper).

**404**
```json
{ "success": false, "message": "Landing page not found." }
```

### GET `/organization`
Current organization profile (resolved from the API key).

**Response 200**
```json
{
  "success": true,
  "data": {
    "name": "Acme Store",
    "slug": "acme-store",
    "logo": "https://.../logo.png",
    "favicon": "https://.../favicon.ico",
    "phone": "8801XXXXXXXXX",
    "whatsapp": "8801XXXXXXXXX",
    "email": "hello@acme.com",
    "address": "...",
    "default_color": "#000000",
    "social_links": []
  }
}
```

> `GET /products` and `GET /products/{idOrSlug}` exist in `ProductController` but are currently commented out in `routes/api.php` — not live.

---

## Private Endpoints (`X-Private-Key: sk_...`)

Write-only. Use these from server-side / backend integrations, not directly from public frontend JS (don't expose the secret key client-side).

### POST `/orders`
Create a sale/order for a product shown on a landing page.

**Body**
```json
{
  "product_id": 12,
  "name": "John Doe",
  "phone": "01712345678",
  "address": "House 1, Road 2, Dhaka",
  "size": "M",
  "shipping_option": "Inside Dhaka",
  "quantity": 1,
  "color": "Red",
  "note": "Gift wrap please"
}
```

| Field | Type | Required | Notes |
|---|---|---|---|
| `product_id` | int | yes | Must belong to an active product on an active landing page |
| `name` | string, max 150 | yes | |
| `phone` | string | yes | Regex `^01[3-9]\d{8}$` (BD mobile format) |
| `address` | string, max 500 | yes | |
| `size` | string | yes | Must match one of the product's available sizes (if any are defined) |
| `shipping_option` | string | yes | Must match a `label` in the landing page's `shipping_options` |
| `quantity` | int, min 1 | no | Defaults to 1 |
| `color` | string, max 50 | conditional | Required if landing page `hasColor` is true |
| `note` | string, max 1000 | conditional | Required if landing page `hasNote` is true |

Server computes `total_amount = unit_price * quantity + shipping_cost`. Any matching pending `LeadCapture` for the same phone is auto-marked `converted` and linked to the new order.

**Response 201**
```json
{
  "success": true,
  "data": { "id": 451, "status": "pending", "total_amount": 1050.0 }
}
```

**404** — product not found/inactive: `{ "success": false, "message": "Product not found." }`

**422** (validation, including business-rule checks):
```json
{
  "message": "The size field is required.",
  "errors": { "size": ["Selected size is not available for this product."] }
}
```
Possible field-level errors: `product_id` (no active landing page), `size`, `shipping_option`, `color`, `note`.

### POST `/visitor-sessions`
Upsert a visitor session for analytics/attribution tracking. Call once per page load with a stable `session_token` (e.g. stored in a cookie/localStorage).

**Body**
```json
{
  "session_token": "uuid-or-random-64char-token",
  "landing_page": "summer-sale",
  "referrer": "https://facebook.com/...",
  "utm_source": "facebook",
  "utm_medium": "cpc",
  "utm_campaign": "summer2026",
  "utm_term": "...",
  "utm_content": "...",
  "browser": "Chrome",
  "browser_version": "125",
  "os": "Android",
  "device_type": "mobile",
  "country": "BD",
  "city": "Dhaka"
}
```
Only `session_token` is required (string, max 64); everything else nullable. If `referrer` is omitted, server falls back to the `Referer` header. First call creates the session (`page_view_count = 1`); subsequent calls with the same token increment `page_view_count` and bump `last_seen_at`.

**Response 201**
```json
{ "success": true, "data": { "id": 99, "page_view_count": 3 } }
```

### POST `/leads`
Capture a partial/abandoned lead (e.g. user typed a phone number but didn't complete checkout).

**Body**
```json
{
  "phone": "01712345678",
  "name": "John Doe",
  "landing_page": "summer-sale",
  "product_id": 12,
  "device_fingerprint": "fp-hash",
  "utm_source": "facebook",
  "utm_medium": "cpc",
  "utm_campaign": "summer2026",
  "utm_content": "...",
  "utm_term": "...",
  "fbclid": "..."
}
```

| Field | Required |
|---|---|
| `phone` | yes — regex `^01[3-9]\d{8}$` |
| `product_id` | no — must exist in `products` table if provided |
| all others | no |

Created with `status: "pending"`.

**Response 201**
```json
{ "success": true, "data": { "id": 77, "status": "pending" } }
```

---

## Typical Frontend Flow

1. On landing page load: `GET /landing-pages/{slug}` (public key) to render content.
2. Fire `POST /visitor-sessions` (private key, via your own backend proxy) on page load for attribution.
3. When user enters phone but hasn't submitted: `POST /leads` (private key, via backend proxy).
4. On checkout submit: `POST /orders` (private key, via backend proxy).

**Important:** the private key (`sk_...`) must never be embedded in client-side JS. Route `/orders`, `/visitor-sessions`, and `/leads` calls through your own backend, which holds the secret key and forwards the request.
