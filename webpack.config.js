'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'main.js',
    library: 'shared-components',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
