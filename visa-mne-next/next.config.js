/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/websites2',
  assetPrefix: '/websites2',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compress: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'core-js': false,
      'regenerator-runtime': false,
    };
    return config;
  },
};

module.exports = nextConfig;
