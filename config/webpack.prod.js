const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('config production');
// TODO: optimization, minify 등 설정 해야함.
module.exports = {
  entry: './src/index.ts',
  plugins: [new MiniCssExtractPlugin()],
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
    filename: 'bundle.js',
  },
};
