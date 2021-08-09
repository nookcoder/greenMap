var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(36.007408855781904, 127.66055047039166), // 지도의 중심좌표
    level: 11
};

let map = new kakao.maps.Map(mapContainer, mapOption);
var markers=[];

function removeOverlay(){//오버레이 삭제 함수
  var cnt=markers.length;
  for(i=0;i<cnt;i++){
    markers[i].setMap(null);
  }
}