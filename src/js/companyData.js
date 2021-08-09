// 할당 대상 업체 VO 
function CompanyData(period, location, name, agency, designated_year,target_year, sector, co2, energy, target_sector) {
    this.period = period;
    this.name = name;
    this.location = location;
    this.agency = agency;
    this.designatedYear = designated_year;
    this.targetYear = target_year;
    this.sector = sector;
    this.co2 = co2;
    this.energy = energy;
    this.targetSector = target_sector;
}

// 회사 데이터 VO생성
function setCompanyVO(companyJSON, specificationJSON, array) {
    for(let index = 0; index < companyJSON.length; index++)
    {
        for(let index2 = 0; index2 < specificationJSON.length; index2++)
        {
            if(companyJSON[index].관리업체 == specificationJSON[index2].관리업체)
            {
                let companyData = new CompanyData(companyJSON[index].계획기간,companyJSON[index].소재지,companyJSON[index].관리업체,specificationJSON[index2].관장기관,companyJSON[index].지정연도, specificationJSON[index2].대상연도,specificationJSON[index2].지정구분,specificationJSON[index2].온실가스,specificationJSON[index2].에너지,specificationJSON[index2].지정업종);
                array.push(companyData);
            }
        }
    }
}

let assignmentCompany = new Array(); 
let targetCompany = new Array(); 

const ASSIGNMENT_3 = require('../data/할당대상업체/3.json');
const ASSIGNMENT_2 = require('../data/할당대상업체/2.json');
const ASSIGNMENT_1 = require('../data/할당대상업체/1.json');

const TARGET_2020 = require('../data/목표관리대상업체/2020.json'); 

const SPECIFICATION_2013 = require("../data/명세서 주요정보/2013.json");
const SPECIFICATION_2014 = require("../data/명세서 주요정보/2014.json");
const SPECIFICATION_2015 = require("../data/명세서 주요정보/2015.json");
const SPECIFICATION_2016 = require("../data/명세서 주요정보/2016.json");
const SPECIFICATION_2017 = require("../data/명세서 주요정보/2017.json");
const SPECIFICATION_2018 = require("../data/명세서 주요정보/2018.json");
const SPECIFICATION_2019 = require("../data/명세서 주요정보/2019.json");
const SPECIFICATION_2020 = require("../data/명세서 주요정보/2020.json");

setCompanyVO(ASSIGNMENT_1, SPECIFICATION_2014,assignmentCompany);
setCompanyVO(ASSIGNMENT_1, SPECIFICATION_2015,assignmentCompany);
setCompanyVO(ASSIGNMENT_1, SPECIFICATION_2016,assignmentCompany);
setCompanyVO(ASSIGNMENT_2, SPECIFICATION_2017,assignmentCompany);
setCompanyVO(ASSIGNMENT_2, SPECIFICATION_2018,assignmentCompany);
setCompanyVO(ASSIGNMENT_2, SPECIFICATION_2019,assignmentCompany);
setCompanyVO(ASSIGNMENT_3,SPECIFICATION_2020,assignmentCompany);

setCompanyVO(TARGET_2020,SPECIFICATION_2020,targetCompany);

console.log(assignmentCompany);
module.exports={
    assignmentCompany,
    targetCompany
}