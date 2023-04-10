/** @type {import('next').NextConfig} */
// next.config.js

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
