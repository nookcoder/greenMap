import xlsx from '../node_modules/xlsx/xlsx.js';

var firstWorkbook = xlsx.readFile("../data/할당대상업체/1차.xlsx");
var secondWorkbook = xlsx.readFile("../data/할당대상업체/2차.xlsx");
var thirdWorkbook = xlsx.readFile("../data/할당대상업체/3차.xlsx");

var co2Workbook = xlsx.readFile("../data/업체배출량/2020년도 업체별 명세서 주요정보_21.6.25기준(정정 최종).xlsx");
var co2Workbook1 = xlsx.readFile("../data/업체배출량/2019년도 업체별 명세서 주요정보(업데이트)_20.11.26.기준(수정).xlsx");
var co2Workbook2 = xlsx.readFile("../data/업체배출량/2018년도 업체별 명세서 주요정보(업데이트)_19.08.08.기준.xlsx");
var co2Workbook3 = xlsx.readFile("../data/업체배출량/2017년도 업체별 명세서 주요정보(업데이트)_18.12.20.기준.xlsx");
var co2Workbook4 = xlsx.readFile("../data/업체배출량/2016년 업체별 명세서 주요정보.xlsx");
var co2Workbook5 = xlsx.readFile("../data/업체배출량/2015년 업체별 명세서 주요정보.xlsx");
var co2Workbook6 = xlsx.readFile("../data/업체배출량/2014년 업체별 명세서 주요정보_수정(2019.11.20).xlsx");
var co2Workbook7 = xlsx.readFile("../data/업체배출량/2013년 업체별 명세서 주요정보_수정(2019.11.20).xlsx");
var co2Workbook8 = xlsx.readFile("../data/업체배출량/2012년 업체별 명세서 주요정보_수정(2019.3.22).xlsx");
var co2Workbook9 = xlsx.readFile("../data/업체배출량/2011년 업체별 명세서 주요정보.xlsx");

var firstWorksheet = firstWorkbook.Sheets["Sheet0"];
var secondWorksheet = secondWorkbook.Sheets["Sheet0"];
var thirdWorksheet = thirdWorkbook.Sheets["Sheet0"];

var co2Worksheet = co2Workbook.Sheets["명세서 주요정보(2020)_할당대상업체"];
var co2Worksheet1 = co2Workbook1.Sheets["명세서 주요정보(2019)_할당대상업체"];
var co2Worksheet2 = co2Workbook2.Sheets["명세서 주요정보(2018)_할당대상업체"];
var co2Worksheet3 = co2Workbook3.Sheets["명세서 주요정보(2017)_할당대상업체"];
var co2Worksheet4 = co2Workbook4.Sheets["명세서 주요정보(2016)"];
var co2Worksheet5 = co2Workbook5.Sheets["명세서 주요정보(2015)"];
var co2Worksheet6 = co2Workbook6.Sheets["명세서 주요정보(2014)"];
var co2Worksheet7 = co2Workbook7.Sheets["명세서 주요정보(2013)"];
var co2Worksheet8 = co2Workbook8.Sheets["명세서 주요정보(2012)"];
var co2Worksheet9 = co2Workbook9.Sheets["명세서 주요정보(2011)"];

var firstJson = xlsx.utils.sheet_to_json(firstWorksheet);
var secondJson = xlsx.utils.sheet_to_json(secondWorksheet);
var thirdJson = xlsx.utils.sheet_to_json(thirdWorksheet);

var co2Json2020 = xlsx.utils.sheet_to_json(co2Worksheet);
var co2Json2019 = xlsx.utils.sheet_to_json(co2Worksheet1);
var co2Json2018 = xlsx.utils.sheet_to_json(co2Worksheet2);
var co2Json2017 = xlsx.utils.sheet_to_json(co2Worksheet3);
var co2Json2016 = xlsx.utils.sheet_to_json(co2Worksheet4);
var co2Json2015 = xlsx.utils.sheet_to_json(co2Worksheet5);
var co2Json2014 = xlsx.utils.sheet_to_json(co2Worksheet6);
var co2Json2013 = xlsx.utils.sheet_to_json(co2Worksheet7);
var co2Json2012 = xlsx.utils.sheet_to_json(co2Worksheet8);
var co2Json2011 = xlsx.utils.sheet_to_json(co2Worksheet9);

let assignmentCompany = new Array();

// 할당 대상 업체 VO 
function AssignmentCompany(period, location, name, agency, designated_year,target_year, sector, co2, energy) {
    this.period = period;
    this.name = name;
    this.location = location;
    this.agency = agency;
    this.designatedYear = designated_year;
    this.targetYear = target_year;
    this.sector = sector;
    this.co2 = co2;
    this.energy = energy;
}

function setAssignmentCompanyData(json, json2) {

    let company;

    for (let index = 0; index < json.length; index++) {
        for (let index2 = 0; index2 < json2.length; index2++) {
            if (json[index].업체명 == json2[index2].업체명) {
                company = new AssignmentCompany(json[index].계획기간, json[index].소재지, json[index].업체명, json2[index2].관장기관,json[index].지정연도,json2[index2].대상년도, json2[index2].지정업종,json2[index2].온실가스,json2[index2].에너지);
                assignmentCompany.push(company);
            }
        }
    }
};

setAssignmentCompanyData(firstJson,co2Json2014);
setAssignmentCompanyData(firstJson,co2Json2015);
setAssignmentCompanyData(firstJson,co2Json2016);
setAssignmentCompanyData(secondJson,co2Json2017);
setAssignmentCompanyData(secondJson,co2Json2018);
setAssignmentCompanyData(secondJson,co2Json2019);
setAssignmentCompanyData(thirdJson, co2Json2020);

for(let i =0; i<10;i++)
{
    console.log(assignmentCompany[i]);
}


export {assignmentCompany as default}; 