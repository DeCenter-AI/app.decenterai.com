/** @type {import('next').NextConfig} */
const value = 0
const nextConfig = {
   webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    domains: ['avataaars.io'],
  },
  experimental: {
    appDir: true,
  },
  // distDir: 'build',
  //output: 'export',
  reactStrictMode: false,
  swcMinify: true,
  modularizeImports: {},
  async redirects() {
    return [
      {
        source: '/',
        destination: '/explore', // Matched parameters can be used in the destination
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
