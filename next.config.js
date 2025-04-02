/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
  experimental: {
    appDir: false,
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
};

module.exports = nextConfig;