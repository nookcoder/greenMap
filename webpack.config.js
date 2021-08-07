const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    mode : 'development',
    entry:{
         co2Api : "./src/co2Api.js",
        industryMainSide : "./src/industryMainSideMenu.js",
         industryClassification : "./src/industryClassification.js",
    },
    output : {
        filename:'[name]_bundle.js',
        path: path.resolve(__dirname, 'public'),
    }

    
}