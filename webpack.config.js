var path = require('path');
var webpack = require('webpack');
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
		]
      }
}