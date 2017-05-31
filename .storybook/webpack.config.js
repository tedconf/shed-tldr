const cssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const path = require('path');
const {
  APP_PATH,
  DIST_PATH,
  NODE_MODULES_PATH,
} = require('../config/paths');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_PATH,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.svg$/,
        include: APP_PATH,
        use: [
          'babel-loader',
          'svg-react-loader',
        ],
      },
      {
        test: /\.css$/,
        include: APP_PATH,
        use: [
          {
            loader: 'style-loader',
            options: {
              name: `${DIST_PATH}/[path][name].[ext]`,
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcss: wp => ([
                postcssImport({
                  addDependencyTo: wp,
                }),
                cssnext(),
              ]),
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: APP_PATH,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'public/fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      NODE_MODULES_PATH,
      APP_PATH,
    ],
    alias: {
      components: path.resolve(APP_PATH, 'components'),
      config: path.resolve(APP_PATH, 'config'),
      modules: path.resolve(APP_PATH, 'modules'),
    },
  },
};
