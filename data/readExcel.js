let xlsx = require('xlsx');
let workbook = xlsx.readFile('./할당대상업체소재지.xlsx');

let firstWSheetName = workbook.SheetNames[0];
let firstWSheet = workbook.Sheets[firstWSheetName];
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
console.log(firstWSheetName);
let num =1;
let numString = "E";
for(let index = 1; index < 100; index++){
    console.log(firstWSheet[numString+index].v);
    

}
console.log('맞니');
