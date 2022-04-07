//  webpack 配置 shimming 配置  全局变量<预制依赖>
const { merge } = require('webpack-merge')
const common = require('../webpack.base.js')
const webpack = require('webpack')
module.exports = merge(common, {
  entry: './src/entry/shimming.js',
  plugins: [
    // ProvidePlugin  当遇到 & 符号的时候 就去 引入并使用 jquery 这个包
    new webpack.ProvidePlugin({
      $: 'jquery'
      // ajax:['jquery','ajax']
    })
  ]
})
