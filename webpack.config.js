const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@/api-types': path.resolve(__dirname, './src/api-types/'),
      '@/components': path.resolve(__dirname, './src/components/'),
      '@/constants': path.resolve(__dirname, './src/constants/'),
      '@/data': path.resolve(__dirname, './src/data/'),
      '@/hooks': path.resolve(__dirname, './src/hooks/'),
      '@/modules': path.resolve(__dirname, './src/modules/'),
      '@/queries': path.resolve(__dirname, './src/queries/'),
      '@/types': path.resolve(__dirname, './src/types/'),
      '@/utils': path.resolve(__dirname, './src/utils/'),
    },
  },
  mode: 'development',
  devServer: {
    static: {
      directory: './dist',
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
};

module.exports = config;
