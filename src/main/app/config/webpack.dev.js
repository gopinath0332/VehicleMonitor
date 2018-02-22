const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = merge(common,{
    output: {
        filename: "[name].build.js",
         path: path.resolve("C:\\xampp\\tomcat\\webapps\\app\\resources\\dist")
        //  path: path.resolve(__dirname, "../../webapp/resources/dist")
     },
   devtool: 'inline-source-map',
   plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
       new ExtractTextPlugin("app.css", { allChunks: true })
   ]
})