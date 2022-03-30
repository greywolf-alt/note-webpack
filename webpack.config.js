const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    index: './main.js',
    duplicate: './duplicate.js'  // 多入口
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader']
      }, {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }, {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'learn webpack'
    }),
    new CleanWebpackPlugin()
  ]
}
