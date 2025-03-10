/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: './', // Use relative paths for GitHub Pages root deployment
  trailingSlash: true, // Optional, but recommended for static sites
};

module.exports = nextConfig;