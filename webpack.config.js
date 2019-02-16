const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'), filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: {loader: 'babel-loader'}, exclude: /node_modules/}
    ]
  },
  plugins: [new htmlWebpackPlugin({template: './src/index.html'})]
}
