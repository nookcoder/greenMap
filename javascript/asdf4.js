function asdf_seoul4()
{

    const url='/data/지역별/항만교통.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[0].gas;
        var region=myJson[0].region;
        var lat=myJson[0].position1;
        var lng=myJson[0].position2;    
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

function asdf_busan4()
{

    const url='/data/지역별/항만교통.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[1].gas;
        var region=myJson[1].region;
        var lat=myJson[1].position1;
        var lng=myJson[1].position2;    
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

function asdf_daegu4()
{

    const url='/data/지역별/항만교통.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[2].gas;
        var region=myJson[2].region;
        var lat=myJson[2].position1;
        var lng=myJson[2].position2;    
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

function asdf_incheon4()
{

    const url='/data/지역별/항만교통.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[3].gas;
        var region=myJson[3].region;
        var lat=myJson[3].position1;
        var lng=myJson[3].position2;    
    }
    var content="<div class='asdf5'>"+'<br>'+'<br>'+region+'<br>'+'<br>'+gas+'톤CO2-eq'+"</div>";
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

function asdf_gwangju4()
{

    const url='/data/지역별/항만교통.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[4].gas;
        var region=myJson[4].region;
        var lat=myJson[4].position1;
        var lng=myJson[4].position2;    
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

function asdf_daejeon4()
{

    const url='/data/지역별/항만교통.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[5].gas;
        var region=myJson[5].region;
        var lat=myJson[5].position1;
        var lng=myJson[5].position2;    
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

function asdf_ulsan4()
{

    const url='/data/지역별/항만교통.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[6].gas;
        var region=myJson[6].region;
        var lat=myJson[6].position1;
        var lng=myJson[6].position2;    
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

function asdf_sejong4()
{

    const url='/data/지역별/항만교통.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[7].gas;
        var region=myJson[7].region;
        var lat=myJson[7].position1;
        var lng=myJson[7].position2;    
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

function asdf_gyeonggi4()
{

    const url='/data/지역별/항만교통.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[8].gas;
        var region=myJson[8].region;
        var lat=myJson[8].position1;
        var lng=myJson[8].position2;    
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

function asdf_gangwon4()
{

    const url='/data/지역별/항만교통.json';
        
    fetch(url)
    .then((res)=>res.json())
    .then((myJson)=>{
    for(var i=0;i<myJson.length;i++){
    
        var gas=myJson[9].gas;
        var region=myJson[9].region;
        var lat=myJson[9].position1;
        var lng=myJson[9].position2;    
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

