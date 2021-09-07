const path = require("path")

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
      }
    ]
  },
  mode: "development"
}
