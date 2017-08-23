const webpack = require('webpack')
const ProgressPlugin = webpack.ProgressPlugin
const config = require('../webpack.config')

require('./prepare')

config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      properties: true,
      keep_fargs: false,
      pure_getters: true,
      collapse_vars: true,
      unsafe: true,
      warnings: false,
      screw_ie8: true,
      sequences: true,
      dead_code: true,
      drop_debugger: true,
      comparisons: true,
      conditionals: true,
      evaluate: true,
      booleans: true,
      loops: true,
      unused: true,
      hoist_funs: true,
      if_return: true,
      join_vars: true,
      cascade: true,
      drop_console: true
    },
    sourceMap: true
  })
].concat(config.plugins || [])

const compiler = webpack(
  config,
  err => { if (err) throw err }
)

compiler.apply(new ProgressPlugin((percentage, msg, current, active, modulepath) => {
  if (process.stdout.isTTY && percentage < 1) {
    process.stdout.cursorTo(0)
    modulepath = modulepath ? ' …' + modulepath.substr(modulepath.length - 30) : ''
    current = current ? ' ' + current : ''
    active = active ? ' ' + active : ''
    process.stdout.write((percentage * 100).toFixed(0) + '% ' + msg + current + active + modulepath + ' ')
    process.stdout.clearLine(1)
  } else if (percentage === 1) {
    process.stdout.write('\n')
    console.log('webpack: done.')
  }
}))

compiler.run((err, stats) => {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
})
