const path = require('path');
const HTMLplugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    compress: true,
    port: 3000,
  },

  devtool: 'source-map',

  entry: path.join(__dirname, 'src', 'index.jsx'),

  plugins: [
    new HTMLplugin({
      template: path.join(__dirname, 'src', 'public', 'index.html'),
      favicon: path.join(__dirname, 'src', 'public', 'favicon.ico'),
    }),
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: { '@src': path.join(__dirname, './src') },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
};
