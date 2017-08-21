const webpack = require('webpack')
const path = require('path')
const fileSystem = require('fs')
const env = require('./utils/env')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// load the secrets
const alias = {}

const secretsPath = path.join(__dirname, ('secrets.' + env.NODE_ENV + '.js'))

const fileExtensions = ['jpg', 'jpeg', 'png', 'gif', 'eot', 'otf', 'svg', 'ttf', 'woff', 'woff2']

if (fileSystem.existsSync(secretsPath)) {
  alias['secrets'] = secretsPath
}

const options = {
  entry: {
    popup: path.join(__dirname, 'src', 'popup.js'),
    background: path.join(__dirname, 'src', 'background.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['source-map-loader', 'eslint-loader']
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      },
      {
        test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
        loader: 'file-loader?name=[name].[ext]',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: alias
  },
  stats: {
    colors: true
  },
  plugins: [
    // expose and write the allowed env vars on the compiled bundle
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'public', 'popup.html'),
      filename: 'popup.html',
      chunks: ['popup']
    })
  ],
  devtool: env.NODE_ENV === 'development'
    ? 'cheap-module-eval-source-map'
    : 'cheap-module-source-map'
}

module.exports = options
