
let classification = require('./industryClassification.js');

let pageNo=1;
let numOfRows= 1000;
let q1_year = new Array('2019', '2018', '2017', '2016');
let q2_area = new Array('서울', '경기', '인천', '부산', '울산', '경남', '대구','경북','광주','전남','전북','대전','충남','충북','강원','제주','세종');
let q3_size = new Array('5인미만', '5인 ~ 9인', '10인 ~ 19인', '20인 ~ 49인','50인 ~ 99인', '100인 ~ 299인',
'300인 ~ 499인', '500인 ~ 999인', '1000인이상');
let q4_code = classification.industry_CodeList ;
let q5_energy_name = new Array('석탄류', '석유류', '가스류', '열에너지', '전력', '기타', '폐에너지');
let q6_energy_code = new Array('A', 'B', 'C', 'D', 'E', 'G', 'F');

q6_energy_code[0] = new Array('연탄', '국내무연탄', '연료용수입무연탄', '원료용수입무연탄', '연료용유연탄(역청탄)', '원료용유연탄(역청탄)', '아역청탄', '석탄코크스', '갈탄(조개탄)',
'기타석탄', '코크스가스', '고로·전로가스', '유연탄', '수입무연탄');

q6_energy_code[1] = new Array('휘발유', '등유(구:실내등유)', '경유','B-A유(경질중유)', 'B-B유(중유)', 'B-C유(중질중유)', '나프타(납사)', '용제', '항공유','아스팔트','윤활유',
'석유코크스', '부생연료1호','부생연료2호', '기타석유','프로판', '부탄','기타가스(부생·정제가스포함)', '등유2(04,05만사용)', '보일러등유','부생연료', '재생유(04,05만사용)');

q6_energy_code[2] = new Array('천연가스(LNG)', '도시가스(LNG)', '도시가스(LPG)', '부생정제가스(04,05년만사용)', '기타가스(04,05년만사용)');
q6_energy_code[3] = new Array('열에너지');
q6_energy_code[4] = new Array('전력');
q6_energy_code[5] = new Array('기타연료(07년만사용)');
q6_energy_code[6] = new Array('폐가스', '시멘트킬른보조연료', '정제연료유', '산업폐기물', '생활폐기물(대형도시쓰레기포함)', 'SRF', '생활폐기물(\'15년까지사용)',  '대형도시쓰레기(\'15년까지사용)',
'RDF/RPF(\'15년까지사용)', '폐목재(\'12년까지사용)', '폐수지(폐합성수지포함)(\'10년까지사용)', '폐윤활유,재생유,정제폐유(\'10년까지사용)');

let total_co2_code = new Array(100);

//초기화
for (let listIndex =1; listIndex < 100 ; listIndex++) {
    total_co2_code[listIndex] = new Array();

    for(let list_detail_index = 0 ; list_detail_index < classification.industry_NameList[list_detail_index].length ; list_detail_index++ )
    {
         
    }

}



// // const { text } = require('body-parser');
// var request = require('request');

// console.log(q4_code);

//코드 리스트 돌려서 넣어보기
for(let code_index = 1 ; code_index < q4_code.length ; code_index++){

    // console.log(q4_code[code_index]);
    // console.log(q4_code[code_index][2]);
    // //코드 5자리이면 가져오기
    // for(let code_detail_index =0; cod)
    for(let code_detail_index = 0 ; code_detail_index < q4_code[code_index].length ; code_detail_index++){
        let codeNumber = q4_code[code_index][code_detail_index];

        console.log(codeNumber);
        if(codeNumber.length == 5){
            get_total_co2(codeNumber);
        }
    }
    
}


//co2총량 알아냅시다~
function get_total_co2(codeNumber){
    var url = 'http://apis.data.go.kr/B553530/GHG_EMISSIONS_02/GHG_EMISSIONS_02_LIST';
    
    //지역
    for(let q2_index = 0 ; q2_index < q2_area.length ; q2_index++){
        //규모
        for(let q3_index = 0 ;  q3_index < q3_size.length; q3_index++) {
            //에너지구분명
            for(let q5_index = 0 ; q5_index < q5_energy_name.length ; q5_index++){
                //에너지원코드
                for(let q6_index = q5_index ; q6_index < q6_energy_code.length ; q6_index++){
                    //쿼리문 받아오기
                    var queryParams = get_queryParams(q2_area[q2_index], q3_size[q3_index],codeNumber, q5_energy_name[q5_index], q6_energy_code[q6_index]);
                }
            }
        }
    }
    //파싱시작
    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) { 
        //콘솔에 찍기 
        console.log('Reponse received', body);

        //xml 파싱
        var DOMParser   = require('xmldom').DOMParser;
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(body, 'text/xml');

        //바디 태그 전체 가져오기
        let xml = xmlDoc.getElementsByTagName('body');
        let xml_total_co2 = xml[0].getElementsByTagName('total_co2')[0].childNodes[0].nodeValue;
        // total_co2 가져오기
        let xml_larget_codeNumber = parseInt(codeNumber.substr(0,2));
        let xml_small_codeNumber = parseInt(codeNumber.substr(0,3));

        let insert_total_co2 = total_co2_code[xml_larget_codeNumber].indexof(xml_small_codeNumber);

        total_co2_code[xml_larget_codeNumber][insert_total_co2] = xml_total_co2;

    });
}


function get_queryParams(area, size, codeNumber,energy_name, energy_code){

    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=aqLTx6axfr2f%2FAZUjMxPpXKI3I1DNml6LJ9QY3lhzpDicnfJraWE6peuCCMdVKEsPY%2Bip5wD3wsx37zC2D6o5Q%3D%3D'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent(numOfRows); /* */
    queryParams += '&' + encodeURIComponent('apiType') + '=' + encodeURIComponent('xml'); /* */
    queryParams += '&' + encodeURIComponent('q1') + '=' + encodeURIComponent(q1_year[0]); /* */
    queryParams += '&' + encodeURIComponent('q2') + '=' + encodeURIComponent(area); /* */
    queryParams += '&' + encodeURIComponent('q3') + '=' + encodeURIComponent(size); /* */
    queryParams += '&' + encodeURIComponent('q4') + '=' + encodeURIComponent(codeNumber); /* */
    queryParams += '&' + encodeURIComponent('q5') + '=' + encodeURIComponent(energy_name); /* */
    queryParams += '&' + encodeURIComponent('q6') + '=' + encodeURIComponent(energy_code); /* */
    
    return queryParams;
}



