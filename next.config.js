/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["nexus.traction.one"]
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
