const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'client/index.js'),
  mode: 'development',
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
