const utils = require('./utils')
const path = require('path')
const webpack = require('webpack')
const distDir = path.join(__dirname, '../dist');
const portfinder = require('portfinder')
const plugins = [
  new webpack.HotModuleReplacementPlugin()
];
const devWebpackConfig = {
  entry: utils.getEntry(),
  output: {
    path: distDir,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        //include表示直接去哪些文件夹下面找,可以加快速度
        include: [path.join(__dirname, '../src/js',)]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=4000&name=images/[name]-[hash:5].[ext]'
      }
    ]
  },
  devServer: {
    // 配置http服务的根目录，以src为开启服务时的根目录
    contentBase: path.join(__dirname, '../src'),
    host: 'localhost',
    port: 8080,
    inline: true,
    hot: true,
    open: true,
    proxy: {
      '/': {
        target: 'https://b-backapi.t.bianlidai.top/v1',//多个空格也不行，真是严格，2333
        changeOrigin: true,
      }
    }
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      rem: path.join(__dirname, '../src/common/js/rem.js'),
      "reset.css": path.join(__dirname, '../src/common/css/reset.css'),
    }
  },
  plugins: plugins.concat(utils.plugins),
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'source-map',
}
module.exports = devWebpackConfig
//检测默认端口是否被占用，使用portfinder插件自动更换端口
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = 8080
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      devWebpackConfig.devServer.port = port
      resolve(devWebpackConfig)
    }
  })
})
