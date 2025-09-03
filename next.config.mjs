/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/hcmc/education/main',
  // assetPrefix: '/hcmc/education/main',
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
