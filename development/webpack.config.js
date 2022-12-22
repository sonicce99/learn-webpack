const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.ejs",
      templateParameters: {
        title: "Development",
      },
    }),
  ],

  devServer: {
    static: "./dist",
  },

  optimization: {
    runtimeChunk: "single",
  },
};
