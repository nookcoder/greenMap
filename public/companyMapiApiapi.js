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

/***/ "./src/js/companyMapApi.js":
/*!*********************************!*\
  !*** ./src/js/companyMapApi.js ***!
  \*********************************/
/***/ (() => {

eval("\r\nvar container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스\r\nvar options = { //지도를 생성할 때 필요한 기본 옵션\r\n\tcenter: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.\r\n\tlevel: 3 //지도의 레벨(확대, 축소 정도)\r\n};\r\n\r\nvar map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴\r\n\r\n// let assignmentCompan = require('./assignmentCompany.js');\r\n\r\n//console.log(assignmentCompan);\r\n\n\n//# sourceURL=webpack://data/./src/js/companyMapApi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/companyMapApi.js"]();
/******/ 	
/******/ })()
;