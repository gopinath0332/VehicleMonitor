const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common,{
   devtool: 'inline-source-map',
   plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
       new ExtractTextPlugin("app.css", { allChunks: true })
   ]
})