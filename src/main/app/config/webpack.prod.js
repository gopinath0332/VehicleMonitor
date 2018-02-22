const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = merge(common,{
   output: {
      filename: "[name].build.js",
      path: path.resolve(__dirname, "../../webapp/resources/dist")
   },
   plugins:[new ExtractTextPlugin("app.css", { allChunks: true }),new UglifyJSPlugin()]
});