
let companyData = require('./companyData');
const CONSTANT = require('./companyConstants'); 

const ASSIGNMENT_COMPANY = companyData.assignmentCompany; 
const TARGET_COMPANY = companyData.targetCompany;

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.433, 127.16), //지도의 중심좌표.
	level: 10 //지도의 레벨(확대, 축소 정도)
};

map = new kakao.maps.Map(container, options);        

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

var markers = [];

function drawMarker(company){
    geocoder.addressSearch(company.location,function(result,status){
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            var contents = CONSTANT.setCustomOverlay(company.period,company.location,company.name,company.agency,company.designatedYear,company.targetYear,company.sector,company.co2,company.energy);
            // 마커를 생성합니다
            
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                title : company.name,
                position: coords
            });
            marker.setMap(map);
            markers.push(marker);

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: '<div style="text-align:center;">' + company.name + '</div>'
            });

            // 마커에 마우스오버 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseover',function(){
                infowindow.open(map,marker);
            });

            // 마커에 마우스아웃 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseout',function(){
                infowindow.close();
            });

            // 커스텀 오버레이를 생성합니다
            var customOverlay = new kakao.maps.InfoWindow({
                content: contents,
                removable : true
            });

            kakao.maps.event.addListener(marker, 'click', function() {
                customOverlay.open(map,marker);
            })
        }
    })
}

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map,markers,type) {
    for (var i = markers.length-1; i >= 0; i--) {
        markers[i].setMap(map);
        if(type)
        {
            markers.pop();
        }
    }            
}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers(markers) {
    setMarkers(map,markers,false);    
}
function hideMarkers(markers) {
    setMarkers(null,markers,true);
}


$(function() {
    $('.main_sector_button').on('click',function(){
        hideMarkers(markers);
    });

    $('.period').on('change',function(e){
        let checking = $(this); 
        let checking_period = checking.val(); 
        if(!checking.is(":checked")){
            hideMarkers(markers);
            return;
        }
        for(let index=0;index<ASSIGNMENT_COMPANY.length;index++){
            hideMarkers(markers);

            if(checking_period == ASSIGNMENT_COMPANY[index].period)
            {
                drawMarker(ASSIGNMENT_COMPANY[index]);
            }
        }
    });
    
});