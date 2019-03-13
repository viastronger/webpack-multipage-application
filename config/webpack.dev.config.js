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
        test: /\.(css|less)$/,
        loader: 'style-loader!less-loader!px2rem-loader?remUnit=30!less-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit=4000&name=images/[name]-[hash:5].[ext]'
      }
    ]
  },
  devServer: {
    // 配置http服务的根目录，以dist为开启服务时的根目录
    // contentBase: path.join(__dirname, '../dist'),
    host: 'localhost',
    port: 8080,
    inline: true,
    hot: true,
    open: true,
    proxy: {
      '/': {
        target: 'https://www.apiopen.top/',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      rem: path.join(__dirname, '../src/common/js/rem.js'),
      common: path.join(__dirname, '../src/common/js/common.js'),
      post: path.join(__dirname, '../src/common/js/post.js'),
      "reset.css": path.join(__dirname, '../src/common/less/reset.css'),
    }
  },
  plugins: plugins.concat(utils.plugins),
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'source-map',
}
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
