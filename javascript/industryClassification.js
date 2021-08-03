let industryA_Name = new Array();
let industryA_Code = new Array();

let industryB_Name = new Array();
let industryB_Code = new Array();

let industryC_Name = new Array();
let industryC_Code = new Array();

let industryD_Name = new Array();
let industryD_Code = new Array();

let industryE_Name = new Array();
let industryE_Code = new Array();

let industryF_Name = new Array();
let industryF_Code = new Array();

let industryG_Name = new Array();
let industryG_Code = new Array();

let industryH_Name = new Array();
let industryH_Code = new Array();

let industryI_Name = new Array();
let industryI_Code = new Array();

let industryJ_Name = new Array();
let industryJ_Code = new Array();

let industryK_Name = new Array();
let industryK_Code = new Array();

let industryL_Name = new Array();
let industryL_Code = new Array();

let industryM_Name = new Array();
let industryM_Code = new Array();

let industryN_Name = new Array();
let industryN_Code = new Array();

let industryO_Name = new Array();
let industryO_Code = new Array();

let industryP_Name = new Array();
let industryP_Code = new Array();

let industryQ_Name = new Array();
let industryQ_Code = new Array();

let industryR_Name = new Array();
let industryR_Code = new Array();

let industryS_Name = new Array();
let industryS_Code = new Array();

let industryT_Name = new Array();
let industryT_Code = new Array();

let industryU_Name = new Array();
let industryU_Code = new Array();


$(document).ready(function(){
    $.ajax ({
        type: "GET",
        url: "https://api.odcloud.kr/api/15049591/v1/uddi:0ad240e1-1871-40e8-9ea9-aa54bbf6fca7",
        data : "page=1&perPage=1936&returnType=XML&serviceKey=aqLTx6axfr2f%2FAZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY%2Bip5wD3wsx37zC2D6o5Q%3D%3D",
        dataType : "XML",
        success :function(response){
            console.log(response);

            xmlParsing(response); // 통신 성공시 호출
        },
        error: function (xhr, status, msg) { // 통신 실패시 호출해야하는 함수
            console.log('상태값 : ' + status + ' Http에러메시지 : ' + msg);
        },
    });

    // 번호별로 파싱시작
    function xmlParsing(data) {
        $(data).find("item").each(function(index, item){
            let codeNumber = $(item).find('col[name=산업분류코드]').text();
    

            if (codeNumber.startsWith("01"))  {
                
               // console.log($(item).find('col[name=산업분류명칭]').text());
            }   
            else if (codeNumber.startsWith("02")) {
                console.log($(item).find('col[name=산업분류명칭]').text());
            }  
            else if (codeNumber.startsWith("03")) {

            }  
            else if (codeNumber.startsWith("04")) {

            }  
            else if (codeNumber.startsWith("05")) {

            }  
            else if (codeNumber.startsWith("06")) {

            }  
            else if (codeNumber.startsWith("07")) {

            }  
            else if (codeNumber.startsWith("08")) {

            }  
            else if (codeNumber.startsWith("09")) {

            } 

           
        
        })
    }
})