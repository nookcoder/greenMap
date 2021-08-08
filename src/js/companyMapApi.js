
let companyData = require('./companyData');
const PERIOD = require('./companyConstants'); 

const ASSIGNMENT_COMPANY = companyData.assignmentCompany; 
const TARGET_COMPANY = companyData.targetCompany;

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(36.30, 127.16), //지도의 중심좌표.
	level: 13 //지도의 레벨(확대, 축소 정도)
};

map = new kakao.maps.Map(container, options);        

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

var markers_peroid_1 = [];
var markers_peroid_2 = []; 
var markers_peroid_3 = []; 

function addPeriodMarker(company_period,marker){
    switch (company_period) {
        case PERIOD.ONE:
            markers_peroid_1.push(marker);
            break;
        case PERIOD.TWO:
            markers_peroid_2.push(marker);
            break;
        case PERIOD.THREE:
            markers_peroid_3.push(marker);
            break;
    
        default:
            break;
    }
}

function drawMarker(company,period){
    geocoder.addressSearch(company.location,function(result,status){
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: coords
            });

            marker.setMap(map);
            addPeriodMarker(company.period,marker); 
        }
    })
}

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map,markers) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }            
}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers(markers) {
    setMarkers(map,markers);    
}

function hideMarkers(markers) {
    setMarkers(null,markers);    
}

function hidePeriodMarker(period){
    switch (period) {
        case PERIOD.ONE:
            hideMarkers(markers_peroid_1);
            break;
        
        case PERIOD.TWO:
            hideMarkers(markers_peroid_2);
            break;
        
        case PERIOD.THREE:
            hideMarkers(markers_peroid_3);
            break;
        

        default:
            break;
    }
}

$(function() {
    $('.period').on('change',function(e){
        let checking = $(this); 
        let checking_period = checking.val(); 
        if(!checking.is(":checked")){
            hidePeriodMarker(checking_period);
            return;
        }
        for(let index=0;index<ASSIGNMENT_COMPANY.length;index++){
            if(checking_period == ASSIGNMENT_COMPANY[index].period)
            {
                drawMarker(ASSIGNMENT_COMPANY[index]);
            }
        }
        console.log(markers_peroid_3);
    });
    
});