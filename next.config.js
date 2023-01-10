/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack(conf, { buildId, dev, isServer, defaultLoaders, webpack }) {
    conf.optimization.splitChunks.cacheGroups = {};
    conf.optimization.minimize = true;
    conf.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
          },
        ],
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ["url-loader"],
      }
    );
    conf.resolve.modules.push(__dirname);
    return conf;
  },
};

module.exports = nextConfig;
