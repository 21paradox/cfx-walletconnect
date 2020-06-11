const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "./index.js"),
  },
  output: {
    library: 'WalletConnectCfxClient',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  externals: [
    /@walletconnect\/.+/
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
};