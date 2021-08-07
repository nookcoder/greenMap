/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/industryClassification.js":
/*!***************************************!*\
  !*** ./src/industryClassification.js ***!
  \***************************************/
/***/ ((module) => {

eval(" //export 변수\n let industry_NameList = new Array(100);\n let industry_CodeList = new Array (100);\n\n//초기화\nfor (let listIndex =1; listIndex < 100 ; listIndex++) {\n    industry_NameList[listIndex] = new Array();\n    industry_CodeList[listIndex] = new Array();\n}\n\n\n\n//산업 분류 리스트 담기 \nfunction pushIndustryList(data) {\n\n    //데이터 담을때, 필요한 인덱스\n    let currentlistIndex = 1;\n    let startCodeNumber = \"01\";\n\n    $(data).find(\"item\").each(function(index, item){\n        let codeNumber = $(item).find('col[name=산업분류코드]').text();\n        \n        while (!codeNumber.startsWith(startCodeNumber)) {\n            \n            startCodeNumber = parseInt(startCodeNumber);\n            startCodeNumber++;\n            if(startCodeNumber < 10) {\n                startCodeNumber = \"0\" + startCodeNumber;\n            }\n            else {\n                startCodeNumber += \"\";\n            }\n            currentlistIndex++;\n            \n        }\n\n        industry_NameList[currentlistIndex].push($(item).find('col[name=산업분류명칭]').text());\n        industry_CodeList[currentlistIndex].push($(item).find('col[name=산업분류코드]').text());\n        \n    }) \n\n    \n}\n\n\n//파싱 시작\n$(function(){\n    $.ajax ({\n        type: \"GET\",\n        url: \"https://api.odcloud.kr/api/15049591/v1/uddi:0ad240e1-1871-40e8-9ea9-aa54bbf6fca7\",\n        data : \"page=1&perPage=1936&returnType=XML&serviceKey=aqLTx6axfr2f%2FAZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY%2Bip5wD3wsx37zC2D6o5Q%3D%3D\",\n        dataType : \"XML\",\n        success :function(response){\n            // 통신 성공시 호출\n            pushIndustryList(response); \n        },\n        error: function (xhr, status, msg) { // 통신 실패시 호출해야하는 함수\n            console.log('상태값 : ' + status + ' Http에러메시지 : ' + msg);\n        },\n    });\n\n});\n\nmodule.exports = {\n    industry_CodeList, \n    industry_NameList\n};\n\n\n\n//# sourceURL=webpack://data/./src/industryClassification.js?");

/***/ }),

/***/ "./src/industryMainSideMenu.js":
/*!*************************************!*\
  !*** ./src/industryMainSideMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let classification = __webpack_require__(/*! ./industryClassification.js */ \"./src/industryClassification.js\") ;\n\n\n\n\nlet industry_In_Code = new Array(\"not\",\"A\",\"B\", \"C\", \"D\",\"E\",\"F\", \"G\", \"H\", \"I\", \"J\", \"K\", \"L\"\n,\"M\", \"N\", \"O\", \"P\", \"Q\", \"R\", \"S\", \"T\", \"U\");\n\n//산업 분류 코드 초기화\nfor(let index = 0 ; index < industry_In_Code.length ; index++){\n    industry_In_Code[index] = new Array();\n}\n\n//산업 분류 코드 번호 나누 기\nfunction insertInCodeNumber (choice_number, start_number, end_number) {\n    for(let index = start_number ; index <= end_number; index++){\n        industry_In_Code[choice_number].push(index);\n    }\n}\n\n//산업 분류 코드 번호 배열에 차례대로 삽입\ninsertInCodeNumber(1, 1, 3);\ninsertInCodeNumber(2, 5, 8);\ninsertInCodeNumber(3, 10, 34);\ninsertInCodeNumber(4, 35, 35);\ninsertInCodeNumber(5, 36, 39);\ninsertInCodeNumber(6, 41, 42);\ninsertInCodeNumber(7, 45, 47);\ninsertInCodeNumber(8, 49, 52);\ninsertInCodeNumber(9, 55, 56);\ninsertInCodeNumber(10, 58, 63);\ninsertInCodeNumber(11, 64, 66);\ninsertInCodeNumber(12, 68, 68);\ninsertInCodeNumber(13, 70, 73);\ninsertInCodeNumber(14, 74, 76);\ninsertInCodeNumber(15, 84, 84);\ninsertInCodeNumber(16, 85, 85);\ninsertInCodeNumber(17, 86, 87);\ninsertInCodeNumber(18, 90, 91);\ninsertInCodeNumber(19, 94, 96);\ninsertInCodeNumber(20, 99, 99);\n\n\n//분류 코드 리스트\nclassification.industry_CodeList;\n\n//분류 이름 리스트\nclassification.industry_NameList;\n\n\n\n// 클릭시, 세부카테고리 보여주기\nfunction show_Detail_Industry(e){\n    \n    \n    let click_Ul_id = e.currentTarget.id + \"_sector\";\n    let click_Ul = document.getElementById(click_Ul_id);\n\n    //대분류 번호 받고 charCodeAt\n    const click_large_number = e.currentTarget.id.charCodeAt(0);\n\n    //A이면은 1이나옴 \n    let click_insert_List_number = click_large_number - 64; \n\n    //1,2,3 들어있는 배열 반환\n    let click_industry_code = industry_In_Code[click_insert_List_number];\n    \n\n    for(let index = 0; index < click_industry_code.length ; index++) {\n        //해당 분류 코드 리스트에서 중분류 위치찾기\n        const insert_middle_index = click_industry_code[index];\n\n        let insert_middle_code = classification.industry_CodeList[insert_middle_index];\n        let insert_middle_name = classification.industry_NameList[insert_middle_index];\n\n        //중분류 li추가\n        let insert_li = document.createElement(\"li\");\n        insert_li.innerHTML = \"<i class='fas fa-chevron-right'></i> \"+ insert_middle_code[0] +\".\"+ insert_middle_name[0];\n        insert_li.addEventListener('click',  arrowMiddleClassChange);\n\n\n        //소분류를 위한 ul 추가\n        let insert_li_ul = document.createElement(\"ul\");\n        insert_li_ul.class = \"sub_detail_industry\";\n        insert_li_ul.className =  insert_middle_code[0] +\"_industry_sector\";\n    \n        console.log(insert_middle_code.length);\n\n        //소분류 li동적 추가\n        for(let sub_li_index = 0 ; sub_li_index < insert_middle_code.length ; sub_li_index++) {\n            if(insert_middle_code[sub_li_index].length == 3) {\n                \n                let insert_small_li = document.createElement(\"li\");\n                insert_small_li.innerHTML =  insert_middle_code[sub_li_index]+\".\"+insert_middle_name[sub_li_index];\n                insert_li_ul.appendChild(insert_small_li);\n                insert_small_li.classList.add('three_industry_sector');\n            }\n        }\n        \n        //최종 노드 넣기\n        insert_li.append(insert_li_ul);   \n        click_Ul.appendChild(insert_li);     \n    }\n\n\n    $('.three_industry_sector').hide();\n}\n// 클릭시, 화살표 방향 변경\nconst CURRENT_ARROW_DOWN = \"fas fa-chevron-down\";\nconst CURRENT_ARROW_RIGHT =\"fas fa-chevron-right\";\n\nfunction arrowClassChange(e){\n    let clickI = e.currentTarget.getElementsByTagName('i');\n    \n    if (clickI[0].className == CURRENT_ARROW_RIGHT ) {\n        clickI[0].className = CURRENT_ARROW_DOWN;\n        show_Detail_Industry(e);\n    }\n    else {\n        clickI[0].className = CURRENT_ARROW_RIGHT;\n\n        hide_Detail_Industry(e);\n    } \n}\n\n// 대분류 카테고리 닫기\nfunction hide_Detail_Industry(e){\n    let ul_node = e.currentTarget.parentNode.childNodes[3];\n    $(ul_node).children().hide();\n}\n\n//중분류 화살표 바꾸기\nfunction arrowMiddleClassChange(e){\n    let clickI = e.currentTarget.getElementsByTagName('i');\n    \n    if (clickI[0].className == CURRENT_ARROW_RIGHT ) {\n        clickI[0].className = CURRENT_ARROW_DOWN;\n        show_Small_Detail_Industry(e);\n    }\n    else {\n        clickI[0].className = CURRENT_ARROW_RIGHT;\n\n        hide_Small_Detail_Industry(e);\n    } \n}\n\n\n\n//소분류 카테고리 닫기\nfunction hide_Small_Detail_Industry(e){\n    const click_middle_className = '.'+e.currentTarget.children[1].className;\n    $(click_middle_className).children().hide();\n\n}\n//소분류 카테고리 열기\nfunction show_Small_Detail_Industry(e){\n    const click_middle_className = '.'+e.currentTarget.children[1].className;\n    $(click_middle_className).children().show();\n}\n\nlet divAll = document.querySelectorAll(\".industry_large_title\");\n\nfor(let divIndex = 0; divIndex < divAll.length ; divIndex++){\n    // 화살표 방향 바꾸기 클릭 이벤트 추가\n    divAll[divIndex].addEventListener('click', arrowClassChange);\n}\n\n\n\n\n//# sourceURL=webpack://data/./src/industryMainSideMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/industryMainSideMenu.js");
/******/ 	
/******/ })()
;