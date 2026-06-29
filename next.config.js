/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/webp'],
  },
  experimental: {
    optimizePackageImports: ['antd'],
  },
};

module.exports = nextConfig;
