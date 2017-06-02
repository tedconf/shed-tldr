const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const cssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');

const DEVELOPMENT_CONFIG = require('./config/webpack.dev');
const PRODUCTION_CONFIG = require('./config/webpack.prod');
const {
  APP_PATH,
  DIST_PATH,
  NODE_MODULES_PATH,
} = require('./config/paths');

const ENV = process.env.NODE_ENV;
const VALID_ENVIRONMENTS = ['test', 'development', 'production'];

if (!VALID_ENVIRONMENTS.includes(ENV)) {
  throw new Error(`${ENV} is not valid environment!`);
}

const DEFAULT_ENVIRONMENTS = VALID_ENVIRONMENTS.reduce((prev, curr) => (
  Object.assign({}, prev, {
    [curr]: false,
  })
), {});

const config = {
  development: DEVELOPMENT_CONFIG,
  production: PRODUCTION_CONFIG,
}[ENV];


const COMMON_CONFIG = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-media',
      'react-shed',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'glamorous',
      'glamor',
    ],
  },

  output: {
    path: DIST_PATH,
    filename: 'bundle-[name].js',
    chunkFilename: 'chunk-[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_PATH,
        exclude: NODE_MODULES_PATH,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'eslint-loader',
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
      {
        test: /\.svg$/,
        include: APP_PATH,
        use: [
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

  performance: {
    hints: false,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),

    new webpack.EnvironmentPlugin(DEFAULT_ENVIRONMENTS),

    new webpack.NamedModulesPlugin(),

    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: /vendor.*\.js$/,
    }),

    new HTMLWebpackPlugin({
      title: 'Dudeman',
      template: './config/index.ejs',
    }),

    new HTMLWebpackPlugin({
      filename: '200.html',
      title: 'Dudeman',
      template: './config/index.ejs',
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          emitWarning: true,
        },
      },
    }),
  ],
};

module.exports = webpackMerge.smart(COMMON_CONFIG, config);
