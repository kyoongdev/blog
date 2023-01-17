/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
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

module.exports = nextConfig;
