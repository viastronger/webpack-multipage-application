const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const distDir = path.join(__dirname, '../dist');
const env = 'prod';

const plugins = [
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../'),   //根目录
    verbose: true,        　　　　　　　　　　//开启在控制台输出信息
  }),
  new webpack.DefinePlugin({
    'process.env': '"production"'
  }),
  new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        warnings: false,
        drop_console: true // 去除console.log日志
      }
    },
    sourceMap: true,
    parallel: true
  }),
  new ExtractTextPlugin({
    filename: 'css/[name].[contenthash:8].css',
    allChunks: true,
  }),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  //从node_modules提取第三方库
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks(module) {
      return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
              path.join(__dirname, '../node_modules')
          ) === 0
      )
    }
  }),
  //从入口文件里提取自定义公共js
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity, // 可以填数字， 最小值为2，模块被多少个chunk公共引用才被抽取出来成为commons chunk
    //  Infinity：只有当入口文件（entry chunks） >= 3 才生效，用来在第三方库中分离自定义的公共模块
  })
]
module.exports = {
  entry: utils.getEntry(env),
  output: {
    path: distDir,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
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
        // loader: 'style-loader!css-loader'
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "../"
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=4096&name=images/[name]-[hash:5].[ext]'
        /*limit：
           表示的是一个阀值,如果当前我们资源中的图片大于4kb就从.js中剥离出来，如果小于4kb打包进.js中
           name:打包出来的图片，放在那个文件夹下，用什么文件名称命名
           [name]代表你原始的文件名称
           [hash:5] 让浏览器支持图片的缓存
           [ext] 图片本身的拓展名
        */
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      rem: path.join(__dirname, '../src/common/js/rem.js'),
      "reset.css": path.join(__dirname, '../src/common/css/reset.css'),
    }
  },
  plugins: plugins.concat(utils.plugins)
}