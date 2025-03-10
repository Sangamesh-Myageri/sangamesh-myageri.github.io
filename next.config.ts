/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Add basePath if deploying to a subdirectory (e.g., /portfolio)
  // basePath: '', // Leave empty for root deployment
  // Optional: Asset prefix to match the root
  assetPrefix: './', // Ensures assets are loaded relative to the root
};

module.exports = nextConfig;