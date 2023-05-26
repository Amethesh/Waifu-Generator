/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.waifu.pics"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
