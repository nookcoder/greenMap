
const ONE = '1차';
const TWO = '2차';
const THREE = '3차';

const PERIOD_CHECK = /차$/;
const PERIOD = 1; 
const YEAR_CHECK = /[0-9]/;
const YEAR = 2;
const SECTOR = 3;
const AGENCYSECOTOR = 4; 

const NORMAL = 1; 
const AGENCY = 2; 

function setCustomOverlay(period, location, name, agency, designated_year, sector, co2, energy, targetSector){
    let content = '<div class="overlaybox">'+
        '<ul class="overlaybox_ul">'+
            '<li>'+
                '<span class="overlaybox_name">'+name+'</span>'+
            '</li>' +
            '<li>'+
                '<span class="overlaybox_title">관장 기관 : </span>'+
                '<span class="overlaybox_content">'+agency+'</span>'+
            '</li>'+
            '<li>'+
                '<span class="overlaybox_title">지정 구분 : </span>'+
                '<span class="overlaybox_content">'+sector+'</span>'+
            '</li>'+   
            '<li>'+
                '<span class="overlaybox_title">지정 업종 : </span>'+
                '<span class="overlaybox_content">'+targetSector+'</span>'+
            '</li>'+        
            '<li>'+
                '<span class="overlaybox_title">계획기간 : </span>' +
                '<span class="overlaybox_content">'+period+'</span>'+
            '</li>'+    
            '<li>'+
               '<span class="overlaybox_title">지정 연도 : </span>'+
               '<span class="overlaybox_content">'+designated_year+'년</span>'+
            '</li>'+      
            '<li>'+
               '<span class="overlaybox_title">온실가스 배출량 : </span>'+
               '<span class="overlaybox_content">'+co2+ '(단위 : CO2eq)</span>'+
            '</li>'+    
            '<li>'+
                '<span class="overlaybox_title">에너지 사용량 : </span>'+
                '<span class="overlaybox_content">'+energy + '(단위 : TJ)</span>'+
            '</li>'+    
            '<li>'+
            '<span class="overlaybox_title">소재지 : </span>'+
            '<span class="overlaybox_content">' + location +'</span>'+
            '</li>'+    
        '</ul>'+
    '</div>';

    return content;
};


function setCustomOverlay2(location, name, agency, designated_year, sector, co2, energy,targetSector){
    let content = '<div class="overlaybox">'+
        '<ul class="overlaybox_ul">'+
            '<li>'+
                '<span class="overlaybox_name">'+name+'</span>'+
            '</li>' +
            '<li>'+
                '<span class="overlaybox_title">관장 기관 : </span>'+
                '<span class="overlaybox_content">'+agency+'</span>'+
            '</li>'+
            '<li>'+
                '<span class="overlaybox_title">지정 구분 : </span>'+
                '<span class="overlaybox_content">'+sector+'</span>'+
            '</li>'+  
            '<li>'+
                '<span class="overlaybox_title">지정 업종 : </span>'+
                '<span class="overlaybox_content">'+targetSector+'</span>'+
            '</li>'+      
            '<li>'+
               '<span class="overlaybox_title">지정 연도 : </span>'+
               '<span class="overlaybox_content">'+designated_year+'년</span>'+
            '</li>'+    
            '<li>'+
               '<span class="overlaybox_title">온실가스 배출량 : </span>'+
               '<span class="overlaybox_content">'+co2+ '(단위 : CO2eq)</span>'+
            '</li>'+    
            '<li>'+
                '<span class="overlaybox_title">에너지 사용량 : </span>'+
                '<span class="overlaybox_content">'+energy + '(단위 : TJ)</span>'+
            '</li>'+    
            '<li>'+
            '<span class="overlaybox_title">소재지 : </span>'+
            '<span class="overlaybox_content">' + location +'</span>'+
            '</li>'+    
        '</ul>'+
    '</div>';

    return content;
};

function createPulicSectionContentBlue(name,standard,emition,decrease,percentage){
    content =
     '<div class="public_container">'+
    '<div class="public_container_left">'+
        '<span class="public_container_left_name">'+name+'</span>'+
        '<span class="public_container_left_division">기준배출량(tonCO₂-eq) : '+standard+'</span>'+
    '</div>'+ 
    '<div class="public_container_right">'+
        '<div class="public_container_right_co2">'+
            '<span class="public_container_right_co2_emition public_container_right_co2_emition_up">'+emition+'</span>'+
            '<span class="public_container_right_co2_emition public_container_right_co2_emition_down blue_down"><i class="fas fa-sort-down"></i>'+decrease+'</span>'+
        '</div>'+
        '<div class="public_container_right_percentage blue">'+
            '<spaan class="public_container_right_percentage_value">'+percentage+'%</spaan>'+
        '</div>'+
    '</div>'+    
    '</div>';
    return content;
}


function createPulicSectionContentRed(name,standard,emition,decrease,percentage){
    content = '<div class="public_container">'+
    '<div class="public_container_left">'+
        '<span class="public_container_left_name">'+name+'</span>'+
        '<span class="public_container_left_division">기준배출량(tonCO₂-eq) : '+standard+'</span>'+
    '</div>'+ 
    '<div class="public_container_right">'+
        '<div class="public_container_right_co2">'+
            '<span class="public_container_right_co2_emition public_container_right_co2_emition_up">'+emition+'</span>'+
            '<span class="public_container_right_co2_emition public_container_right_co2_emition_down red_up"><i class="fas fa-caret-up"></i>'+decrease+'</span>'+
        '</div>'+
        '<div class="public_container_right_percentage red">'+
            '<spaan class="public_container_right_percentage_value">'+percentage+'%</spaan>'+
        '</div>'+
    '</div>'+    
    '</div>';
    return content;
}

module.exports ={
    ONE,
    TWO,
    THREE,
    PERIOD,
    PERIOD_CHECK,
    YEAR_CHECK,
    YEAR,
    SECTOR,
    AGENCYSECOTOR,
    NORMAL,
    AGENCY,
    setCustomOverlay,
    setCustomOverlay2,
    createPulicSectionContentBlue,
    createPulicSectionContentRed
};