/** @type {import('next').NextConfig} */
const nextConfig = {
  // Runs as a Node server (not a static export) so /admin and the menu API can reach PostgreSQL.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
};

module.exports = nextConfig;
