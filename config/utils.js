const path = require('path')
const glob = require("glob");
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcDir = path.join(__dirname, '../src');
let plugins = [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    moment: "moment"
  }), //提供全局变量，不需要每个js都引入
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks:2 //这个很重要啊，数字才是能提取公共模块（第三方库，自定义js，公用css）的重点啊
  })
];
const getEntry = (env) => {
  env = env || 'dev'
  let files = glob.sync(srcDir + '/js/**/*.js'),
      entry = {},
      entryFileName,
      outputHtmlName,
      minifyParms;
  if (env == 'prod') {
    minifyParms = {
      removeComments: true,//去除注释
      collapseWhitespace: true,//去除空格
      removeAttributeQuotes: true //移除属性的引号
    }
  } else {
    minifyParms = false;
  }
  for (let i = 0; i < files.length; i++) {
    let matchs = /js\/(\S*).js/.exec(files[i]);
    let filename = '';
    entryFileName = outputHtmlName = matchs[1]; //得到apps/question/index这样的文件名
    if (/^_\w*/.test(entryFileName) || /\/_\w*/.test(entryFileName)) {
      continue;
    }

    entry[entryFileName] = files[i]
    if (env == 'prod') {
      filename = 'html/' + outputHtmlName + '.html'
    } else {
      filename = outputHtmlName + '.html'
    }
    //生成html配置
    plugins.push(new HtmlWebpackPlugin({
      // 打包之后生成出来的html文件名
      filename: filename,
      // 每个html的模版
      template: './src/html/' + outputHtmlName + '.html',
      // 自动将引用插入body
      inject: true,
      // favicon: './src/assets/lib/img/favicon.png',
      title: outputHtmlName,
      // 每个html引用的js模块，也可以在这里加上vendor等公用模块
      // chunks: ['manifest',  'vendor', entryFileName],
      chunks: ['common', entryFileName],
      // chunksSortMode: 'dependency',//如果是单页面应用使用这个就行，上面chunks不需要设置
      minify: minifyParms
    }));
  }
  return entry;
}
const utils = {
  getEntry,
  plugins
}

module.exports = utils