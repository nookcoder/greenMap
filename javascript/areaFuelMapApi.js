let radio_5 = document.getElementById('under_5');
let radio_9 = document.getElementById('under_9');
let radio_19 = document.getElementById('under_19');
let radio_49 = document.getElementById('under_49');
let radio_99 = document.getElementById('under_99');
let radio_100 = document.getElementById('up_100');

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(36.007408855781904, 127.66055047039166), // 지도의 중심좌표
    level: 13 
};

let map = new kakao.maps.Map(mapContainer, mapOption);
var markers=[];

function removeOverlay(){//오버레이 삭제 함수
  var cnt=markers.length;
  for(i=0;i<cnt;i++){
    markers[i].setMap(null);
  }
}
radio_5.addEventListener('click', function(){
  removeOverlay();
    const url='http://apis.data.go.kr/B553530/GHG_EMISSIONS_02/GHG_EMISSIONS_02_LIST?ServiceKey=JXGmdynA7sNSYbXXWNbS1m8rDfMnVeJ5%2FOoCQdCfSy2koBQ0yBOe7wMpUkdew%2B5bzwrZIpOVhbMdu7QT0RSvXw%3D%3D';
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[i].gas;
        var region=myJson[i].region;
        var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        var imageSize = new kakao.maps.Size(24, 35); 
        var marker = new kakao.maps.CustomOverlay({
        map:map,
        position: latlng,
        content:region+'<br>'+gas
      });
      markers.push(marker);
    }})
    return marker;
})
radio_9.addEventListener('click', function(){
  removeOverlay();
  import geojson from '/data/지역별/경계선/korea_line.geojson';

const { kakao } = window;

let data = geojson.features;
let coordinates = []; //좌표 저장 배열
let name = ''; //행정구 이름

let polygons = [];

const mapContainer = document.getElementById('pollution-map'); // 지도를 표시할 div
const mapOption = {
  center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
  level: 9, // 지도의 확대 레벨
};

const map = new kakao.maps.Map(mapContainer, mapOption);
const customOverlay = new kakao.maps.CustomOverlay({});
const infowindow = new kakao.maps.InfoWindow({ removable: true });
const displayArea = (coordinates, name) => {
    let path = [];
    let points = [];
    let areaResult = pollution.filter((item) => item[0] === name); //없어도 됨
  
    coordinates[0].forEach((coordinate) => {
      let point = {};
      point.x = coordinate[1];
      point.y = coordinate[0];
      points.push(point);
      path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
    });
  
    let polygon = new kakao.maps.Polygon({
      map: map,
      path: path, // 그려질 다각형의 좌표 배열입니다
      strokeWeight: 2, // 선의 두께입니다
      strokeColor: '#004c80', // 선의 색깔입니다
      strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: 'solid', // 선의 스타일입니다
      fillColor: '#fff', // 채우기 색깔입니다
      fillOpacity: 0.7 // 채우기 불투명도 입니다
    });
  
    polygons.push(polygon);
}
})


radio_19.addEventListener('click', function(){
  removeOverlay();
    const url='http://apis.data.go.kr/B553530/GHG_EMISSIONS_02';
    
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[i].gas;
        var region=myJson[i].region;
        var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        var imageSize = new kakao.maps.Size(24, 35); 
        var marker = new kakao.maps.CustomOverlay({
        map:map,
        position: latlng,
        content:region+'<br>'+gas
      });
      markers.push(marker);
    }})
    return marker;
})
radio_49.addEventListener('click', function(){
  removeOverlay();
    const url='http://apis.data.go.kr/B553530/GHG_EMISSIONS_02';
    
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[i].gas;
        var region=myJson[i].region;
        var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        var imageSize = new kakao.maps.Size(24, 35); 
        var marker = new kakao.maps.CustomOverlay({
        map:map,
        position: latlng,
        content:region+'<br>'+gas
      });
      markers.push(marker);
    }})
    return marker;
})
radio_99.addEventListener('click', function(){
  removeOverlay();
    const url='http://apis.data.go.kr/B553530/GHG_EMISSIONS_02';
    
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[i].gas;
        var region=myJson[i].region;
        var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        var imageSize = new kakao.maps.Size(24, 35); 
        var marker = new kakao.maps.CustomOverlay({
        map:map,
        position: latlng,
        content:region+'<br>'+gas
      });
      markers.push(marker);
    }})
    return marker;
})
radio_100.addEventListener('click', function(){
  removeOverlay();
    const url='http://apis.data.go.kr/B553530/GHG_EMISSIONS_02';
    
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[i].gas;
        var region=myJson[i].region;
        var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        var imageSize = new kakao.maps.Size(24, 35); 
        var marker = new kakao.maps.CustomOverlay({
        map:map,
        position: latlng,
        content:region+'<br>'+gas
      });
      markers.push(marker);
    }})
    return marker;
})