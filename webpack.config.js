const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development', // 项目打包环境
  entry: { // 配置入口
    main: {
      import: './main.js',
      dependOn: 'shared'
    },
    duplicate: {
      import: './duplicate.js',
      dependOn: 'shared'
    },  // 多入口
    shared: 'lodash', // 公共的模块  与上面 entry.XX.depenOn 对应
  },
  output: { //输出文件
    filename: '[name].js', // 输出的文件名称
    path: path.resolve(__dirname, 'dist'), // 输出的文件路径
    // publicPath: '/', // wenpack-dev-middleware  使用的路径 引入的根路径
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
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: { //将公共的模块提取到一个新的打包文件中
      chunks: 'all'
    }
  },
  // 解析规则
  resolve: {
    extensions: ['.ts', '.js'] // 扩展 => 没有文件后缀的时候 依次在这个数组里面匹配文件<从左往右>
  },
  plugins: [ // 打包时候需要用到的插件
    new HtmlWebpackPlugin({
      title: 'learn webpack'
    }),
    // new CleanWebpackPlugin()
  ]
}
