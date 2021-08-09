var content = '온실가스 100000000000';
var position = new kakao.maps.LatLng(33.450701, 126.570667); 
var seoul = new kakao.maps.Circle({
center : new kakao.maps.LatLng(37.566481622437934,126.98502302169841), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
}); 
var incheon = new kakao.maps.Circle({
center : new kakao.maps.LatLng(37.45617067506185, 126.70593716202376), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content       
}); 
var busan = new kakao.maps.Circle({
center : new kakao.maps.LatLng(35.1798978450028, 129.07504269074678), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content   
}); 
var ulsan = new kakao.maps.Circle({
center : new kakao.maps.LatLng(35.53931630388095, 129.31130011021926), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var gwangju = new kakao.maps.Circle({
center : new kakao.maps.LatLng(35.16028709174215, 126.8515187129608), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var daejeon = new kakao.maps.Circle({
center : new kakao.maps.LatLng(36.35064678347126, 127.38480796881625), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var gangwon = new kakao.maps.Circle({
center : new kakao.maps.LatLng(37.88677896568402, 127.72966438993677), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var gyeonggi = new kakao.maps.Circle({
center : new kakao.maps.LatLng(37.275102838671145, 127.00924374185942), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var Jeonbuk = new kakao.maps.Circle({
center : new kakao.maps.LatLng(35.823678896579914, 127.10736956850765), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var Jeonnam = new kakao.maps.Circle({
center : new kakao.maps.LatLng(34.81646521079705, 126.46295638411517), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var Gyeongbuk = new kakao.maps.Circle({
center : new kakao.maps.LatLng(36.57775945486019, 128.5046014324505), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var Gyeongnam = new kakao.maps.Circle({
center : new kakao.maps.LatLng(35.23899121204904, 128.6925696234592), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
text: '텍스트를 표시할 수 있어요!', 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var Chungbuk = new kakao.maps.Circle({
center : new kakao.maps.LatLng(36.63646328354067, 127.49150542412117), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var Chungnam = new kakao.maps.Circle({
center : new kakao.maps.LatLng(36.766068961948406, 126.71604722835751), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var Jeju = new kakao.maps.Circle({
center : new kakao.maps.LatLng(33.66460246668256, 126.59726240332495), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var Sejong = new kakao.maps.Circle({
center : new kakao.maps.LatLng(36.48061467174786, 127.28876476267482), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
var daegu = new kakao.maps.Circle({
center : new kakao.maps.LatLng(35.87951572922946, 128.605608955793), 
radius: 25000, 
strokeWeight: 5, 
strokeColor: 'red',
strokeOpacity: 0.3, 
fillColor: 'red',
fillOpacity: 0.6,
content: content     
}); 
seoul.setMap(map);
daegu.setMap(map);
daejeon.setMap(map);
incheon.setMap(map);
busan.setMap(map);
ulsan.setMap(map);
gwangju.setMap(map);
gangwon.setMap(map);
gyeonggi.setMap(map);
Sejong.setMap(map);
Jeju.setMap(map);
Jeonbuk.setMap(map);
Jeonnam.setMap(map);
Chungbuk.setMap(map);
Chungnam.setMap(map);
Gyeongbuk.setMap(map);
Gyeongnam.setMap(map);