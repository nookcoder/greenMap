let serviceKey = "aqLTx6axfr2f%2FAZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY%2Bip5wD3wsx37zC2D6o5Q%3D%3D";
let numOfRows="10";
let q1_year = "2018";
let q2_area = "인천";
let q3_peopleSize = "10인 ~ 19인";
let q4_industryCode= "28519";
let q5_energyClassificationCode="전력";
let q6_energyCode="전력";


var request = require('request');

var url = 'http://apis.data.go.kr/B553530/GHG_EMISSIONS_02/GHG_EMISSIONS_02_LIST';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=aqLTx6axfr2f%2FAZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY%2Bip5wD3wsx37zC2D6o5Q%3D%3D";' /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('apiType') + '=' + encodeURIComponent('xml'); /* */
queryParams += '&' + encodeURIComponent('q1') + '=' + encodeURIComponent('2018'); /* */
queryParams += '&' + encodeURIComponent('q2') + '=' + encodeURIComponent('인천'); /* */
queryParams += '&' + encodeURIComponent('q3') + '=' + encodeURIComponent('10인 ~ 19인'); /* */
queryParams += '&' + encodeURIComponent('q4') + '=' + encodeURIComponent('28519'); /* */
queryParams += '&' + encodeURIComponent('q5') + '=' + encodeURIComponent('전력'); /* */
queryParams += '&' + encodeURIComponent('q6') + '=' + encodeURIComponent('전력'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});

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