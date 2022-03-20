/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: [
      'picsum.photos',
      'payscathare.org',
      'scontent.frba4-2.fna.fbcdn.net',
      'idata.over-blog.com',
    ],
  },
};

module.exports = nextConfig;
