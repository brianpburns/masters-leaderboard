import { Configuration } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/, // rule for .js files
        exclude: /node_modules/,
        loader: 'babel-loader', // apply this loader for js files
      },
      {
        test: /\.css$/,
        use: [
          'css-loader', // this will load first !
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: { configFile: 'tsconfig.dev.server.json' },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;
