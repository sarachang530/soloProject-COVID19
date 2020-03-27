const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
  },
  { 
      test: /\.s[ac]ss$/i,
      use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ] 
    }]
  },
  devServer: {
    publicPath : '/build/',
    contentBase: path.join(__dirname, 'client'),
    port: 8080,
    proxy: {
        '/api' : {
          target: "http://localhost:3000",
          pathRewrite: {'^/api' : ''}
      }
    }
  }
}
