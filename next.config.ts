import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.IS_LOCAL ? "/holiday-react" : "",
  images: {
    unoptimized: true, // Disable Next.js image optimization
  }
};

export default nextConfig;
