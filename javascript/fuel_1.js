function fuel_seoul()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[0].gas;
        var region=myJson[0].region;
        var lat=myJson[0].position1;
        var lng=myJson[0].position2;    
    }
    var content="<div class='fuel_1'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_busan()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[1].gas;
        var region=myJson[1].region;
        var lat=myJson[1].position1;
        var lng=myJson[1].position2;    
    }
    var content="<div class='fuel_2'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_daegu()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[2].gas;
        var region=myJson[2].region;
        var lat=myJson[2].position1;
        var lng=myJson[2].position2;    
    }
    var content="<div class='fuel_3'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_incheon()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[3].gas;
        var region=myJson[3].region;
        var lat=myJson[3].position1;
        var lng=myJson[3].position2;    
    }
    var content="<div class='fuel_4'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_gwangju()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[4].gas;
        var region=myJson[4].region;
        var lat=myJson[4].position1;
        var lng=myJson[4].position2;    
    }
    var content="<div class='fuel_5'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_daejeon()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[5].gas;
        var region=myJson[5].region;
        var lat=myJson[5].position1;
        var lng=myJson[5].position2;    
    }
    var content="<div class='fuel_6'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_ulsan()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[6].gas;
        var region=myJson[6].region;
        var lat=myJson[6].position1;
        var lng=myJson[6].position2;    
    }
    var content="<div class='fuel_7'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_sejong()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[7].gas;
        var region=myJson[7].region;
        var lat=myJson[7].position1;
        var lng=myJson[7].position2;    
    }
    var content="<div class='fuel_8'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_gyeonggi()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[8].gas;
        var region=myJson[8].region;
        var lat=myJson[8].position1;
        var lng=myJson[8].position2;    
    }
    var content="<div class='fuel_9'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_gangwon()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[9].gas;
        var region=myJson[9].region;
        var lat=myJson[9].position1;
        var lng=myJson[9].position2;    
    }
    var content="<div class='fuel_10'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_chungbuk()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[10].gas;
        var region=myJson[10].region;
        var lat=myJson[10].position1;
        var lng=myJson[10].position2;    
    }
    var content="<div class='fuel_11'>"+'<br>'+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_chungnam()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[11].gas;
        var region=myJson[11].region;
        var lat=myJson[11].position1;
        var lng=myJson[11].position2;    
    }
    var content="<div class='fuel_12'>"+'<br>'+'<br>'+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_jeonbuk()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[12].gas;
        var region=myJson[12].region;
        var lat=myJson[12].position1;
        var lng=myJson[12].position2;    
    }
    var content="<div class='fuel_13'>"+'<br>'+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_jeonnam()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[13].gas;
        var region=myJson[13].region;
        var lat=myJson[13].position1;
        var lng=myJson[13].position2;    
    }
    var content="<div class='fuel_14'>"+'<br>'+'<br>'+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_gyeongbuk()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[14].gas;
        var region=myJson[14].region;
        var lat=myJson[14].position1;
        var lng=myJson[14].position2;    
    }
    var content="<div class='fuel_15'>"+'<br>'+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_gyeongnam()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[15].gas;
        var region=myJson[15].region;
        var lat=myJson[15].position1;
        var lng=myJson[15].position2;    
    }
    var content="<div class='fuel_16'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

function fuel_jeju()
{

    const url='/data/지역별/석탄.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[16].gas;
        var region=myJson[16].region;
        var lat=myJson[16].position1;
        var lng=myJson[16].position2;    
    }
    var content="<div class='fuel_17'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
    var position = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.CustomOverlay({
    content: content,
    position:position    
});
marker.setMap(map);
markers.push(marker);
return marker;
})
}

