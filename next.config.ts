import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true,
  },
  webpack: (config) => {
    config.externals = [
      ...(config.externals || []),
      {
        sharp: 'commonjs sharp',
      },
    ];
    return config;
  },
};

export default nextConfig;
