/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = {
  compiler: {
    styledComponents: true,
  },
  env: {
    APP_HOST: process.env.APP_HOST,
  },
  ...nextConfig,
}
