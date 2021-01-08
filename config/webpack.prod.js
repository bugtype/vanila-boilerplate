const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

console.log('config production');
// TODO: optimization, minify 등 설정 해야함.
module.exports = {
  entry: {
    index: {
      import: './src/index.ts',
      // dependOn: 'shared',
    },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared',
    // },
    // shared: 'lodash',
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    // new htmlWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      inject: true,
      filename: path.join(__dirname, '../public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  mode: 'production',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    compress: true,
    port: 9000,
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].[chunkhash].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
};
