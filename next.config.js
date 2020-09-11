const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = withSass(withCSS({
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });
    config.plugins.push(new OptimizeCSSAssetsPlugin({}))
    return config
  }
}));