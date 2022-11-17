/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  compiler: {
    styledComponents: true,
  },
  ...nextConfig,
}
