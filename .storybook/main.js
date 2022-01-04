const path = require('path');

module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  features: {
    storyStoreV7: true,
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.s[ac]ss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '/assets': path.resolve(__dirname, '/public/assets'),
      '@/layout': path.resolve(__dirname, '/src/components/00-layout/index'),
      '@/elements': path.resolve(__dirname, '/src/components/01-elements/'),
      '@/modules': path.resolve(__dirname, '/src/components/02-modules/'),
      '@/sections': path.resolve(__dirname, '/src/components/03-sections/'),
    };

    return config;
  },
};
