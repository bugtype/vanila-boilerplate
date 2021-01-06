const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// dev server 실행용
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
};
