$(document).ready(function() {
	initTmap();
});


function initTmap(){
    var map = new Tmapv2.Map("company_map",  
		{
			center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841), // 지도 초기 좌표
			width: "100vw", 
			height: "100vh",
			zoom: 7
	    });
}
