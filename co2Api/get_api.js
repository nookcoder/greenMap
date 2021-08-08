
let classification = require('../');
let pageNo=1;
let numOfRows= 10;


let q4_code = classification.industry_CodeList ;

let total_co2_code = new Array(100);

// //초기화
total_co2_code = classification.industry_NameList;


let co2_button = document.getElementById('co2Api');
co2_button.addEventListener('click', function(){
    get_all_data();
})

function get_all_data(){
    for(let code_index = 1 ; code_index < q4_code.length ; code_index++){
        for(let code_detail_index = 0 ; code_detail_index < q4_code[code_index].length ; code_detail_index++){
           
            let codeNumber = q4_code[code_index][code_detail_index];
            
            if(codeNumber.length == 5){
               get_total_co2(codeNumber);
            }
        }

    }
}

//co2총량 알아냅시다~
function get_total_co2(codeNumber){
         //쿼리문 받아오기
        var queryParams = get_queryParams(codeNumber);
        get_total_co2_xml(queryParams, codeNumber);
     
}

function get_queryParams( codeNumber){

    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=TQ215WT1Kv8DR2W%2B5ae03m5dr5KXUHEfAbT6C1s0yplc5TkwMFDKmG34F4eEA1EWsIQPHkPihnGIFgQnjdkbwQ%3D%3D'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent(numOfRows); /* */
    queryParams += '&' + encodeURIComponent('apiType') + '=' + encodeURIComponent('xml'); /* */
    queryParams += '&' + encodeURIComponent('q1') + '=' + encodeURIComponent('2019'); /* */
    queryParams += '&' + encodeURIComponent('q4') + '=' + encodeURIComponent(codeNumber); /* */
     
    return queryParams;
}

function get_total_co2_xml(queryParams, codeNumber){
    var url = 'http://apis.data.go.kr/B553530/GHG_EMISSIONS_02/GHG_EMISSIONS_02_LIST';
    var XMLHttpRequest = require("xmlhttprequest");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url+ queryParams);
 
    xhr.onload = function() {//Call a function when the state changes.
        if(xhr.status == 200) {
            
            // console.log(this.responseText);
            xmlDoc = xhr.responseXML;
            console.log(xmlDoc);
    
            //바디 태그 전체 가져오기
            let xml = xmlDoc.getElementsByTagName('body');
            // console.log(xml);
        //     let xml_total_co2 = xml[0].getElementsByTagName('total_co2')[0].childNodes[0].nodeValue;
          
        //     // total_co2 가져오기
        //     let xml_larget_codeNumber = parseInt(codeNumber.substr(0,2));
        //     let xml_small_codeNumber = parseInt(codeNumber.substr(0,3));
    
        //     let insert_total_co2 = total_co2_code[xml_larget_codeNumber].indexof(xml_small_codeNumber);
    
        //     total_co2_code[xml_larget_codeNumber][insert_total_co2] = xml_total_co2;
    
        //     console.log(xml_total_co2);
        // 
    }
    }
    xhr.send('');
}

    // //파싱시작
    // var request = require('request');
    // (async() =>{ 
        
    //     request({
    //     url: url + queryParams,
    //     method: 'GET'
    // }, function (error, response, body) { 
    //     //콘솔에 찍기 
    //     console.log('Reponse received', body);

    //     //xml 파싱
    //     var DOMParser   = require('xmldom').DOMParser;
    //     parser = new DOMParser();
    //     xmlDoc = parser.parseFromString(body, 'text/xml');

    //     //바디 태그 전체 가져오기
    //     let xml = xmlDoc.getElementsByTagName('body');
    //     let xml_total_co2 = xml[0].getElementsByTagName('total_co2')[0].childNodes[0].nodeValue;
    //     // total_co2 가져오기
    //     let xml_larget_codeNumber = parseInt(codeNumber.substr(0,2));
    //     let xml_small_codeNumber = parseInt(codeNumber.substr(0,3));

    //     let insert_total_co2 = total_co2_code[xml_larget_codeNumber].indexof(xml_small_codeNumber);

    //     total_co2_code[xml_larget_codeNumber][insert_total_co2] = xml_total_co2;

    // });})()


// var XMLHttpRequest = require("xmlhttprequest");
// var xhr = new XMLHttpRequest();

// var url = 'http://apis.data.go.kr/B553530/GHG_EMISSIONS_02/GHG_EMISSIONS_02_LIST'; /*URL*/
// var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'aqLTx6axfr2f%2FAZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY%2Bip5wD3wsx37zC2D6o5Q%3D%3D'; /*Service Key*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
// queryParams += '&' + encodeURIComponent('apiType') + '=' + encodeURIComponent('xml'); /**/
// queryParams += '&' + encodeURIComponent('q1') + '=' + encodeURIComponent('2018'); /**/

// queryParams += '&' + encodeURIComponent('q3') + '=' + encodeURIComponent('10인 ~ 19인'); /**/
// queryParams += '&' + encodeURIComponent('q4') + '=' + encodeURIComponent('28519'); /**/
// xhr.open('GET', url + queryParams);

// xhr.onload = function() {//Call a function when the state changes.
//     if(xhr.status == 200) {
        
//         console.log(this.responseText);
//         xmlDoc = xhr.responseXML;
//         console.log(xmlDoc);

//         //바디 태그 전체 가져오기
//         let xml = xmlDoc.getElementsByTagName('body');
//         let xml_total_co2 = xml[0].getElementsByTagName('total_co2')[0].childNodes[0].nodeValue;
//         // total_co2 가져오기
//         // let xml_larget_codeNumber = parseInt(codeNumber.substr(0,2));
//         // let xml_small_codeNumber = parseInt(codeNumber.substr(0,3));

//         // let insert_total_co2 = total_co2_code[xml_larget_codeNumber].indexof(xml_small_codeNumber);

//         // total_co2_code[xml_larget_codeNumber][insert_total_co2] = xml_total_co2;

//         console.log(xml_total_co2);
//     }
// }

// xhr.send('');


// var XMLHttpRequest = require("xmlhttprequest");
// var xhr = new XMLHttpRequest();

// var url = 'http://apis.data.go.kr/B553530/GHG_EMISSIONS_02/GHG_EMISSIONS_02_LIST'; /*URL*/
// var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'aqLTx6axfr2f%2FAZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY%2Bip5wD3wsx37zC2D6o5Q%3D%3D'; /*Service Key*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
// queryParams += '&' + encodeURIComponent('apiType') + '=' + encodeURIComponent('xml'); /**/
// queryParams += '&' + encodeURIComponent('q1') + '=' + encodeURIComponent('2018'); /**/

// queryParams += '&' + encodeURIComponent('q3') + '=' + encodeURIComponent('10인 ~ 19인'); /**/
// queryParams += '&' + encodeURIComponent('q4') + '=' + encodeURIComponent('28518'); /**/
// xhr.open('GET', url + queryParams);

// xhr.onload = function() {//Call a function when the state changes.
//     if(xhr.status == 200) {
//         console.log(this.responseText);
//     }
// }

// xhr.send('');
