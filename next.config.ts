import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack for production builds (can cause hangs on Vercel)
  experimental: {
    turbo: undefined,
  },
};

export default nextConfig;
