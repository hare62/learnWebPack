const path = require('path');
module.exports = {
  entry:'./src/index.js',//入口文件
  // 配置文件的模块
  module:{
    rules:[{
      test:/\.jpg$/,
      use:{
        loader:'file-loader'
      }
    }]
  },
  output: {
    filename:"bundle.js",//打包输出的js的文件
    path:path.resolve(__dirname, 'dist')//打包所在的文件夹
  }
}