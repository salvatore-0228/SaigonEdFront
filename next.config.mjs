/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/education',
  // assetPrefix: '/education/',
  output: "export",

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
