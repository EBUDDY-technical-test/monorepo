import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@repo/entities']
};

export default nextConfig;
