/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/kyoongdev.github.io' : '',
  experimental: {
    appDir: true,
  },
  webpack(conf) {
    conf.optimization.splitChunks.cacheGroups = {};
    conf.optimization.minimize = true;
    conf.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ['url-loader'],
      },
    );
    conf.resolve.modules.push(__dirname);
    return conf;
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    '/blogs': { page: '/blogs' },
  }),
};

module.exports = nextConfig;
