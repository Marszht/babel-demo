const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
console.log(path.resolve(__dirname, "dist"));
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "a.js",
    path: path.resolve(__dirname, "../dist"), // 这个地址相对 当前文件目录
  },
  devtool: "cheap-module-source-map", // 默认 eval  看不了源代码
  // devtool: "eval-cheap-module-source-map", // 默认 eval  看不了源代码
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
