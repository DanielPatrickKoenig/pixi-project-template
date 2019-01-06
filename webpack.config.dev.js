import path from 'path'
import HtmlwebpackPlugin from 'html-webpack-plugin';
export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname,'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  }
}
