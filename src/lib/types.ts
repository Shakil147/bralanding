export type ShippingOption = {
  label: string;
  cost: number;
  time?: string;
};

export type Variant = {
  id: number;
  sku?: string;
  size: string;
  price: number;
  old_price?: number;
  image?: string;
};

export type Offer = {
  product_id: number;
  label: string;
  price: number;
  old_price?: number;
  img: string;
  /** Legacy single size on the landing-page/product pivot row. Prefer `variants`. */
  size?: string;
  /** Canonical size-wise pricing — real per-size SKU/price/old_price/image. Use this over `size`. */
  variants?: Variant[];
  color?: string;
};

export type LandingPage = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  subtitle2?: string;
  thumbnail: string;
  benefits_image: string;
  why_buy_image: string;
  video_id: string | null;
  offers: Offer[];
  price_label?: string;
  accent_color?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string[];
  og_image?: string;
  canonical?: string;
  benefits: string[];
  why_buy: string[];
  important_points: string[];
  sizes: string[];
  shipping_options: ShippingOption[];
  gallery: string[];
  reviews?: string[];
  whatsapp: string;
  phone: string;
  hasColor?: boolean;
  hasNote?: boolean;
};

export type Organization = {
  name: string;
  slug: string;
  logo?: string;
  favicon?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  default_color?: string;
  social_links?: string[];
};

export type OrderPayload = {
  product_id: number;
  name: string;
  phone: string;
  address: string;
  size: string;
  shipping_option: string;
  quantity?: number;
  color?: string;
  note?: string;
};

export type OrderResponse = {
  id: number;
  status: "pending" | "confirmed" | "cancelled";
  total_amount: number;
};

export type VisitorSessionPayload = {
  session_token: string;
  landing_page?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  browser?: string;
  browser_version?: string;
  os?: string;
  device_type?: string;
  country?: string;
  city?: string;
};

export type VisitorSessionResponse = {
  id: number;
  page_view_count: number;
};

export type LeadPayload = {
  phone: string;
  name?: string;
  landing_page?: string;
  product_id?: number;
  device_fingerprint?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
};

export type LeadResponse = {
  id: number;
  status: "pending" | "converted";
};

export type ApiSuccess<T> = { success: true; data: T };
export type ApiError = { success: false; message: string };

export type FbEventName =
  | "PageView"
  | "ViewContent"
  | "InitiateCheckout"
  | "Purchase";

export type FbEventPayload = {
  event_name: FbEventName;
  event_id: string;
  product_slug?: string;
  value?: number;
  currency?: string;
  fbp?: string;
  fbc?: string;
};
