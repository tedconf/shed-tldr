const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const OfflinePlugin = require('offline-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const { DIST_PATH, APP_PATH } = require('./paths');

const PRODUCTION_CONFIG = {
  entry: {
    client: [
      APP_PATH,
    ],
    vendor: [
      'preact',
      'preact-compat',
    ],
  },

  resolve: {
    alias: {
      // 'preact-compat': 'preact-compat',
      // react: 'preact-compat',
      // 'react-dom': 'preact-compat',
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_PATH,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                'es2015',
                {
                  modules: false,
                },
              ],
              'react',
              'stage-0',
            ],
            plugins: [
              require('babel-plugin-shed'),
              require('babel-plugin-transform-flow-strip-types'),
              require('babel-plugin-syntax-flow'),
              require('babel-plugin-transform-class-properties'),
              require('babel-plugin-transform-object-rest-spread'),
              require('babel-plugin-transform-runtime'),
            ],
          },
        },
      },
    ],
  },

  output: {
    publicPath: '/',
    path: DIST_PATH,
    filename: '[name]-[chunkhash].bundle.js',
    chunkFilename: '[id]-[chunkhash].bundle.js',
  },

  performance: {
    maxAssetSize: 100,
    maxEntrypointSize: 300,
    hints: 'warning',
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),

    new LodashModuleReplacementPlugin({
      currying: true,
      paths: true,
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),

    new ManifestPlugin({
      fileName: 'webpack-asset-manifest.json',
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 3,
      filename: 'vendor.[chunkhash:6].js',
    }),

    new WebpackMd5Hash(),

    new PreloadWebpackPlugin(),

    new OfflinePlugin({
      safeToUseOptionalCaches: true,

      caches: {
        main: [
          '*-*.bundle.js',
          'vendor.*.js',
          'client.*.js',
          'vendor.*.js',
        ],
        additional: [
          'public/fonts/*',
          ':externals:',
        ],
        optional: [
          ':rest:',
        ],
      },

      externals: [
        'public/fonts/*',
      ],

      ServiceWorker: {
        events: true,
        navigateFallbackURL: '/',
      },

      AppCache: {
        events: true,
        FALLBACK: {
          '/': '/index.html',
        },
      },
    }),
  ],
};

module.exports = PRODUCTION_CONFIG;
