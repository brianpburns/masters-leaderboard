var config = {
  context: __dirname + '/src/client', // `__dirname` is root of project and `/src` is source
  entry: {
    app: './index.tsx',
  },
  output: {
    publicPath: '',
    path: __dirname + '/dist', // `/dist` is the destination
    filename: 'bundle.js', // bundle created by webpack it will contain all our app logic. we will link to this .js file from our html page.
  },
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
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = config;
