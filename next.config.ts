/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};
module.exports = nextConfig;