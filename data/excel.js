const XLSX = require("xlsx"); 

var workbook = XLSX.readFile('./할당대상업체소재지.xlsx'); 
//첫번째 워크 시트 이름 
let firstWSheetName = workbook.SheetNames[0];
//워크시크 가져오기
let firstWSheet = workbook.Sheets[firstWSheetName];


let json ={ };
let workbook_length = workbook.SheetNames.length;

while(workbook_length--) {
    let sheetname = workbook.SheetNames[workbook_length];
    console.log(sheetname);
    json[sheetname] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetname]);

   console.log(json[sheetname]);
}
console.log('오빠가 원하는게 이런걸까~!');