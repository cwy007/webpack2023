const path = require('path');
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [new htmlPlugin({ title: path.basename(__dirname)})],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/dist/'
    }
  }
}