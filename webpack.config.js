const path = require('path');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ],
  },
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'prop-types',
      'axios',
      'lodash.debounce',
      'lodash.pickBy',
    ],
    app: ['./lib/renderers/dom.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.js/, exclude: /node_modules/, use: 'babel-loader'}
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all',
          minChunks: 2,
          enforce: true
        }
      }
    }
  }
};

module.exports = config;
