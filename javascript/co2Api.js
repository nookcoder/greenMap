let serviceKey = "aqLTx6axfr2f%2FAZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY%2Bip5wD3wsx37zC2D6o5Q%3D%3D";
let numOfRows="10";
let q1_year = "2018";
let q2_area = "인천";
let q3_peopleSize = "10인 ~ 19인";
let q4_industryCode= "28519";
let q5_energyClassificationCode="전력";
let q6_energyCode="전력";

// import { createRequire } from '..node_modules/module';
// const require = createRequire(import.meta.url);

import express from '../node_modules/express/index.js';
import cors from '../node_modules/cors/package.json';

// const express = require('express');
// const cors = require('cors');
const app = express()

app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})


jQuery.ajax ({
    type: "GET",
    url: "http://apis.data.go.kr/B553530/GHG_EMISSIONS_02/GHG_EMISSIONS_02_LIST",
    
    
    data : "serviceKey="+serviceKey+"&pageNo=1&numOfRows="+ numOfRows  + "&apiType=xml&q1=" + q1_year + "&q2=" + q2_area 
    + "&q3=" + q3_peopleSize + "&q4=" + q4_industryCode + "&q5=" +q5_energyClassificationCode
    + "&q6=" + q6_energyCode,
    success :function(response){
       
        console.log(response);    
    },
    error: function (xhr, status, msg) { 
        console.log('상태값 : ' + status + ' Http에러메시지 : ' + msg);
    },
});

