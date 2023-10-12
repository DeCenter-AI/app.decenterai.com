/** @type {import('next').NextConfig} */
const value=0;
const nextConfig = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/signup', // Matched parameters can be used in the destination
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
