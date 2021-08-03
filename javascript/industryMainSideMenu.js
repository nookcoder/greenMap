
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

// 클릭시, 화살표 방향 변경
const CURRENT_ARROW_DOWN = "fas fa-chevron-down";
const CURRENT_ARROW_RIGHT ="fas fa-chevron-right";


function arrowClassChange(e){
    let clickI = e.currentTarget.getElementsByTagName('i');
    console.log(e.currentTarget.getElementsByTagName('i'));
    console.log(clickI[0].className);

    if (clickI[0].className == CURRENT_ARROW_RIGHT ) {
        clickI[0].className = CURRENT_ARROW_DOWN;
    }
    else {
        clickI[0].className = CURRENT_ARROW_RIGHT;
    } 
}

let divAll = document.querySelectorAll(".industry_large_title");
for(let divIndex = 0; divIndex < divAll.length ; divIndex++){
    divAll[divIndex].addEventListener('click', arrowClassChange)
}


