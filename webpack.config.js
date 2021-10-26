const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map',
  devServer: {
    port: 5500,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|png|jpg|jpeg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
