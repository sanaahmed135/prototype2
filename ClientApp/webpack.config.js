
var path = require("path");

var config = {

    entry: { 'main': './src/app/App.tsx' },
    resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },


  output: {
    path: path.resolve(__dirname, "wwwroot"),
    filename: "bundle.js"
  },

  module: {


    rules: [

      {

        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]

  }

};



module.exports = config;
// const path = require('path'),

// webpack = require('webpack'),

// HtmlWebpackPlugin = require('html-webpack-plugin');



// module.exports = {

// entry: {

//     app: ['./src/app/App.tsx', 'webpack-hot-middleware/client'],

//     vendor: ['react', 'react-dom']

// },

// output: {

//     path: path.resolve(__dirname, 'dist'),

//     filename: 'js/[name].bundle.js'

// },

// devtool: 'source-map',

// resolve: {

//     extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']

// },

// module: {

//     rules: [

//         {

//             test: /\.(ts|tsx)$/,

//             loader: 'ts-loader'

//         },

//         { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }

//     ]

// },

// plugins: [

//     new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),

//     new webpack.HotModuleReplacementPlugin()

// ]

// }