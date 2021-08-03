$(document).ready(function() {
	initTmap();
    startDataLayer();
});

function initTmap()
            {
				var map = new Tmapv2.Map("company_map",   
				{
					center: new Tmapv2.LatLng(36.145393, 128.108905), // 지도 초기 좌표
					width: "90%", 
					height: "800px",
					zoom: 7,
                    minZoom:9
                    
				}
                
                );
                var marker = new Tmapv2.Marker(
                    {
		position: new Tmapv2.LatLng(37.566519, 126.978122),
		map: map
	});	
    var polygon = new Tmapv2.Polygon({
        paths: [
            new Tmapv2.LatLng(37.566610,126.985666),
            new Tmapv2.LatLng(37.566595,126.985985),
            new Tmapv2.LatLng(37.566512,126.986071),
            new Tmapv2.LatLng(37.566397,126.985894),
            new Tmapv2.LatLng(37.566395,126.985664)
        ],
        fillColor:"pink", // 다각형 내부 색상
        map: map // 지도 객체
    });
        var marker1 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(35.180165, 129.075321), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker2 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(36.350383, 127.384625), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker3 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(35.892887, 128.60105), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker4 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(35.159598, 126.852293), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker5 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(35.539598, 129.316491), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker6 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(37.456185, 126.715336), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker7 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(37.270551, 127.007673), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker8 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(36.660121, 126.672491), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker9 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(36.635712, 127.491418), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker10 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(35.238239, 128.692798), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker11 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(36.57567, 128.505329), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker12 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(33.48881, 126.497946), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker13 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(37.881432, 127.730273), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker14 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(34.816774, 126.463968), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker15 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(35.819775, 127.108098), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
        var marker16 = new Tmapv2.Marker({
			position: new Tmapv2.LatLng(36.605659, 127.293908), //Marker의 중심좌표 설정.
			map: map //Marker가 표시될 Map 설정.
		});
	} 