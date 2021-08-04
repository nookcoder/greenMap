const xlsx = require("xlsx");
const express = require('excel');
const FileReader = require('fs');

var firstWorkbook = xlsx.readFile("./할당대상업체/1차.xlsx");
var secondWorkbook = xlsx.readFile("./할당대상업체/2차.xlsx");
var thirdWorkbook = xlsx.readFile("./할당대상업체/3차.xlsx");
var co2Workbook = xlsx.readFile("./업체배출량/2020년도 업체별 명세서 주요정보_21.6.25기준(정정 최종).xlsx");

var firstWorksheet = firstWorkbook.Sheets["Sheet0"];
var secondWorksheet = secondWorkbook.Sheets["Sheet0"];
var thirdWorksheet = thirdWorkbook.Sheets["Sheet0"];
var co2Worksheet = co2Workbook.Sheets["명세서 주요정보(2020)_할당대상업체"]; 

var fistJson = xlsx.utils.sheet_to_json(firstWorksheet);
var secondJson = xlsx.utils.sheet_to_json(secondWorksheet);
var thirdJson = xlsx.utils.sheet_to_json(thirdWorksheet);
var co2Json = xlsx.utils.sheet_to_json(co2Worksheet);

let company = new Array(); 

function AssignmentCompany(period,name,location,agency,year,sector,co2,energy){
    this.period = period; 
    this.name = name; 
    this.location = location; 
}

function setAssignment(json){
    
    for(let index = 0; index<json.length; index++)
    {
        let assignmentCompany = new AssignmentCompany(json[index].계획기간,json[index].업체명,json[index].소재지);
        company.push(assignmentCompany);
    }
};

setAssignment(fistJson);
setAssignment(secondJson);
setAssignment(thirdJson);

console.log(company.length);

