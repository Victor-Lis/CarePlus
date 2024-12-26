import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: '',
        pathname: '/images/I/**',
      },
      {
        protocol: "https",
        hostname: "thgitwnedgysehxrkyzm.supabase.co",
        port: '',
        pathname: '/storage/v1/object/public/imagens/produtos/**',
      },
    ],
  },
};

export default nextConfig;
