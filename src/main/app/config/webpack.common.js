const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: {
    login: "./src/components/login/Login.js",
    app: "./src/index.js"
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader', 'css-loader'
      ]
    }, {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0', "es2017"],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', "transform-object-rest-spread"],
      }
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader?localIdentName=[name]__[local]___[hash:base64:5]',
        })
      }
    ]
  }
};
