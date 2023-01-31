/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const removeImports = require('next-remove-imports')();

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    domains: ['sgp1.vultrobjects.com'],
  },
  webpack(conf) {
    conf.optimization.splitChunks.cacheGroups = {};
    conf.optimization.minimize = true;

    conf.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    conf.resolve.modules.push(__dirname);
    return conf;
  },
};

module.exports = removeImports({
  ...nextConfig,
});
