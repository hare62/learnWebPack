const path = require('path');
module.exports = {
  entry: './src/index.js',//入口文件
  // 配置文件的模块
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            // name:'[name]_[hash].[ext]',
            // outputPath:'images/',
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:{
              importLoaders:2,
              modules:true
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  output: {
    filename: "bundle.js",//打包输出的js的文件
    path: path.resolve(__dirname, 'dist')//打包所在的文件夹
  }
}