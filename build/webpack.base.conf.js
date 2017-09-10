var path = require('path')
var utils = require('./utils')
var config = require('../config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var vueLoaderConfig = require('./vue-loader.conf')
var glob = require('glob')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// function getEntries(globalPath){
//   var files = glob.sync(globalPath);
//   var entries ={};
//   files.forEach(filePath=>{
//     var split = filePath.split('/');
//     var nameWithExtend = split[split.length-1];
//     var name = nameWithExtend.split('.')[0];
//     entries[name] = filePath;
//   });
//   return entries;
// }

// var entries = getEntries('./src/mains/*.js');
// var htmlPlugins = Object.keys(entries).map(name=>{
//   // generate dist index.html with correct asset hash for caching.
//   // you can customize output by editing /index.html
//   // see https://github.com/ampedandwired/html-webpack-plugin
//   return new HtmlWebpackPlugin({
//       filename: name +'.html',
//       template: name +'.html',
//       inject: true,
//       // minify: {
//       //   removeComments: true,
//       //   collapseWhitespace: true,
//       //   removeAttributeQuotes: true
//         // more options:
//         // https://github.com/kangax/html-minifier#options-quick-reference
//       // },
//       // necessary to consistently work with multiple chunks via CommonsChunkPlugin
//       // chunksSortMode: 'dependency'
//     });
// })

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    chunkFilename: "[name].chunk.js",
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'vx':resolve('src/vuex'),
      'vr':resolve('src/router'),
      '#':resolve('src/components'),
      '#mod':resolve('src/components/modules'),
      '#com':resolve('src/components/common')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // plugins: htmlPlugins
}
