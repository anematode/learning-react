const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-react' ]
        }
      },
      {
        test: /\.css$/i,
        use: [{ loader: 'style-loader' }, {
          loader: 'css-loader',
          options: {
            modules: {
              mode: "local",
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        }]

      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "public" }
      ]
    })
  ],
  mode: "development",
  devtool: 'eval-source-map'
}
