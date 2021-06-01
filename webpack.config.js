const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = () => {
  const MODE = process.env.NODE_ENV;
  const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

  return {
    entry: "./src/scripts/main",
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),
    },
    target: ['web', 'es5'],
    resolve: {
      extensions: ['.ts', '.js'],
    },
    mode: MODE,
    devtool: IS_DEVELOPMENT ? 'inline-source-map' : false,
    plugins: [
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: false,
        template: "./src/index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                experimentalWatchApi: true,
                configFile: path.resolve(process.cwd(), 'tsconfig.json')
              }
            }
          ],
        },
      ],
    },
  }
}