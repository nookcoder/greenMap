var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports ={
    mode : "none",
    entry : {
        assignCompany : "./src/js/assignmentCompany.js",
        kakaoMapApi : "./src/js/companyMapApi.js",
        sideMenu : "./src/js/companyMainSideMenu.js"
    },

    output:{
        filename:'[name].js',
        path : path.resolve(__dirname,'dist/js')
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProgressPlugin()
      ]
}