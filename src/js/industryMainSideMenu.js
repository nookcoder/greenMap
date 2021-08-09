
let industry_In_Code = new Array("not","A","B", "C", "D","E","F", "G", "H", "I", "J", "K", "L"
,"M", "N", "O", "P", "Q", "R", "S", "T", "U");

//산업 분류 코드 초기화
for(let index = 0 ; index < industry_In_Code.length ; index++){
    industry_In_Code[index] = new Array();
}

//산업 분류 코드 번호 나누 기
function insertInCodeNumber (choice_number, start_number, end_number) {
    for(let index = start_number ; index <= end_number; index++){
        industry_In_Code[choice_number].push(index);
    }
}

//산업 분류 코드 번호 배열에 차례대로 삽입
insertInCodeNumber(1, 1, 3);
insertInCodeNumber(2, 5, 8);
insertInCodeNumber(3, 10, 34);
insertInCodeNumber(4, 35, 35);
insertInCodeNumber(5, 36, 39);
insertInCodeNumber(6, 41, 42);
insertInCodeNumber(7, 45, 47);
insertInCodeNumber(8, 49, 52);
insertInCodeNumber(9, 55, 56);
insertInCodeNumber(10, 58, 63);
insertInCodeNumber(11, 64, 66);
insertInCodeNumber(12, 68, 68);
insertInCodeNumber(13, 70, 73);
insertInCodeNumber(14, 74, 76);
insertInCodeNumber(15, 84, 84);
insertInCodeNumber(16, 85, 85);
insertInCodeNumber(17, 86, 87);
insertInCodeNumber(18, 90, 91);
insertInCodeNumber(19, 94, 96);
insertInCodeNumber(20, 99, 99);


// //분류 코드 리스트
// classification.industry_CodeList;

// //분류 이름 리스트
// classification.industry_NameList;



$('.detail_industry_div').hide();
$('.three_industry_sector').hide();

// 클릭시, 세부카테고리 보여주기
function show_Detail_Industry(e){
    let ul_nodes = e.currentTarget.parentNode.childNodes[3];
    $(ul_nodes).find('div').show();
    
}
// 대분류 카테고리 닫기
function hide_Detail_Industry(e){
    let ul_nodes = e.currentTarget.parentNode.childNodes[3];
    $(ul_nodes).find('div').hide();
    
}


// 클릭시, 화살표 방향 변경


function arrowClassChange(e){
    const CURRENT_ARROW_DOWN = "fas fa-chevron-down";
    const CURRENT_ARROW_RIGHT ="fas fa-chevron-right";
   
    let clickI = e.currentTarget.getElementsByTagName('i');
    
    if (clickI[0].className == CURRENT_ARROW_RIGHT ) {
        clickI[0].className = CURRENT_ARROW_DOWN;
        show_Detail_Industry(e);
    }
    else {
        clickI[0].className = CURRENT_ARROW_RIGHT;
        hide_Detail_Industry(e);
    } 
}


let divAll = document.querySelectorAll(".industry_large_title");

for(let divIndex = 0; divIndex < divAll.length ; divIndex++){
    // 화살표 방향 바꾸기 클릭 이벤트 추가
    divAll[divIndex].addEventListener('click', arrowClassChange);
}





//소분류 카테고리 열기
function show_Small_Detail_Industry(e){
    let li_nodes = e.currentTarget.parentNode.childNodes[3];
    $(li_nodes).find('li').show();
    
    // const click_middle_className = '.'+e.currentTarget.children[1];
    // $(click_middle_className).children().show();
}
//소분류 카테고리 닫기
function hide_Small_Detail_Industry(e){
    let li_nodes = e.currentTarget.parentNode.childNodes[3];
    $(li_nodes).find('li').hide();

}

//중분류 화살표 바꾸기
function arrowMiddleClassChange(e){
    const CURRENT_ARROW_DOWN = "fas fa-chevron-down";
    const CURRENT_ARROW_RIGHT ="fas fa-chevron-right";
    let clickI = e.currentTarget.getElementsByTagName('i');
    
    if (clickI[0].className == CURRENT_ARROW_RIGHT ) {
        clickI[0].className = CURRENT_ARROW_DOWN;
        show_Small_Detail_Industry(e);
    }
    else {
        clickI[0].className = CURRENT_ARROW_RIGHT;

        hide_Small_Detail_Industry(e);
    } 
}


let detail_industry_div_list = $('.detail_industry_div');

for(let detail_index = 0 ; detail_index < detail_industry_div_list.length ; detail_index++){
    detail_industry_div_list[detail_index].addEventListener('click', arrowMiddleClassChange);

}



