const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pathsToClean = [
  'dist'
]

const cleanOptions = {
  exclude:  ['_redirects'],
  verbose:  true,
  dry:      false
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(
      pathsToClean,
      cleanOptions
    ),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([
      { from: './assets/**/*', to: './' }
    ])
  ]
};