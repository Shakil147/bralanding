import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats; AVIF preferred, WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Allowed quality values (required since Next 16).
    qualities: [50, 60, 75],
    // Optimized images change rarely — cache them for 31 days.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      // Live product/landing imagery.
      { protocol: "https", hostname: "landing.elevenpos.online", pathname: "/storage/**" },
      // Fallback defaults baked into data.ts.
      { protocol: "https", hostname: "narimoncloset.com", pathname: "/uploads/**" },
    ],
  },
};

export default nextConfig;
