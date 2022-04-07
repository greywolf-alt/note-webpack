const common = require('../webpack.base.js')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  entry: './src/entry/assets.js'
})
