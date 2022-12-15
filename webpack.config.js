const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".vue", ".js"],
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `
              @use "sass:color";
              @use "sass:list";
              @use "sass:map";
              @use "sass:math";
              @use "sass:meta";
              @use "sass:selector";
              @use "sass:string";
              @import "~/scss/_variables";
              `,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin({
      template: "src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
  devServer: {
    port: 8079,
    historyApiFallback: true,
  },
};
