const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

const env =
  process.env && process.env.NODE_ENV.trim() == "production"
    ? "production"
    : "development";

module.exports = {
  mode: env,
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    }),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new BrotliPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};