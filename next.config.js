/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore les erreurs ESLint au build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore les erreurs TypeScript au build
  },
};

module.exports = nextConfig;
