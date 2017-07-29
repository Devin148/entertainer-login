const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  name: 'js',
  context: __dirname,
  entry: './static/js/app.js',
  output: {
    filename: 'app.js',
    path: __dirname + '/dist/js'
  },
  resolve: {
    extensions: ['.js', '.handlebars']
  },
  module: {
    loaders: [
    {
      test: /\.handlebars$/,
      exclude: /node_modules/,
      loader: 'handlebars-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
    ]
  },
  externals: {
    jquery: '$',
    lodash: '_',
    backbone: 'Backbone'
  },
  plugins: [
  new CopyWebpackPlugin([
    { from: 'node_modules/jquery/dist/jquery.min.js', to: 'lib' },
    { from: 'node_modules/jquery-serializeobject/jquery.serializeObject.js', to: 'lib' },
    { from: 'node_modules/lodash/lodash.min.js', to: 'lib' },
    { from: 'node_modules/handlebars/dist/handlebars.min.js', to: 'lib' },
    { from: 'node_modules/backbone/backbone-min.js', to: 'lib' },
    { from: 'node_modules/backbone.radio/build/backbone.radio.min.js', to: 'lib' },
    { from: 'node_modules/backbone.marionette/lib/backbone.marionette.min.js', to: 'lib' }
    ])
  ],
}, {
  name: 'assets',
  context: __dirname,
  entry: './static/less/app.less' ,
  output: {
    filename: './dist/css/app.css',
    path: __dirname
  },
  resolve: {
    extensions: ['.less']
  },
  module: {
    loaders: [
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('css-loader!less-loader')
    }
    ]
  },
  plugins: [
  new ExtractTextPlugin('./dist/css/app.css'),
  new CopyWebpackPlugin([
    { from: './static/images', to: './dist/images' },
    ])
  ]
}];
