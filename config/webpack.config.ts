// @ts-nocheck
const path = require('path');

module.exports = {
  entry: './src/',

  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, '../dist/'),
  },
  resolve: {
    alias: {
      '.root.': path.resolve(__dirname, '../src/')
    },
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
    ]
  }
};
