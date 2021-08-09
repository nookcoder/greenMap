
let companyData = require('./companyData');
const CONSTANT = require('./companyConstants'); 

const ASSIGNMENT_COMPANY = companyData.assignmentCompany; 
const TARGET_COMPANY = companyData.targetCompany;

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.433, 127.16), //지도의 중심좌표.
	level:11 //지도의 레벨(확대, 축소 정도)
};

map = new kakao.maps.Map(container, options);  


// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

var markers = [];
var customOverlaies = []; 

function drawMarker(company,type){
    geocoder.addressSearch(company.location,function(result,status){
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            
            // 마커를 생성합니다
            
            switch (type) {
                case CONSTANT.NORMAL:

                    // 커스텀 오버레이를 생성합니다
                    var contents = CONSTANT.setCustomOverlay(company.period,company.location,company.name,company.agency,company.designatedYear,company.sector,company.co2,company.energy,company.targetSector);
                    console.log(contents);
                    var customOverlay = new kakao.maps.InfoWindow({
                        content: contents,
                        removable : true
                    });

                    // 마커를 생성합니다 
                    var marker = new kakao.maps.Marker({
                        map : map , 
                        title : company.name,
                        position: coords
                    });        
                    break;
            
                case CONSTANT.AGENCY:
                    // 커스텀 오버레이를 생성합니다
                    var contents = CONSTANT.setCustomOverlay2(company.location,company.name,company.agency,company.designatedYear,company.sector,company.co2,company.energy,company.targetSector);
                    var customOverlay = new kakao.maps.InfoWindow({
                        content: contents,
                        removable : true
                    });
                
                    var imageSrc = '../../img/정부마크.png', // 마커이미지의 주소입니다    
                    imageSize = new kakao.maps.Size(55, 60), // 마커이미지의 크기입니다
                    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

                    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

                    // 마커를 생성합니다 
                    var marker = new kakao.maps.Marker({
                        map : map,
                        image: markerImage, // 마커이미지 설정 
                        title : company.name,
                        position: coords
                    }); 

                    break;

                default:
                    break;
            }

            // 지도에 마커를 표시합니다. 
            marker.setMap(map);

            // 마커로 배열을 만듭니다. 
            markers.push(marker);

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: '<div class="mark_title">' + company.name + '</div>'
            });

            // 마커에 마우스오버 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseover',function(){
                infowindow.open(map,marker);
            });

            // 마커에 마우스아웃 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseout',function(){
                infowindow.close();
            });

            // 클릭 시 오버레이가 생성됩니다. 
            kakao.maps.event.addListener(marker, 'click', function() {
                hideMarkers(customOverlaies); 
                customOverlaies.pop();
                customOverlay.open(map,marker); 
                map.setCenter(marker.getPosition());
                customOverlaies.push(customOverlay);
            });


        }
    })
}

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map,markers,type) {
    for (var i = markers.length-1; i >= 0; i--) {
        markers[i].setMap(map);
        if(type)
        {
            markers.pop();
        }
    }            
}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers(markers) {
    setMarkers(map,markers,false);    
}

function hideMarkers(markers) {
    setMarkers(null,markers,true);
}

$(function() {
    $('.target_company').on('change',function(e){
        let checking = $(this); 
        let checking_value = checking.val();  

        // for(let index=0;index<TARGET_COMPANY.length;index++){
        //     hideMarkers(markers);
        //     hideMarkers(customOverlaies);
        //     if(checking_value == TARGET_COMPANY[index].agency)
        //     {
        //         drawMarker(TARGET_COMPANY[index],CONSTANT.AGENCY);
        //     }
        //  }

         switch (checkSector(checking_value)) {
            case CONSTANT.YEAR:
                createMark(checking_value,TARGET_COMPANY,CONSTANT.YEAR);
                break;

            default:
                createMark(checking_value,TARGET_COMPANY,CONSTANT.AGENCYSECOTOR);
                break;
        }

    });

    $('.assignment_company').on('change',function(e){
        let checking = $(this); 
        let checking_value = checking.val(); 

        switch (checkSector(checking_value)) {
            case CONSTANT.PERIOD:
                createMark(checking_value,ASSIGNMENT_COMPANY,CONSTANT.PERIOD);
                break;
     
            case CONSTANT.YEAR:
                createMark(checking_value,ASSIGNMENT_COMPANY,CONSTANT.YEAR);
                break;

            case CONSTANT.SECTOR:
                createMark(checking_value,ASSIGNMENT_COMPANY,CONSTANT.SECTOR);
                break;
        }
        
    });
    
});

function checkSector(checking_value){
    if((new RegExp(CONSTANT.PERIOD_CHECK)).test(checking_value))
    {
        return CONSTANT.PERIOD;
    }
    else if((new RegExp(CONSTANT.YEAR_CHECK)).test(checking_value))
    {
        return CONSTANT.YEAR;
    }
    else{
        return CONSTANT.SECTOR;
    }
}

function createMark(checking_value,company,sector){
    hideMarkers(markers);
    hideMarkers(customOverlaies);
            
    if(sector == CONSTANT.PERIOD){
        for(let index=0;index<company.length;index++){
            if(checking_value == company[index].period)
            {
                drawMarker(company[index],CONSTANT.NORMAL);
            }
        }
    }

    else if(sector == CONSTANT.YEAR){
        for(let index=0;index<company.length;index++){
            if(checking_value == company[index].designatedYear)
            {
                drawMarker(company[index],CONSTANT.NORMAL);
            }
        }
    }

    else if(sector == CONSTANT.SECTOR){
        for(let index=0;index<company.length;index++){
            if(checking_value == company[index].targetSector)
            {
                drawMarker(company[index],CONSTANT.NORMAL);
            }
        }
    }

    else if(sector == CONSTANT.AGENCYSECOTOR)
    {
        for(let index=0;index<company.length;index++){
            if(checking_value == company[index].agency)
            {
                drawMarker(company[index],CONSTANT.AGENCY);
            }
        }
    }
}