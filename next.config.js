/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tailwindui.com', 'dummyimage.com']
  }
}

module.exports = nextConfig
