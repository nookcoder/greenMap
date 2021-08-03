
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










// 화살표 방향변경을 위한 함수 코드
let mainSector = document.querySelector('.main_sector'); 

let assginmentSubSector = document.querySelector('.assignment_sub_sector');
let targetSubSector = document.querySelector('.target_sub_sector');
let publicSubSector = document.querySelector('.public_sub_sector');

let assignmentButton = document.querySelector('#assignment_button');
let targetButton = document.querySelector('#target_button');
let publicButton = document.querySelector('#public_button');

let assignmentPeriodSector = document.querySelector('#assignment_period_sector');
let assginmentDesignatedYear = document.querySelector('#assignment_designating_year')
let assginmentDesignatedSector = document.querySelector('#assignment_designating_sector');

let assignmentPeroidButton = document.querySelector('#assignment_period');
let assignmentYearButton = document.querySelector('#assignment_year');
let assignmentSectorButton = document.querySelector('#assignment_sector');

let targetYearButton = document.querySelector('#target_period'); 
let targetAdministratorButton = document.querySelector('#target_administrator');

let targetYearSector = document.querySelector('#target_period_sector');
let targetAdministratorSector = document.querySelector('#target_administrator_sector');

let publicYearButton = document.querySelector('#public_year');
let publicAgencyButton = document.querySelector('#public_agency'); 

let publicYearSector=document.querySelector('#public_year_sector'); 
let publicAgencySector=document.querySelector('#public_agency_sector');


assignmentButton.addEventListener('click', function(){
    assginmentSubSector.classList.toggle('showing');
});

targetButton.addEventListener('click',function(){
    targetSubSector.classList.toggle('showing');
});

publicButton.addEventListener('click',function(){
    publicSubSector.classList.toggle('showing');
});

assignmentPeroidButton.addEventListener('click',function(){
    assignmentPeriodSector.classList.toggle('showing');
});

assignmentYearButton.addEventListener('click',function(){
    assginmentDesignatedYear.classList.toggle('showing');
});

assignmentSectorButton.addEventListener('click',function(){
    assginmentDesignatedSector.classList.toggle('showing');
});

targetYearButton.addEventListener('click',function(){
    targetYearSector.classList.toggle('showing');
});

targetAdministratorButton.addEventListener('click',function(){
    targetAdministratorSector.classList.toggle('showing');
});

publicYearButton.addEventListener('click',function(){
    publicYearSector.classList.toggle('showing');
});

publicAgencyButton.addEventListener('click',function(){
    publicAgencySector.classList.toggle('showing');
});

// 클릭시, 화살표 방향 변경
const CURRENT_ARROW_DOWN = "fa-chevron-down";
const CURRENT_ARROW_RIGHT ="fa-chevron-right";


function arrowClassChange(e){
    let clickI = e.currentTarget;

    if (clickI.classList.contains(CURRENT_ARROW_RIGHT) ) {
        clickI.classList.remove(CURRENT_ARROW_RIGHT);
        clickI.classList.add(CURRENT_ARROW_DOWN);
    }
    else {
        clickI.classList.remove(CURRENT_ARROW_DOWN);
        clickI.classList.add(CURRENT_ARROW_RIGHT);
    } 
}

let iAll = document.querySelectorAll("i");
for(let iIndex = 0; iIndex < iAll.length ; iIndex++){
    iAll[iIndex].addEventListener('click', arrowClassChange)
}


