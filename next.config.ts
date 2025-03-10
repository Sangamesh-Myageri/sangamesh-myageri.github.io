/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
      unoptimized: true,
  },
  assetPrefix: '/sangamesh-myageri.github.io/', // Replace with your repo name
  trailingSlash: true, // Optional, but recommended
};

module.exports = nextConfig;