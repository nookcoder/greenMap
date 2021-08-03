import * as classification from './industryClassification.js';

// 클릭시, 화살표 방향 변경
const CURRENT_ARROW_DOWN = "fas fa-chevron-down";
const CURRENT_ARROW_RIGHT ="fas fa-chevron-right";

function arrowClassChange(e){
    let clickI = e.currentTarget.getElementsByTagName('i');
    
    if (clickI[0].className == CURRENT_ARROW_RIGHT ) {
        clickI[0].className = CURRENT_ARROW_DOWN;
    }
    else {
        clickI[0].className = CURRENT_ARROW_RIGHT;
    } 
}

// 클릭시, 세부카테고리 보여주기
function showDetailIndustry(e){
    let subMenuInnerHtml = "<li>" ;
    
    let click_Ul_id = e.currentTarget.id + "_sector";
    let click_Ul = document.getElementById(click_Ul_id);

    console.log(click_Ul);
    
}

let divAll = document.querySelectorAll(".industry_large_title");

for(let divIndex = 0; divIndex < divAll.length ; divIndex++){
    // 화살표 방향 바꾸기 클릭 이벤트 추가
    divAll[divIndex].addEventListener('click', arrowClassChange);
    // 상세 분류 코드 클릭 추가
    divAll[divIndex].addEventListener('click', showDetailIndustry);
}

console.log(classification.industry_NameList[1].length);
//여기도 0.....ㅠㅠㅠㅠ살려죠ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ쓰고싶어,,,,