'use strict';

const { ProvidePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = require('./paths');

// Used in the module rules and in the stats exclude list
const IMAGE_TYPES = /\.(png|jpe?g|gif|svg)$/i;

// To re-use webpack configuration across templates,
// CLI maintains a common webpack configuration file - `webpack.common.js`.
// Whenever user creates an extension, CLI adds `webpack.common.js` file
// in template's `config` folder
const common = {
  output: {
    // the build folder to output bundles and assets in.
    path: PATHS.build,
    // the filename template for entry chunks
    filename: '[name].js',
  },
  stats: {
    all: false,
    errors: true,
    builtAt: true,
    assets: true,
    excludeAssets: [IMAGE_TYPES],
  },
  module: {
    rules: [
      // Check for TypeScript files
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
      // Help webpack in understanding CSS files imported in .js files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // Check for images imported in .js files and
      {
        test: IMAGE_TYPES,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // Help webpack resolve these extensions in order
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new ProvidePlugin({
      browser: "webextension-polyfill"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/manifest.json',
          context: 'public',
          transform: (content) => {
            const targetBrowser = process.env.TARGET_BROWSER || 'firefox';
            const manifest = JSON.parse(content.toString());
            if (targetBrowser === 'firefox') {
              manifest.background.scripts = ['background.js']
              manifest.browser_specific_settings = {
                gecko: {
                  id: '{e62ee532-0390-4390-8073-a32b187f7e96}',
                  strict_min_version: '100.0',
                },
              };
            } else {
              manifest.background.service_worker = 'background.js';
              manifest.background.type = 'module';
            }

            return JSON.stringify(manifest, null, 2);
          },
        },
        {
          from: '**/*',
          context: 'public',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = common;
