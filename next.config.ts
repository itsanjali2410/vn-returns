import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.vjv.com',
      },
    ],
  },
  generateEtags: true,
  compress: true,
  experimental: {
    optimizePackageImports: ['lodash', 'date-fns'],
  },  
  output: 'standalone',  
};

export default nextConfig;
