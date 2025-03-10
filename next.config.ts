/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export as GitHub Pages doesn’t support Next.js image optimization
  },
  // Optional: Add basePath if deploying to a subdirectory (e.g., github.io/repo)
  // basePath: '/portfolio-sangamesh',
};

module.exports = nextConfig;