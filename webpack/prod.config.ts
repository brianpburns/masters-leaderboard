import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { DefinePlugin } from 'webpack';
import { merge } from 'webpack-merge';
import base from './base.config';
import path from 'path';

const config = () =>
  merge(base, {
    mode: 'production',
    devtool: 'source-map',
    entry: { app: path.resolve(__dirname, '../src/client/index.tsx') },
    output: {
      publicPath: '',
      path: __dirname + '../dist', // `/dist` is the destination
      filename: 'bundle.js', // bundle created by webpack it will contain all our app logic. we will link to this .js file from our html page.
    },
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.STANDALONE': JSON.stringify('false'),
      }),
    ],
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['.tsx', '.ts', '.js'],
    },
  });

export default config;
