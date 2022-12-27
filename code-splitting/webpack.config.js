const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// entry-points 방식
// module.exports = {
//   mode: "development",
//   entry: {
//     index: "./src/index.js",
//     another: "./src/another.js",
//   },
//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
// };

// Prevent Duplication 방식
// module.exports = {
//   mode: "development",
//   entry: {
//     index: {
//       import: "./src/index.js",
//       dependOn: "shared",
//     },
//     another: {
//       import: "./src/another.js",
//       dependOn: "shared",
//     },
//     shared: "lodash",
//   },
//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "src/template.html",
//     }),
//   ],

//   optimization: {
//     splitChunks: {
//       chunks: "all",
//     },
//   },
// };

// dynamic import 방식
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html",
    }),
  ],
};
