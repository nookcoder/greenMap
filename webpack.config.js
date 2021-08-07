const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
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
    },
    plugins: [
        new NodePolyfillPlugin()
    ],
    externals : { 
        "request" : "request"
    },
    // resolve: {
    //     alias: {
    //       core: path.join(__dirname, 'request'),
    //     },
    //   },

    
}