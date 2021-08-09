
const ONE = '1차';
const TWO = '2차';
const THREE = '3차';

const PERIOD_CHECK = /차$/;
const PERIOD = 1; 
const YEAR_CHECK = /[0-9]/;
const YEAR = 2;

const NORMAL = 1; 
const AGENCY = 2; 

function setCustomOverlay(period, location, name, agency, designated_year,target_year, sector, co2, energy){
    let content = '<div class="overlaybox">'+
        '<ul>'+
            '<li>'+
                '<span class="overlaybox_content">'+name+'</span>'+
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
                '<span class="overlaybox_title">계획기간 : </span>' +
                '<span class="overlaybox_content">'+period+'</span>'+
            '</li>'+    
            '<li>'+
               '<span class="overlaybox_title">지정 연도 : </span>'+
               '<span class="overlaybox_content">'+designated_year+'년</span>'+
            '</li>'+    
            '<li>'+
                '<span class="overlaybox_title">대상 연도 : </span>'+
                '<span class="overlaybox_content">'+target_year+'년</span>'+
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


function setCustomOverlay2(location, name, agency, designated_year,target_year, sector, co2, energy){
    let content = '<div class="overlaybox">'+
        '<ul>'+
            '<li>'+
                '<span class="overlaybox_content">'+name+'</span>'+
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
               '<span class="overlaybox_title">지정 연도 : </span>'+
               '<span class="overlaybox_content">'+designated_year+'년</span>'+
            '</li>'+    
            '<li>'+
                '<span class="overlaybox_title">대상 연도 : </span>'+
                '<span class="overlaybox_content">'+target_year+'년</span>'+
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


module.exports ={
    ONE,
    TWO,
    THREE,
    PERIOD,
    PERIOD_CHECK,
    YEAR_CHECK,
    YEAR,
    NORMAL,
    AGENCY,
    setCustomOverlay,
    setCustomOverlay2
};