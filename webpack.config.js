const path = require('path');
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
        filename:'[name]_bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new NodePolyfillPlugin()
    ],
    externals : { 
        "request" : "request",
        xmlhttprequest: 'XMLHttpRequest'
    },
    // resolve: {
    //     alias: {
    //       core: path.join(__dirname, 'request'),
    //     },
    //   },

    
}