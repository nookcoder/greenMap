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