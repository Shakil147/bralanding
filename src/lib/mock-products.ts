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
    banner:
      "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg",
    video_id: "wEGRD2byTck",
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
    fb_pixel_id: "0000000000000001",
    whatsapp: "8801713536549",
    phone: "8801713536549",
  },
  "likke-me-bra": {
    slug: "likke-me-bra",
    title: "ইন্ডিয়ান লাইক মি ব্রা",
    subtitle: "নরম, আরামদায়ক, দীর্ঘস্থায়ী!",
    banner:
      "https://narimoncloset.com/uploads/all/QbOzWS8ZPf2blVfseopJ81wYPvH7e50TDmXuFOv0.jpg",
    video_id: "wEGRD2byTck",
    offers: [
      { label: "৬ পিস কম্বো", price: 999, old_price: 1400, img: "https://narimoncloset.com/uploads/all/QbOzWS8ZPf2blVfseopJ81wYPvH7e50TDmXuFOv0.jpg" },
      { label: "Likke Me Bra 2 pcs", price: 750, old_price: 950, img: "https://narimoncloset.com/uploads/all/QbOzWS8ZPf2blVfseopJ81wYPvH7e50TDmXuFOv0.jpg" },
      { label: "Likke Me Bra 4 pcs", price: 1250, old_price: 1800, img: "https://narimoncloset.com/uploads/all/QbOzWS8ZPf2blVfseopJ81wYPvH7e50TDmXuFOv0.jpg" },
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
    fb_pixel_id: "0000000000000002",
    whatsapp: "8801713536549",
    phone: "8801713536549",
  },
  "sports-bra": {
    slug: "sports-bra",
    title: "স্পোর্টস ব্রা",
    subtitle: "ব্যায়াম ও দৌড়ের জন্য পার্ফেক্ট সাপোর্ট!",
    banner:
      "https://narimoncloset.com/uploads/all/QYRGQxHDatu8ncUdaDB1EroGnjYW593G7dSJyl07.jpg",
    video_id: "wEGRD2byTck",
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
    fb_pixel_id: "0000000000000003",
    whatsapp: "8801713536549",
    phone: "8801713536549",
  },
  "comfort-bra": {
    slug: "comfort-bra",
    title: "কমফোর্ট ব্রা",
    subtitle: "সারাদিন আরামে থাকুন!",
    banner:
      "https://narimoncloset.com/uploads/all/UwGp7rqzsHYExqfL6OwJqjZ3LsLfBdOoO9OyMjUI.jpg",
    video_id: "wEGRD2byTck",
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
    fb_pixel_id: "0000000000000004",
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
