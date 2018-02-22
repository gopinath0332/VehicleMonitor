const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common,{
   plugins:[new ExtractTextPlugin("app.css", { allChunks: true }),new UglifyJSPlugin()]
});