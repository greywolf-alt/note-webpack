const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development', // 项目打包环境
  entry: { // 配置入口
    index: './main.js',
    duplicate: './duplicate.js'  // 多入口
  },
  output: { //输出文件
    filename: '[name].js', // 输出的文件名称
    path: path.resolve(__dirname, 'dist'), // 输出的文件路径
    clean: true // 输出之前 先删除原有文件
  },
  devtool: 'inline-source-map', // 源代码映射关系
  devServer: {  // 配置webpack-dev-server
    static: './dist'
  },
  module: { // 打包模块
    rules: [ //打包模块使用的规则
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
  plugins: [ // 打包时候需要用到的插件
    new HtmlWebpackPlugin({
      title: 'learn webpack'
    }),
    // new CleanWebpackPlugin()
  ]
}
