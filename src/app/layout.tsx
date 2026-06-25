import type { Metadata, Viewport } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import Script from "next/script";
import { getOrganization } from "@/lib/api";
import "./globals.css";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bengali",
  weight: ["500", "600", "700"],
  subsets: ["bengali", "latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const org = await getOrganization().catch(() => null);

  return {
    title: "ইন্ডিয়ান লাইক মি ব্রা — Narimon Closet",
    description: "৬ পিস কম্বো অফার প্রাইজ ৯৯৯/- টাকা মাত্র",
    icons: org?.favicon || org?.logo ? { icon: org.favicon ?? org.logo, shortcut: org.favicon ?? org.logo } : undefined,
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const org = await getOrganization().catch(() => null);
  const FB_PIXEL_ID = org?.facebook_pixel_id;

  return (
    <html
      lang="bn"
      className={`${notoSerifBengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {FB_PIXEL_ID && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
