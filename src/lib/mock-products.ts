import { LandingPage } from "./types";

/**
 * Stand-in for the Laravel `landing_pages` table. Shape here is the contract
 * GET /api/landingpages/[slug] (and later the real Laravel endpoint) must return.
 */
export const MOCK_LANDING_PAGES: Record<string, LandingPage> = {
  "guddi-bra": {
    slug: "guddi-bra",
    title: "গুড্ডি ব্রা",
    subtitle: "গরমে শীতল অনুভূতি!",
    thumbnail:
      "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg",
    benefits_image:
      "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg",
    why_buy_image:
      "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg",
    video_id: "wEGRD2byTck",
    accent_color: "#f85606",
    seo_title: "গুড্ডি ব্রা - ১০০% সুতি কম্বো অফার | Narimon Closet",
    seo_description: "১০০% সুতি কাপড়ের গুড্ডি ব্রা কম্বো অফার। ক্যাশ অন ডেলিভারিতে অর্ডার করুন।",
    seo_keywords: ["গুড্ডি ব্রা", "bra combo offer", "narimon closet"],
    canonical: "https://narimoncloset.com/landingpage/guddi-bra",
    offers: [
      { label: "Guddi Bra 2 pcs", price: 750, old_price: 1000, img: "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg" },
      { label: "Guddi Bra 3 pcs", price: 999, old_price: 1500, img: "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg" },
      { label: "Guddi Bra 4 pcs", price: 1250, old_price: 1900, img: "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg" },
      { label: "Guddi Bra 6 pcs", price: 1750, old_price: 2700, img: "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg" },
    ],
    benefits: [
      "১০০% সুতি কাপড় রেগুলার ইউজের একদম পার্ফেক্ট।",
      "৪ হুকের ব্রা এবং মাঝারি ফিতা হওয়ায় কাধে এবং পিঠে ব্যথা হবেনা।",
      "ভারী ব্রেস্টকে সহজে হোল্ড করবে।",
      "সাইজ রয়েছে ৩২ থেকে ৪৪ পর্যন্ত।",
      "পুরো কম্বোতে থাকবে ৬ কালারের ৬ টি ব্রা।",
    ],
    why_buy: [
      "১০০% অরিজিনাল ছবির মতো পণ্য পাবেন।",
      "পণ্য হাতে পেয়ে মূল্য পরিশোধের সুবিধা।",
      "সম্পূর্ণ ক্যাশ অন ডেলিভারিতে অর্ডার সুবিধা।",
      "যে কোন সমস্যায় রিটার্ন এবং এক্সচেঞ্জ সুবিধা।",
    ],
    important_points: [
      "আমরা ভিডিওতে যা দেখাই সেই পণ্যই ডেলিভারিতে পাঠাই।",
      "অর্ডার কনফার্ম করার জন্য আমাদের কল সেন্টার থেকে ফোন করা হবে।",
    ],
    sizes: ["32", "34", "36", "38", "40", "42", "44"],
    shipping_options: [
      { label: "ঢাকার ভিতরে", cost: 80 },
      { label: "ঢাকার পার্শ্ববর্তী", cost: 110 },
      { label: "ঢাকার বাহিরে", cost: 130 },
    ],
    gallery: Array.from({ length: 8 }, (_, i) => `/assets/quality-${i + 1}.jpg`),
    reviews: [
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/56-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/55-1-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/54-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/53-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/52-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/51-2-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/58-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/57-1.webp",
    ],
    fb_pixel_id: "0000000000000001",
    whatsapp: "8801713536549",
    phone: "8801713536549",
  },
  "likke-me-bra": {
    slug: "likke-me-bra",
    title: "ইন্ডিয়ান লাইক মি ব্রা",
    subtitle: "নরম, আরামদায়ক, দীর্ঘস্থায়ী!",
    thumbnail:
      "https://narimoncloset.com/uploads/all/QbOzWS8ZPf2blVfseopJ81wYPvH7e50TDmXuFOv0.jpg",
    benefits_image:
      "https://narimoncloset.com/uploads/all/QbOzWS8ZPf2blVfseopJ81wYPvH7e50TDmXuFOv0.jpg",
    why_buy_image:
      "https://narimoncloset.com/uploads/all/QbOzWS8ZPf2blVfseopJ81wYPvH7e50TDmXuFOv0.jpg",
    video_id: "wEGRD2byTck",
    accent_color: "#d6336c",
    seo_title: "ইন্ডিয়ান লাইক মি ব্রা - ৬ পিস কম্বো অফার | Narimon Closet",
    seo_description: "নরম, আরামদায়ক লাইক মি ব্রা ৬ পিস কম্বো অফার। ক্যাশ অন ডেলিভারিতে অর্ডার করুন।",
    seo_keywords: ["লাইক মি ব্রা", "bra combo offer", "narimon closet"],
    canonical: "https://narimoncloset.com/landingpage/likke-me-bra",
    offers: [
      { label: "৬ পিস কম্বো", price: 999, old_price: 1500, img: "https://narimoncloset.com/uploads/all/QbOzWS8ZPf2blVfseopJ81wYPvH7e50TDmXuFOv0.jpg" },
      { label: "Likke Me Bra 2 pcs", price: 750, old_price: 950, img: "https://narimoncloset.com/uploads/all/QbOzWS8ZPf2blVfseopJ81wYPvH7e50TDmXuFOv0.jpg" },
      { label: "Likke Me Bra 4 pcs", price: 1250, old_price: 1800, img: "https://narimoncloset.com/uploads/all/QbOzWS8ZPf2blVfseopJ81wYPvH7e50TDmXuFOv0.jpg" },
    ],
    size_price_offers: [
      { label: "৩২–৪০ সাইজের কম্বো", price: 999 },
      { label: "৪২–৪৪ সাইজের কম্বো", price: 1099 },
    ],
    benefits: [
      "প্রিমিয়াম লেইস ফেব্রিক, ত্বকের জন্য নিরাপদ।",
      "নন-ওয়্যার ডিজাইন, সারাদিন আরাম।",
      "সাইজ রয়েছে ৩২ থেকে ৪৪ পর্যন্ত।",
    ],
    why_buy: [
      "১০০% অরিজিনাল পণ্য।",
      "ক্যাশ অন ডেলিভারি সুবিধা।",
      "এক্সচেঞ্জ সুবিধা।",
    ],
    important_points: [
      "ভিডিওতে দেখানো পণ্যই ডেলিভারি দেওয়া হয়।",
      "অর্ডার কনফার্মেশন কল আসবে।",
    ],
    sizes: ["32", "34", "36", "38", "40", "42", "44"],
    shipping_options: [
      { label: "ঢাকার ভিতরে", cost: 80 },
      { label: "ঢাকার বাহিরে", cost: 130 },
    ],
    gallery: Array.from({ length: 8 }, (_, i) => `/assets/quality-${i + 1}.jpg`),
    reviews: [
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/56-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/55-1-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/54-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/53-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/52-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/51-2-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/58-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/57-1.webp",
    ],
    fb_pixel_id: "0000000000000002",
    whatsapp: "8801713536549",
    phone: "8801713536549",
  },
  "sports-bra": {
    slug: "sports-bra",
    title: "স্পোর্টস ব্রা",
    subtitle: "ব্যায়াম ও দৌড়ের জন্য পার্ফেক্ট সাপোর্ট!",
    thumbnail:
      "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg",
    benefits_image:
      "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg",
    why_buy_image:
      "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg",
    video_id: "wEGRD2byTck",
    accent_color: "#1d7a3a",
    seo_title: "স্পোর্টস ব্রা - হাই ইম্প্যাক্ট সাপোর্ট কম্বো অফার | Narimon Closet",
    seo_description: "জিম ও দৌড়ের জন্য পার্ফেক্ট স্পোর্টস ব্রা কম্বো অফার। ক্যাশ অন ডেলিভারিতে অর্ডার করুন।",
    seo_keywords: ["স্পোর্টস ব্রা", "sports bra", "narimon closet"],
    canonical: "https://narimoncloset.com/landingpage/sports-bra",
    offers: [
      { label: "Sports Bra 2 pcs", price: 650, old_price: 850, img: "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg" },
      { label: "Sports Bra 3 pcs", price: 899, old_price: 1300, img: "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg" },
      { label: "Sports Bra 4 pcs", price: 1100, old_price: 1650, img: "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg" },
    ],
    benefits: [
      "হাই-ইম্প্যাক্ট সাপোর্ট, জিম ও দৌড়ের জন্য উপযুক্ত।",
      "শ্বাস নেওয়া যায় এমন কাপড়, ঘাম শোষণ করে।",
      "সাইজ রয়েছে ৩২ থেকে ৪০ পর্যন্ত।",
    ],
    why_buy: [
      "১০০% অরিজিনাল পণ্য।",
      "ক্যাশ অন ডেলিভারি সুবিধা।",
    ],
    important_points: [
      "ভিডিওতে দেখানো পণ্যই ডেলিভারি দেওয়া হয়।",
      "অর্ডার কনফার্মেশন কল আসবে।",
    ],
    sizes: ["32", "34", "36", "38", "40"],
    shipping_options: [
      { label: "ঢাকার ভিতরে", cost: 80 },
      { label: "ঢাকার বাহিরে", cost: 130 },
    ],
    gallery: Array.from({ length: 8 }, (_, i) => `/assets/quality-${i + 1}.jpg`),
    reviews: [
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/56-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/55-1-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/54-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/53-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/52-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/51-2-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/58-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/57-1.webp",
    ],
    fb_pixel_id: "0000000000000003",
    whatsapp: "8801713536549",
    phone: "8801713536549",
  },
  "comfort-bra": {
    slug: "comfort-bra",
    title: "কমফোর্ট ব্রা",
    subtitle: "সারাদিন আরামে থাকুন!",
    thumbnail:
      "https://narimoncloset.com/uploads/all/UwGp7rqzsHYExqfL6OwJqjZ3LsLfBdOoO9OyMjUI.jpg",
    benefits_image:
      "https://narimoncloset.com/uploads/all/UwGp7rqzsHYExqfL6OwJqjZ3LsLfBdOoO9OyMjUI.jpg",
    why_buy_image:
      "https://narimoncloset.com/uploads/all/UwGp7rqzsHYExqfL6OwJqjZ3LsLfBdOoO9OyMjUI.jpg",
    video_id: "wEGRD2byTck",
    accent_color: "#5f3dc4",
    seo_title: "কমফোর্ট ব্রা - সফট ফোম কাপ কম্বো অফার | Narimon Closet",
    seo_description: "সারাদিন আরামে থাকার জন্য কমফোর্ট ব্রা কম্বো অফার। ক্যাশ অন ডেলিভারিতে অর্ডার করুন।",
    seo_keywords: ["কমফোর্ট ব্রা", "comfort bra", "narimon closet"],
    canonical: "https://narimoncloset.com/landingpage/comfort-bra",
    offers: [
      { label: "২ পিস কমফোর্ট ব্রা", price: 950, old_price: 1350, img: "https://narimoncloset.com/uploads/all/UwGp7rqzsHYExqfL6OwJqjZ3LsLfBdOoO9OyMjUI.jpg" },
      { label: "৩ পিস কমফোর্ট ব্রা", price: 1350, old_price: 1950, img: "https://narimoncloset.com/uploads/all/UwGp7rqzsHYExqfL6OwJqjZ3LsLfBdOoO9OyMjUI.jpg" },
      { label: "৪ পিস কমফোর্ট ব্রা", price: 1650, old_price: 2400, img: "https://narimoncloset.com/uploads/all/UwGp7rqzsHYExqfL6OwJqjZ3LsLfBdOoO9OyMjUI.jpg" },
    ],
    benefits: [
      "সফট ফোম কাপ, কোনো চাপ অনুভূত হবে না।",
      "ওয়্যার-ফ্রি ডিজাইন।",
      "সাইজ রয়েছে ৩২ থেকে ৪৪ পর্যন্ত।",
    ],
    why_buy: [
      "১০০% অরিজিনাল পণ্য।",
      "ক্যাশ অন ডেলিভারি সুবিধা।",
      "রিটার্ন এবং এক্সচেঞ্জ সুবিধা।",
    ],
    important_points: [
      "ভিডিওতে দেখানো পণ্যই ডেলিভারি দেওয়া হয়।",
      "অর্ডার কনফার্মেশন কল আসবে।",
    ],
    sizes: ["32", "34", "36", "38", "40", "42", "44"],
    shipping_options: [
      { label: "ঢাকার ভিতরে", cost: 80 },
      { label: "ঢাকার বাহিরে", cost: 130 },
    ],
    gallery: Array.from({ length: 8 }, (_, i) => `/assets/quality-${i + 1}.jpg`),
    reviews: [
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/56-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/55-1-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/54-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/53-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/52-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/51-2-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/58-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/57-1.webp",
    ],
    fb_pixel_id: "0000000000000004",
    whatsapp: "8801713536549",
    phone: "8801713536549",
  },
  "luvlace-bra": {
    slug: "luvlace-bra",
    title: "লুভলেস ব্রা",
    subtitle: "অস্বস্তির সাথে ব্রেকআপ",
    subtitle2: "৩ পিস ব্রা একসাথে নিলেই পাচ্ছেন ৩০% ডিস্কাউন্ট এই মাত্র ৯৯৯ টাকা। কোন অগ্রিম টাকা ছাড়া পন্য অর্ডার করুন।",
    thumbnail: "https://shop.bunondhara.com/wp-content/uploads/2025/11/56-1.webp",
    benefits_image: "https://shop.bunondhara.com/wp-content/uploads/2025/12/new-1-b-1024x1024.webp",
    why_buy_image: "https://shop.bunondhara.com/wp-content/uploads/2025/12/new-3-b.webp",
    video_id: "wEGRD2byTck",
    accent_color: "#F700FF",
    seo_title: "লুভলেস ব্রা - লেইস ডিজাইন কম্বো অফার | Narimon Closet",
    seo_description: "লেইস ডিজাইনের লুভলেস ব্রা কম্বো অফার। ক্যাশ অন ডেলিভারিতে অর্ডার করুন।",
    seo_keywords: ["লুভলেস ব্রা", "luvlace bra", "narimon closet"],
    canonical: "https://narimoncloset.com/landingpage/luvlace-bra",
    price_label: "৩ পিস",
    offers: [
      { label: "৩ পিস", price: 999, old_price: 1450, img: "https://shop.bunondhara.com/wp-content/uploads/2025/11/56-1.webp" },
      { label: "LuvLace Bra 2 pcs", price: 750, old_price: 1000, img: "https://shop.bunondhara.com/wp-content/uploads/2025/11/56-1.webp" },
      { label: "LuvLace Bra 4 pcs", price: 1250, old_price: 1900, img: "https://shop.bunondhara.com/wp-content/uploads/2025/11/56-1.webp" },
    ],
    benefits: [
      "প্রিমিয়াম লেইস ফেব্রিক, ত্বকের জন্য নিরাপদ।",
      "নন-ওয়্যার ডিজাইন, সারাদিন আরাম।",
      "সাইজ রয়েছে ৩২ থেকে ৪৪ পর্যন্ত।",
    ],
    why_buy: [
      "১০০% অরিজিনাল পণ্য।",
      "ক্যাশ অন ডেলিভারি সুবিধা।",
      "রিটার্ন এবং এক্সচেঞ্জ সুবিধা।",
    ],
    important_points: [
      "ভিডিওতে দেখানো পণ্যই ডেলিভারি দেওয়া হয়।",
      "অর্ডার কনফার্মেশন কল আসবে।",
    ],
    sizes: ["32", "34", "36", "38", "40", "42", "44"],
    shipping_options: [
      { label: "ঢাকার ভিতরে", cost: 80 },
      { label: "ঢাকার বাহিরে", cost: 130 },
    ],
    gallery: [
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/56-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/55-1-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/54-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/53-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/52-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/51-2-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/58-1.webp",
      "https://shop.bunondhara.com/wp-content/uploads/2025/11/57-1.webp",
    ],
    fb_pixel_id: "0000000000000005",
    whatsapp: "8801713536549",
    phone: "8801713536549",
  },
};

export function getMockLandingPage(slug: string): LandingPage | null {
  return MOCK_LANDING_PAGES[slug] ?? null;
}

export function getMockLandingPages(): LandingPage[] {
  return Object.values(MOCK_LANDING_PAGES);
}
