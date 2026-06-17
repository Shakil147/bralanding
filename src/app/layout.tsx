import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bengali",
  weight: ["500", "600", "700"],
  subsets: ["bengali", "latin"],
});

export const metadata: Metadata = {
  title: "ইন্ডিয়ান লাইক মি ব্রা — Narimon Closet",
  description: "৬ পিস কম্বো অফার প্রাইজ ৯৯৯/- টাকা মাত্র",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${notoSerifBengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
