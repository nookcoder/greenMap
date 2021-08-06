$(document).ready(function() {
	initTmap();
});
let radio_2019 = document.getElementById('2019');
let radio_2018 = document.getElementById('2018');
let radio_2017 = document.getElementById('2017');
let radio_2016 = document.getElementById('2016');
let radio_2015 = document.getElementById('2015');
let radio_2014 = document.getElementById('2014');
let radio_2013 = document.getElementById('2013');
let radio_2012 = document.getElementById('2012');
let radio_2011 = document.getElementById('2011'); 

function initTmap(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(36.007408855781904, 127.66055047039166), // 지도의 중심좌표
        level: 13 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);

    
    radio_2019.addEventListener('click', function(){
        const url='/data/지역별/2019년 온실가스.json';
        
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
            content:region+'<br>'+gas})
        }})
    })
    // function area_2019(){
    //     const url='/data/지역별/2019년 온실가스.json';
        
    //     fetch(url)
    //     .then((res)=>res.json())
    //     .then((myJson)=>{
    //     for(var i=0;i<myJson.length;i++){
        
    //         var gas=myJson[i].gas;
    //         var region=myJson[i].region;
    //         var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
    //         var imageSize = new kakao.maps.Size(24, 35); 
    //         var marker = new kakao.maps.CustomOverlay({
    //         map:map,
    //         position: latlng,
    //         content:region+'<br>'+gas
    //     });
    //     }
    //         console.log(JSON.stringify( myJson,null, 1 ));
    //     });
    //     }

    radio_2018.addEventListener('click', function(){  
        const url='/data/지역별/2018년 온실가스.json';
        
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
        }
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })
    radio_2017.addEventListener('click', function(){  
        const url='/data/지역별/2017년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:region+'<br>'+gas
        });
        }
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })
    radio_2016.addEventListener('click', function(){  
        const url='/data/지역별/2016년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:region+'<br>'+gas
        });
        }
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })

    radio_2015.addEventListener('click', function(){  
        const url='/data/지역별/2015년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:region+'<br>'+gas
        });
        }
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })

    radio_2014.addEventListener('click', function(){  
        const url='/data/지역별/2014년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:region+'<br>'+gas
        });
        }
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })
    radio_2013.addEventListener('click', function(){  
        const url='/data/지역별/2013년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:region+'<br>'+gas
        });
        }
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })

    radio_2012.addEventListener('click', function(){  
        const url='/data/지역별/2012년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:region+'<br>'+gas
        });
        }
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })
    radio_2011.addEventListener('click', function(){  
        const url='/data/지역별/2011년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:region+'<br>'+gas
        });
        }
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })

        // function area_2017(){
        //     const url='/data/지역별/2017년 온실가스.json';
            
        //     fetch(url)
        //     .then((res)=>res.json())
        //     .then((myJson)=>{
        //     for(var i=0;i<myJson.length;i++){
            
        //         var gas=myJson[i].gas;
        //         var region=myJson[i].region;
        //         var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        //         var imageSize = new kakao.maps.Size(24, 35); 
        //         var marker = new kakao.maps.CustomOverlay({
        //         map:map,
        //         position: latlng,
        //         content:region+'<br>'+gas
        //     });
        //     }
        //         console.log(JSON.stringify( myJson,null, 1 ));
        //     });
        //     }
        // function area_2016(){
        //     const url='/data/지역별/2016년 온실가스.json';
            
        //     fetch(url)
        //     .then((res)=>res.json())
        //     .then((myJson)=>{
        //     for(var i=0;i<myJson.length;i++){
            
        //         var gas=myJson[i].gas;
        //         var region=myJson[i].region;
        //         var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        //         var imageSize = new kakao.maps.Size(24, 35); 
        //         var marker = new kakao.maps.CustomOverlay({
        //         map:map,
        //         position: latlng,
        //         content:region+'<br>'+gas
        //     });
        //     }
        //         console.log(JSON.stringify( myJson,null, 1 ));
        //     });
        //     }
        // function area_2015(){
        //     const url='/data/지역별/2015년 온실가스.json';
            
        //     fetch(url)
        //     .then((res)=>res.json())
        //     .then((myJson)=>{
        //     for(var i=0;i<myJson.length;i++){
            
        //         var gas=myJson[i].gas;
        //         var region=myJson[i].region;
        //         var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        //         var imageSize = new kakao.maps.Size(24, 35); 
        //         var marker = new kakao.maps.CustomOverlay({
        //         map:map,
        //         position: latlng,
        //         content:region+'<br>'+gas
        //     });
        //     }
        //         console.log(JSON.stringify( myJson,null, 1 ));
        //     });
        // }
        // function area_2014(){
        //     const url='/data/지역별/2014년 온실가스.json';
            
        //     fetch(url)
        //     .then((res)=>res.json())
        //     .then((myJson)=>{
        //     for(var i=0;i<myJson.length;i++){
            
        //         var gas=myJson[i].gas;
        //         var region=myJson[i].region;
        //         var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        //         var imageSize = new kakao.maps.Size(24, 35); 
        //         var marker = new kakao.maps.CustomOverlay({
        //         map:map,
        //         position: latlng,
        //         content:region+'<br>'+gas
        //     });
        //     }
        //         console.log(JSON.stringify( myJson,null, 1 ));
        //     });
        //     }
        // function area_2013(){
        //     const url='/data/지역별/2013년 온실가스.json';
            
        //     fetch(url)
        //     .then((res)=>res.json())
        //     .then((myJson)=>{
        //     for(var i=0;i<myJson.length;i++){
            
        //         var gas=myJson[i].gas;
        //         var region=myJson[i].region;
        //         var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        //         var imageSize = new kakao.maps.Size(24, 35); 
        //         var marker = new kakao.maps.CustomOverlay({
        //         map:map,
        //         position: latlng,
        //         content:region+'<br>'+gas
        //     });
        //     }
        //         console.log(JSON.stringify( myJson,null, 1 ));
        //     });
        // }
        // function area_2012(){
        //     const url='/data/지역별/2012년 온실가스.json';
            
        //     fetch(url)
        //     .then((res)=>res.json())
        //     .then((myJson)=>{
        //     for(var i=0;i<myJson.length;i++){
            
        //         var gas=myJson[i].gas;
        //         var region=myJson[i].region;
        //         var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        //         var imageSize = new kakao.maps.Size(24, 35); 
        //         var marker = new kakao.maps.CustomOverlay({
                   
        //         map:map,
        //         position: latlng,
        //         content:region+'<br>'+gas
        //     });
        //     }
        //         console.log(JSON.stringify( myJson,null, 1 ));
        //     });
        // }
        // function area_2011(){
        //     const url='/data/지역별/2011년 온실가스.json';
            
        //     fetch(url)
        //     .then((res)=>res.json())
        //     .then((myJson)=>{
        //     for(var i=0;i<myJson.length;i++){
            
        //         var gas=myJson[i].gas;
        //         var region=myJson[i].region;
        //         var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
        //         var imageSize = new kakao.maps.Size(24, 35); 
        //         var marker = new kakao.maps.CustomOverlay({
        //         map:map,
        //         position: latlng,
        //         content:region+'<br>'+gas
        //     });
        //     }
        //         console.log(JSON.stringify( myJson,null, 1 ));
        //     });
        // }


        // function r_2019(){
        //    area_2019();
        // }
        // function r_2018(box){
        //     area_2018();
        //  }
        // function r_2017(box){
        //     area_2017();
        // }
        // function r_2016(box){
        //     area_2016();
        // }
        // function r_2015(box){
        //     area_2015();
        // }
        // function r_2014(box){
        //     area_2014();
        // }
        // function r_2013(box){
        //     area_2013();
        // }
        // function r_2012(box){
        //     area_2012();
        // }
        // function r_2011(box){
        //     area_2011();
        // }

        //function output()

        //각 연도별 온실가스 호출 
        //area_2019();
        //area_2018();
        //area_2017();
        //area_2016();
        //area_2015();
        //area_2014();
        //area_2013();
        //area_2012();
        //area_2011();

        
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
} 



