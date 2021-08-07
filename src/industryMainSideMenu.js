let classification = require('./industryClassification.js') ;




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


//분류 코드 리스트
classification.industry_CodeList;

//분류 이름 리스트
classification.industry_NameList;



// 클릭시, 세부카테고리 보여주기
function show_Detail_Industry(e){
    
    
    let click_Ul_id = e.currentTarget.id + "_sector";
    let click_Ul = document.getElementById(click_Ul_id);

    //대분류 번호 받고 charCodeAt
    const click_large_number = e.currentTarget.id.charCodeAt(0);

    //A이면은 1이나옴 
    let click_insert_List_number = click_large_number - 64; 

    //1,2,3 들어있는 배열 반환
    let click_industry_code = industry_In_Code[click_insert_List_number];
    

    for(let index = 0; index < click_industry_code.length ; index++) {
        //해당 분류 코드 리스트에서 중분류 위치찾기
        const insert_middle_index = click_industry_code[index];

        let insert_middle_code = classification.industry_CodeList[insert_middle_index];
        let insert_middle_name = classification.industry_NameList[insert_middle_index];

        //중분류 li추가
        let insert_li = document.createElement("li");
        insert_li.innerHTML = "<i class='fas fa-chevron-right'></i> "+ insert_middle_code[0] +"."+ insert_middle_name[0];
        insert_li.addEventListener('click',  arrowMiddleClassChange);


        //소분류를 위한 ul 추가
        let insert_li_ul = document.createElement("ul");
        insert_li_ul.class = "sub_detail_industry";
        insert_li_ul.className =  insert_middle_code[0] +"_industry_sector";
    
        console.log(insert_middle_code.length);

        //소분류 li동적 추가
        for(let sub_li_index = 0 ; sub_li_index < insert_middle_code.length ; sub_li_index++) {
            if(insert_middle_code[sub_li_index].length == 3) {
                
                let insert_small_li = document.createElement("li");
                insert_small_li.innerHTML =  insert_middle_code[sub_li_index]+"."+insert_middle_name[sub_li_index];
                insert_li_ul.appendChild(insert_small_li);
                insert_small_li.classList.add('three_industry_sector');
            }
        }
        
        //최종 노드 넣기
        insert_li.append(insert_li_ul);   
        click_Ul.appendChild(insert_li);     
    }


    $('.three_industry_sector').hide();
}
// 클릭시, 화살표 방향 변경
const CURRENT_ARROW_DOWN = "fas fa-chevron-down";
const CURRENT_ARROW_RIGHT ="fas fa-chevron-right";

function arrowClassChange(e){
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

// 대분류 카테고리 닫기
function hide_Detail_Industry(e){
    let ul_node = e.currentTarget.parentNode.childNodes[3];
    $(ul_node).children().hide();
}

//중분류 화살표 바꾸기
function arrowMiddleClassChange(e){
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



//소분류 카테고리 닫기
function hide_Small_Detail_Industry(e){
    const click_middle_className = '.'+e.currentTarget.children[1].className;
    $(click_middle_className).children().hide();

}
//소분류 카테고리 열기
function show_Small_Detail_Industry(e){
    const click_middle_className = '.'+e.currentTarget.children[1].className;
    $(click_middle_className).children().show();
}

let divAll = document.querySelectorAll(".industry_large_title");

for(let divIndex = 0; divIndex < divAll.length ; divIndex++){
    // 화살표 방향 바꾸기 클릭 이벤트 추가
    divAll[divIndex].addEventListener('click', arrowClassChange);
}


