const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const env =
  process.env && process.env.NODE_ENV.trim() == "production"
    ? "production"
    : "development";

module.exports = {
  mode: env,
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: [webpackNodeExternals()]
};