const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./public",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "algorithm visualization",
      template: "public/index.html",
      filename: "index.html",
    }),
  ],
};
