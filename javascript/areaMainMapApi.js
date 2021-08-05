$(document).ready(function() {
	initTmap();
});

function initTmap(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(36.007408855781904, 127.66055047039166), // 지도의 중심좌표
        level: 13 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);

    $.getJSON('/data/2019 지역별 온실가스.json', function(data) {

        for(key in data){
            console.log("region :"+data[key].region+" , gas :"+data[key].gas);
                }
            });

    /*  $(document).ready(function(){

        jsonTest();
        
        })
        
        function jsonTest(){
        console.log(Root.test[1].gas);
        console.log(Root.test[1].position1);
        }*/

    /*$(document).ready(function(){
        console.log("start");
        $.get("2019 지역별 온실가스.json",function(region){
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
            for (var i = 0; i < region.length; i ++) {
                
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35); 
                
                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
                var latlng=new kakao.maps.latlng(region[i].position1, region[i].position2);
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: latlng, // 마커를 표시할 위치
                    title : region[i].gas, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : markerImage // 마커 이미지 
                });
            }
        });
    })*/
    //var xml=request.responseXML;
    //var region=xml.getElementsByTagName("region");
    //var postion1=xml.getElementsByTagName("position1");
    //var postion2=xml.getElementsByTagName("position2");
    //var gas=xml.getElementsByTagName("gas");

    

// 마커 이미지의 이미지 주소입니다


    var content = '온실가스 100000000000';
    var position = new kakao.maps.LatLng(33.450701, 126.570667); 
    var seoul = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(37.566481622437934,126.98502302169841), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
  }); 
  var incheon = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(37.45617067506185, 126.70593716202376), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content       
  }); 
  var busan = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(35.1798978450028, 129.07504269074678), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content   
  }); 
  var ulsan = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(35.53931630388095, 129.31130011021926), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var gwangju = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(35.16028709174215, 126.8515187129608), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var daejeon = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(36.35064678347126, 127.38480796881625), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var gangwon = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(37.88677896568402, 127.72966438993677), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var gyeonggi = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(37.275102838671145, 127.00924374185942), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var Jeonbuk = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(35.823678896579914, 127.10736956850765), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var Jeonnam = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(34.81646521079705, 126.46295638411517), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var Gyeongbuk = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(36.57775945486019, 128.5046014324505), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var Gyeongnam = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(35.23899121204904, 128.6925696234592), 
    radius: 20000, 
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
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var Chungnam = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(36.766068961948406, 126.71604722835751), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var Jeju = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(33.66460246668256, 126.59726240332495), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var Sejong = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(36.48061467174786, 127.28876476267482), 
    radius: 20000, 
    strokeWeight: 5, 
    strokeColor: 'red',
    strokeOpacity: 0.3, 
    fillColor: 'red',
    fillOpacity: 0.6,
    content: content     
  }); 
  var daegu = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(35.87951572922946, 128.605608955793), 
    radius: 20000, 
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
}