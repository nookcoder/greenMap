// var xlsx = require("xlsx");

// let assignmentCompany = new Array();

// // 할당 대상 업체 VO 
// function AssignmentCompany(period, location, name, agency, designated_year,target_year, sector, co2, energy) {
//     this.period = period;
//     this.name = name;
//     this.location = location;
//     this.agency = agency;
//     this.designatedYear = designated_year;
//     this.targetYear = target_year;
//     this.sector = sector;
//     this.co2 = co2;
//     this.energy = energy;
// }

// // var a = require('../data/3.json');
// // var json = JSON.parse(a);

// // $.getJSON('../data/3.json',function (data)  {
// //     var item = []; 
// //     $.each(data,function(key,val) {
        
// //     })
// // })

//     var firstWorkbook = xlsx.readFile("../data/assign_company/1.xlsx");
//     var secondWorkbook = xlsx.readFile("../data/assign_company/2.xlsx");
//     var thirdWorkbook = xlsx.readFile("../data/assign_company/3.xlsx");

//     var co2Workbook = xlsx.readFile("../data/emit_company/2020.xlsx");
//     var co2Workbook1 = xlsx.readFile("../data/emit_company/2019.xlsx");
//     var co2Workbook2 = xlsx.readFile("../data/emit_company/2018.xlsx");
//     var co2Workbook3 = xlsx.readFile("../data/emit_company/2017.xlsx");
//     var co2Workbook4 = xlsx.readFile("../data/emit_company/2016.xlsx");
//     var co2Workbook5 = xlsx.readFile("../data/emit_company/2015.xlsx");
//     var co2Workbook6 = xlsx.readFile("../data/emit_company/2014.xlsx");
//     var co2Workbook7 = xlsx.readFile("../data/emit_company/2013.xlsx");
//     var co2Workbook8 = xlsx.readFile("../data/emit_company/2012.xlsx");
//     var co2Workbook9 = xlsx.readFile("../data/emit_company/2011.xlsx");

//     var firstWorksheet = firstWorkbook.Sheets["Sheet0"];
//     var secondWorksheet = secondWorkbook.Sheets["Sheet0"];
//     var thirdWorksheet = thirdWorkbook.Sheets["Sheet0"];

//     var co2Worksheet = co2Workbook.Sheets["Sheet0"];
//     var co2Worksheet1 = co2Workbook1.Sheets["Sheet0"];
//     var co2Worksheet2 = co2Workbook2.Sheets["Sheet0"];
//     var co2Worksheet3 = co2Workbook3.Sheets["Sheet0"];
//     var co2Worksheet4 = co2Workbook4.Sheets["Sheet0"];
//     var co2Worksheet5 = co2Workbook5.Sheets["Sheet0"];
//     var co2Worksheet6 = co2Workbook6.Sheets["Sheet0"];
//     var co2Worksheet7 = co2Workbook7.Sheets["Sheet0"];
//     var co2Worksheet8 = co2Workbook8.Sheets["Sheet0"];
//     var co2Worksheet9 = co2Workbook9.Sheets["Sheet0"];

//     var firstJson = xlsx.utils.sheet_to_json(firstWorksheet);
//     var secondJson = xlsx.utils.sheet_to_json(secondWorksheet);
//     var thirdJson = xlsx.utils.sheet_to_json(thirdWorksheet);

//     var co2Json2020 = xlsx.utils.sheet_to_json(co2Worksheet);
//     var co2Json2019 = xlsx.utils.sheet_to_json(co2Worksheet1);
//     var co2Json2018 = xlsx.utils.sheet_to_json(co2Worksheet2);
//     var co2Json2017 = xlsx.utils.sheet_to_json(co2Worksheet3);
//     var co2Json2016 = xlsx.utils.sheet_to_json(co2Worksheet4);
//     var co2Json2015 = xlsx.utils.sheet_to_json(co2Worksheet5);
//     var co2Json2014 = xlsx.utils.sheet_to_json(co2Worksheet6);
//     var co2Json2013 = xlsx.utils.sheet_to_json(co2Worksheet7);
//     var co2Json2012 = xlsx.utils.sheet_to_json(co2Worksheet8);
//     var co2Json2011 = xlsx.utils.sheet_to_json(co2Worksheet9);

//     function setAssignmentCompanyData(json, json2) {

//         let company;
    
//         for (let index = 0; index < json.length; index++) {
//             for (let index2 = 0; index2 < json2.length; index2++) {
//                     company = new AssignmentCompany(json[index].period, json[index].location, json[index].name, json2[index2].agency,json[index].year,json2[index2].year, json2[index2].sector,json2[index2].co2,json2[index2].energy);
//                     assignmentCompany.push(company);
//             }
//         }
//     };

//     setAssignmentCompanyData(firstJson,co2Json2014);
//     setAssignmentCompanyData(firstJson,co2Json2015);
//     setAssignmentCompanyData(firstJson,co2Json2016);
//     setAssignmentCompanyData(secondJson,co2Json2017);
//     setAssignmentCompanyData(secondJson,co2Json2018);
//     setAssignmentCompanyData(secondJson,co2Json2019);
//     setAssignmentCompanyData(thirdJson, co2Json2020);

// console.log(assignmentCompany);

// exports.export_AssignmentCompany = assignmentCompany;
let json = require('../data/할당대상업체/3.json');
exports.json = json;