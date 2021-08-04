// //모듈 불러오기
// let xlsx = require('xlsx');

// //엑셀 참조
// let workbook = xlsx.readFile('./2019/2019년 지역별 온실가스 배출량_20.11.26. 기준(수정).xlsx');

// //첫번째 워크 시트 이름 
// let firstWSheetName = workbook.SheetNames[0];
// //워크시크 가져오기
// let firstWSheet = workbook.Sheets[firstWSheetName];


// let json ={ };
// let workbook_length = workbook.SheetNames.length;

// while(workbook_length--) {
//     let sheetname = workbook.SheetNames[workbook_length];
//     console.log(sheetname);
//     json[sheetname] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetname]);

//    console.log(json[sheetname]);
// }
// console.log('오빠가 원하는게 이런걸까~!');


/*
//워크시트 싹 다 출력
console.log(workbook.Sheets[firstWSheetName]);

//이름만 출력
console.log(firstWSheetName);
let num =1;
let numString = "E";

for(let index = 1; index < 100; index++){
    console.log(firstWSheet[numString+index].v);
    

}*/

/*
// Requiring the module
const xlsxFile = require('read-excel-file/node')
//const reader = require('xls')
 
xlsxFile('./할당대상업체소재지.xlsx').then((rows) => {
    console.log(rows);
    console.table(rows);
   })
   
/*
// Reading our test file
const file = reader.readFile('./할당대상업체소재지.xls')

let data = []

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
{
const temp = reader.utils.sheet_to_json(
		file.Sheets[file.SheetNames[i]])
temp.forEach((res) => {
	data.push(res)
})
}

// Printing data
console.log(data)
*/



// const fs = require('fs');
// fs.writeFile('./시트1.json', JSON.stringify(json["시트1"]), 'utf8', function(err){
//         if (err) {
//             console.log("An error occured while writing JSON Object to File.");
//             return console.log(err);
//         }
// })

var xlsx = require("xlsx");

var wb = xlsx.readFile("./2019/할당대상업체소재지.xlsx");

console.log(wb.SheetNames);