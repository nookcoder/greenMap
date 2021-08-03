 //export 변수
 let industry_NameList = new Array(100);
 let industry_CodeList = new Array (100);

//초기화
for (let listIndex =1; listIndex < 100 ; listIndex++) {
    industry_NameList[listIndex] = new Array();
    industry_CodeList[listIndex] = new Array();
}

//산업 분류 리스트 담기 
function pushIndustryList(data) {

    //데이터 담을때, 필요한 인덱스
    let currentlistIndex = 1;
    let startCodeNumber = "01";

    $(data).find("item").each(function(index, item){
        let codeNumber = $(item).find('col[name=산업분류코드]').text();
        
        if (codeNumber.startsWith(startCodeNumber)) {
            industry_NameList[currentlistIndex].push($(item).find('col[name=산업분류명칭]').text());
            industry_CodeList[currentlistIndex].push($(item).find('col[name=산업분류코드]').text()) 
        }
        else {

            startCodeNumber = parseInt(startCodeNumber);
            startCodeNumber++;
            if(startCodeNumber < 10) {
                startCodeNumber = "0" + startCodeNumber;
            }
            else {
                startCodeNumber += "";
            }
            currentlistIndex++;
        } 

    })   
    
}

//파싱 시작
$.ajax ({
    type: "GET",
    url: "https://api.odcloud.kr/api/15049591/v1/uddi:0ad240e1-1871-40e8-9ea9-aa54bbf6fca7",
    data : "page=1&perPage=1936&returnType=XML&serviceKey=aqLTx6axfr2f%2FAZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY%2Bip5wD3wsx37zC2D6o5Q%3D%3D",
    dataType : "XML",
    success :function(response){
        // 통신 성공시 호출
        pushIndustryList(response);    
    },
    error: function (xhr, status, msg) { // 통신 실패시 호출해야하는 함수
        console.log('상태값 : ' + status + ' Http에러메시지 : ' + msg);
    },
});
    
export {industry_NameList, industry_CodeList};
