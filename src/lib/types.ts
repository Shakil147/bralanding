export type ShippingOption = {
  label: string;
  cost: number;
};

export type Offer = {
  label: string;
  price: number;
  old_price?: number;
  img: string;
  size?: string;
  color?: string;
};

export type SizePriceOffer = {
  label: string;
  price: number;
};

export type LandingPage = {
  slug: string;
  title: string;
  subtitle: string;
  subtitle2?: string;
  thumbnail: string;
  benefits_image: string;
  why_buy_image: string;
  video_id: string;
  offers: Offer[];
  size_price_offers?: SizePriceOffer[];
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
  fb_pixel_id: string;
  whatsapp: string;
  phone: string;
};

export type OrderPayload = {
  product_slug: string;
  name: string;
  phone: string;
  address: string;
  size: string;
  shipping_option: string;
  quantity: number;
  offer_label: string;
};

export type OrderResponse = {
  order_id: string;
  status: "pending" | "confirmed" | "cancelled";
  total: number;
};

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
