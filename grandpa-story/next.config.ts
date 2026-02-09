import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/**',
      },
    ],
  },
  // Force fresh build - disable all caching temporarily
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

export default nextConfig;
