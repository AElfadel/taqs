/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pixelstalk.net',
        port: '',
        pathname: '/wp-content/uploads/2016/07/**',
      },
    ],
  },
}
