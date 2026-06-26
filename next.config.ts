import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://narimoncloset.com/uploads/**")],
  },
};

export default nextConfig;
