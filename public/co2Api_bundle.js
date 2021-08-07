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

/***/ "./src/co2Api.js":
/*!***********************!*\
  !*** ./src/co2Api.js ***!
  \***********************/
/***/ ((module) => {

eval(" //export 변수\n let industry_NameList = new Array(100);\n let industry_CodeList = new Array (100);\n\n//초기화\nfor (let listIndex =1; listIndex < 100 ; listIndex++) {\n    industry_NameList[listIndex] = new Array();\n    industry_CodeList[listIndex] = new Array();\n}\n\n//산업 분류 리스트 담기 \nfunction pushIndustryList(data) {\n\n    //데이터 담을때, 필요한 인덱스\n    let currentlistIndex = 1;\n    let startCodeNumber = \"01\";\n\n    $(data).find(\"item\").each(function(index, item){\n        let codeNumber = $(item).find('col[name=산업분류코드]').text();\n        \n        while (!codeNumber.startsWith(startCodeNumber)) {\n            \n            startCodeNumber = parseInt(startCodeNumber);\n            startCodeNumber++;\n            if(startCodeNumber < 10) {\n                startCodeNumber = \"0\" + startCodeNumber;\n            }\n            else {\n                startCodeNumber += \"\";\n            }\n            currentlistIndex++;\n            \n        }\n\n        industry_NameList[currentlistIndex].push($(item).find('col[name=산업분류명칭]').text());\n        industry_CodeList[currentlistIndex].push($(item).find('col[name=산업분류코드]').text()) \n    \n    }) \n    \n}\n\n//파싱 시작\n$.ajax ({\n    type: \"GET\",\n    url: \"https://api.odcloud.kr/api/15049591/v1/uddi:0ad240e1-1871-40e8-9ea9-aa54bbf6fca7\",\n    data : \"page=1&perPage=1936&returnType=XML&serviceKey=aqLTx6axfr2f%2FAZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY%2Bip5wD3wsx37zC2D6o5Q%3D%3D\",\n    dataType : \"XML\",\n    success :function(response){\n        // 통신 성공시 호출\n        pushIndustryList(response);    \n    },\n    error: function (xhr, status, msg) { // 통신 실패시 호출해야하는 함수\n        console.log('상태값 : ' + status + ' Http에러메시지 : ' + msg);\n    },\n});\n\nmodule.exports = industry_CodeList;\nmodule.exports = industry_NameList;\n\n\n//# sourceURL=webpack://data/./src/co2Api.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/co2Api.js");
/******/ 	
/******/ })()
;