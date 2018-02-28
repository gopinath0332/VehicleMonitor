const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  output: {
    filename: "[name].build.js",
    // path: path.resolve(__dirname, "../../webapp/resources/dist")
    path: path.resolve("C:\\Gopi\\tomcat9\\webapps\\ROOT\\resources\\dist")
  },
  // devtool: 'inline-source-map',
  plugins: [
    new ExtractTextPlugin("app.css", {allChunks: true})
  ]
});
