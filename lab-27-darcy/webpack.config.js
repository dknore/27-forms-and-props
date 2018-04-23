'use strict';

// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/app.js',
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/,loader: ['style-loader', 'css-loader']}
    ]
  }
  // plugins: [
  //   new HtmlWebpackPlugin()
  // ],
};

module.exports = config;