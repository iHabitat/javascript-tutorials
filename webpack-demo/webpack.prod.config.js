var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config');

// clear the base configurations list.
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
  output: {
    publicPath: '/dist/',
    filename: '[name].[hash].js'
  },
  plugins: [
    // 提取CSS，并重命名为带有20位hash值的唯一文件
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    }),
    new VueLoaderPlugin(),
    // 定义当前node环境为生成环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // 提取模板，并保存入口html文件
    new HtmlWebpackPlugin({
      filename: '../index_prod.html',
      template: './index.ejs',
      inject: false
    })
  ]
});
