var path = require('path');
var webpack = require('webpack');
var re = require('required-module');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports={
    mode : 'development',
    entry:{
         co2Api : "./src/js/co2Api.js",
        industryMainSide : "./src/js/industryMainSideMenu.js",
         industryClassification : "./src/js/industryClassification.js",
         treeJs: "./src/js/treeJS.js"
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