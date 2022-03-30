const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleWare = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleWare(compiler, {
  publicPath: webpackConfig.output.publicPath
}))

let part = 3000
app.listen(part, () => {
  console.log('i am running at 127.0.0.1:3000 ')
})
