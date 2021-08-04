let serviceKey = "aqLTx6axfr2f/AZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY+ip5wD3wsx37zC2D6o5Q==";
let numOfRows="100";
let q1_year = "2018";
let q2_area = "인천";
let q3_peopleSize = "10인 ~ 19인";
let q4_industryCode= "28519";
let q5_energyClassificationCode="전력";
let q6_energyCode="전력";

//파싱 시작
$.ajax ({
    type: "GET",
    url: "http://apis.data.go.kr/B553530/GHG_EMISSIONS_02/GHG_EMISSIONS_02_LIST",
    data : "serviceKey="+serviceKey+"page=1&perPage="+ numOfRows  + "&q1=" + q1_year + "&q2=" + q2_area 
    + "&q3=" + q3_peopleSize + "&q4=" + q4_industryCode + "&q5=" +q5_energyClassificationCode
    + "&q6=" + q6_energyCode,
    dataType : "XML",
    success :function(response){
        // 통신 성공시 호출
        console.log(response);    
    },
    error: function (xhr, status, msg) { // 통신 실패시 호출해야하는 함수
        console.log('상태값 : ' + status + ' Http에러메시지 : ' + msg);
    },
});

