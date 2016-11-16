const webpack = require('webpack')
const path = require('path')

const projectRoot = path.resolve(__dirname)

// webpack plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let webpackPlugins = [
  new ExtractTextPlugin('app.bundle.css')
]

module.exports = {
  entry: path.resolve(__dirname, 'src/client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      // SASS
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?includePaths[]=' + path.resolve(__dirname, 'src') + '&includePaths[]=' + path.resolve(__dirname, 'node_modules'))
      },
      // VUE COMPONENTS
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      // JS CLIENT
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: projectRoot,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      },
      // INDEX.html
      // FILES
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg|woff)(\?[\s\S]+)?$/,
        loader: 'file'
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file'
      },
      {
        test: /\.(json)$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.scss', '.vue'],
    modulesDirectories: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  plugins: webpackPlugins
}
