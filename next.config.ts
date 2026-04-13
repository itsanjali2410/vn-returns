import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
  ...(process.env.NODE_ENV === 'production' && { output: 'standalone' as const }),
};

export default nextConfig;
