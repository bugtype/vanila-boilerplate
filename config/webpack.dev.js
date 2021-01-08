const path = require('path');

console.log('config development');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  mode: 'development', // webpack 내장 설정
  devtool: 'inline-source-map',
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
  optimization: {
    minimize: false,
  },
};
