const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    }],
  }
};

module.exports = merge(baseConfig, config);
