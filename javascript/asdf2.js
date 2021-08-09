function asdf_seoul2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[0].gas;
        var region=myJson[0].region;
        var lat=myJson[0].position1;
        var lng=myJson[0].position2;    
    }
    var content="<div class='asdf12'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_busan2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[1].gas;
        var region=myJson[1].region;
        var lat=myJson[1].position1;
        var lng=myJson[1].position2;    
    }
    var content="<div class='asdf10'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_daegu2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[2].gas;
        var region=myJson[2].region;
        var lat=myJson[2].position1;
        var lng=myJson[2].position2;    
    }
    var content="<div class='asd11'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function adsf_incheon2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[3].gas;
        var region=myJson[3].region;
        var lat=myJson[3].position1;
        var lng=myJson[3].position2;    
    }
    var content="<div class='asdf10'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_gwangju2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[4].gas;
        var region=myJson[4].region;
        var lat=myJson[4].position1;
        var lng=myJson[4].position2;    
    }
    var content="<div class='asdf4'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_daejeon2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[5].gas;
        var region=myJson[5].region;
        var lat=myJson[5].position1;
        var lng=myJson[5].position2;    
    }
    var content="<div class='asdf4'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_ulsan2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[6].gas;
        var region=myJson[6].region;
        var lat=myJson[6].position1;
        var lng=myJson[6].position2;    
    }
    var content="<div class='asdf4'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_sejong2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[7].gas;
        var region=myJson[7].region;
        var lat=myJson[7].position1;
        var lng=myJson[7].position2;    
    }
    var content="<div class='asdf1'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_gyeonggi2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[8].gas;
        var region=myJson[8].region;
        var lat=myJson[8].position1;
        var lng=myJson[8].position2;    
    }
    var content="<div class='asdf14'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function adsf_gangwon2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[9].gas;
        var region=myJson[9].region;
        var lat=myJson[9].position1;
        var lng=myJson[9].position2;    
    }
    var content="<div class='asdf11'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_chungbuk2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[10].gas;
        var region=myJson[10].region;
        var lat=myJson[10].position1;
        var lng=myJson[10].position2;    
    }
    var content="<div class='asdf11'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_chungnam2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[11].gas;
        var region=myJson[11].region;
        var lat=myJson[11].position1;
        var lng=myJson[11].position2;    
    }
    var content="<div class='asdf10'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_jeonbuk2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[12].gas;
        var region=myJson[12].region;
        var lat=myJson[12].position1;
        var lng=myJson[12].position2;    
    }
    var content="<div class='asdf7'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_jeonnam2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[13].gas;
        var region=myJson[13].region;
        var lat=myJson[13].position1;
        var lng=myJson[13].position2;    
    }
    var content="<div class='asdf7'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_gyeongbuk2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[14].gas;
        var region=myJson[14].region;
        var lat=myJson[14].position1;
        var lng=myJson[14].position2;    
    }
    var content="<div class='asdf15'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_gyeongnam2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[15].gas;
        var region=myJson[15].region;
        var lat=myJson[15].position1;
        var lng=myJson[15].position2;    
    }
    var content="<div class='asdf15'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_jeju2()
{

    const url='/data/지역별/도로교통_휘발유.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[16].gas;
        var region=myJson[16].region;
        var lat=myJson[16].position1;
        var lng=myJson[16].position2;    
    }
    var content="<div class='asdf9'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

