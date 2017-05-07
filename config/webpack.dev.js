const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');


const {
  HOT_ONLY_ENTRY,
  NODE_MODULES_PATH,
} = require('./paths');

const DEVELOPMENT_CONFIG = {
  entry: {
    client: [
      'react-hot-loader/patch',
      HOT_ONLY_ENTRY,
    ],
  },

  cache: true,

  devServer: {
    hot: true,
    port: 1984,
    inline: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: {
      assets: true,
      timings: true,
      colors: true,
      chunks: false,
      children: false,
    },
  },

  output: {
    publicPath: '/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      title: '--APP_NAME--',
      template: './config/index.ejs',
    }),
    new WatchMissingNodeModulesPlugin(NODE_MODULES_PATH),
  ],
};

module.exports = DEVELOPMENT_CONFIG;
