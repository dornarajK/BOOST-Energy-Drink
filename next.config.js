/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
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

module.exports = nextConfig; 