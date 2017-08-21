const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('../webpack.config')
const env = require('./env')
const path = require('path')

require('./prepare')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

const options = (config.buildOptions || {})
const excludeEntriesToHotReload = (options.notHotReload || [])

// Add dev entires
config.entry['devListener'] = path.join(__dirname, '..', 'src', 'assets', 'js', 'devListener.js')

// Add devserver hot-reload to entries not in blacklist
for (let entryName in config.entry) {
  if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
    config.entry[entryName] =
      [
        ('webpack-dev-server/client?http://localhost:' + env.PORT),
        'webpack/hot/dev-server'
      ].concat(config.entry[entryName])
  }
}

// Dev plugins
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '..', 'src', 'public', 'background.html'),
    filename: 'background.html',
    chunks: ['background', 'devListener']
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '..', 'src', 'public', 'window.html'),
    filename: 'window.html',
    chunks: ['popup']
  }),
  new WriteFilePlugin()
].concat(config.plugins || [])

const compiler = webpack(config)

const server = new WebpackDevServer(
  compiler,
  {
    hot: true,
    stats: {
      colors: true
    },
    contentBase: path.join(__dirname, '../build'),
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
)

server.listen(env.PORT)
