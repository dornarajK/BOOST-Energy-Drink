import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // hyvä tässä vaiheessa
    disableStaticImages: true,
  },
  experimental: {
    typedRoutes: true,  // (jos käytät App Routeria)
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
