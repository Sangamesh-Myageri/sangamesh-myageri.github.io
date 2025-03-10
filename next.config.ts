/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Add basePath if needed (e.g., if deploying to a subdirectory like /portfolio)
  // basePath: '', // Leave empty for root deployment
  assetPrefix: './', // Ensures assets are loaded relative to the root
  // Optional: Trailing slash for consistency
  trailingSlash: true, // Helps with path resolution on GitHub Pages
};

module.exports = nextConfig;