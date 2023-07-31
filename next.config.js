/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["nexus.traction.one", "raw.githubusercontent.com"]
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
