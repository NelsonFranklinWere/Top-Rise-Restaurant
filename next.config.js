/** @type {import('next').NextConfig} */
const nextConfig = {
  // Runs as a Node server (next start) so the admin API can reach PostgreSQL.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@fortawesome/free-solid-svg-icons", "@fortawesome/free-brands-svg-icons"],
  },
};

module.exports = nextConfig;
