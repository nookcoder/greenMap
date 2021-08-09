var path = require('path');
var webpack = require('webpack');
var re = require('required-module');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : "development",
     
    entry : {
        companyMapiApiapi : "./src/js/companyMapApi.js"
    },

    output : {
        filename: '[name].js',
        path : path.resolve(__dirname,'public'),
    },

    module: {
        
        rules: [
          { test: /\.xlsx$/, loader: "webpack-xlsx-loader" }
        ],
        noParse: [
			/xlsx.core.min.js/,
			/xlsx.full.min.js/
		],
        rules: [
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
          ],
      },
    
      plugins: [
        new NodePolyfillPlugin()
    ]
}