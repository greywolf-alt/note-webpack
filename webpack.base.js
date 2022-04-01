/**
 * 需要配置入口文件
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development', // 项目打包环境
  output: { //输出文件
    filename: '[name].js', // 输出的文件名称
    path: path.resolve(__dirname, 'dist'), // 输出的文件路径 
    clean: true, // 输出之前 先删除原有文件
    pathinfo: false, //  不输出路径关系
  },
  module: { // 打包模块
    rules: [ //打包模块使用的规则
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src')
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        include: path.resolve(__dirname, 'src')
      },
    ]
  },
  // 解析规则
  resolve: {
    extensions: ['.ts', '.js'] // 扩展 => 没有文件后缀的时候 依次在这个数组里面匹配文件<从左往右>
  },
  plugins: [ // 打包时候需要用到的插件
    new HtmlWebpackPlugin({
      title: 'learn webpack'
    }),
  ]
}
