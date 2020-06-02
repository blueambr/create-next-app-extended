const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new StylelintPlugin({
        fix: true,
      })
    );

    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: { emitWarning: dev },
    });

    return config;
  },
};
