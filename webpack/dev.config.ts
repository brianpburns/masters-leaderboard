import { Configuration, DefinePlugin } from 'webpack';
import 'webpack-dev-server';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
import { merge } from 'webpack-merge';
import base from './base.config';

const DEV_PORT = 8082;
const DEV_HOST = process.env.DEV_HOST || 'localhost';
const DEV_PROTOCOL = 'http';

const publicPath = `${DEV_PROTOCOL}://${DEV_HOST}:${DEV_PORT}/`;

const config = (env: Record<string, string>) =>
  merge(base, {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
      index: [
        'react-hot-loader/patch',
        path.resolve(__dirname, '../src/client/index.tsx'),
      ],
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath,
    },
    devServer: {
      hot: true,
      port: DEV_PORT,
      // public: publicPath,
      // contentBase: path.join(__dirname, './dist'),
      headers: { 'Access-Control-Allow-Origin': '*' },
      // disableHostCheck: true,
      // stats: 'minimal',
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          secure: false,
        },
      },
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    optimization: {
      moduleIds: 'named',
    },
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.STANDALONE': JSON.stringify(env.standalone || 'false'),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../public/index.html'),
            to: path.resolve(__dirname, '../dist/index.html'),
          },
          {
            from: path.resolve(__dirname, '../public/mockServiceWorker.js'),
            to: path.resolve(__dirname, '../dist/mockServiceWorker.js'),
          },
        ],
      }),
    ],
  });

export default config;
