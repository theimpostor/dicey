const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const path = require('path')
const distDir = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: distDir
  },
  devServer: {
    contentBase: distDir
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // hash: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      template: './src/index.html'
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: /https:.*min\.(css|js)/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'bootstrap-cdn-cache'
        }
      }]
    })
  ]
}
