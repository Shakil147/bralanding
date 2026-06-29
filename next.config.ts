import type { NextConfig } from "next";

// Laravel serves uploaded assets (logo, favicon, landing-page imagery) from
// the same host as the API itself — derive the allowed image host from
// LARAVEL_API_BASE_URL (.env.local) instead of hardcoding a domain here.
const apiHost = new URL(process.env.LARAVEL_API_BASE_URL ?? "http://localhost:8000/api");

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats; AVIF preferred, WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Allowed quality values (required since Next 16).
    qualities: [50, 60, 75],
    // Optimized images change rarely — cache them for 31 days.
    minimumCacheTTL: 2678400,
    // Local dev API host (Valet/Herd *.test) resolves to a private IP;
    // Next 16 blocks local-IP optimization by default.
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: apiHost.protocol.replace(":", "") as "http" | "https",
        hostname: apiHost.hostname,
        port: apiHost.port,
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
