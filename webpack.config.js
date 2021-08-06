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
    }
    
}