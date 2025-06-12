import { isLocal } from "@/isLocal";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: !isLocal ? "/holiday-react" : "",
  images: {
    unoptimized: true, // Disable Next.js image optimization
  }
};

export default nextConfig;
