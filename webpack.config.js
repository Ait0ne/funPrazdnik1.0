const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    
    output: {
      publicPath: '/',
      filename: "[name].js",
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: "source-map",
    devServer: {
      inline: true,
      port: 3000,
      historyApiFallback: true
    },
    module: {
      rules: [
        { test: /\.css$/, use: [ "style-loader", "css-loader"] },
        { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader"] },
        { test: /\.tsx?$/, loader: "babel-loader", exclude: [/node_modules/, /\.test.tsx?$/ ] },
        { test: /\.tsx?$/, loader: "ts-loader", exclude: [/node_modules/, /\.test.tsx?$/ ] },
        { test: /\.svg$/, use: ['@svgr/webpack'] },
        { test: /\.(png|jpg|gif|jpeg)$/, use: ['file-loader']},
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
      }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, 'public', 'index.html')
      })
    ]
  };