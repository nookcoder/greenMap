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

let radio_a = document.getElementById('a');
let radio_b = document.getElementById('b');
let radio_c = document.getElementById('c');
let radio_d = document.getElementById('d');
let radio_e = document.getElementById('e');
let radio_f = document.getElementById('f');

let radio_1_1 = document.getElementById('under_5');
let radio_1_2 = document.getElementById('under_9');
let radio_2_1 = document.getElementById('under_19');
let radio_3_1 = document.getElementById('under_99');
let radio_4_1 = document.getElementById('up_100');

function initTmap(){
  radio_1_1.addEventListener('click', function(){
    removeOverlay();  
    asdf_seoul();
    asdf_busan();
    asdf_daegu();
    asdf_incheon();
    asdf_gwangju();
    asdf_daejeon();
    asdf_ulsan();
    asdf_sejong();
    asdf_gyeonggi();
    asdf_gangwon();
    asdf_chungbuk();
    asdf_chungnam();
    asdf_jeonbuk();
    asdf_jeonnam();
    asdf_gyeongbuk();
    asdf_gyeongnam();
    asdf_jeju();     
})

radio_1_2.addEventListener('click', function(){
  removeOverlay();  
  asdf_seoul2();
  asdf_busan2();
  asdf_daegu2();
  asdf_incheon2();
  asdf_gwangju2();
  asdf_daejeon2();
  asdf_ulsan2();
  asdf_sejong2();
  asdf_gyeonggi2();
  asdf_gangwon2();
  asdf_chungbuk2();
  asdf_chungnam2();
  asdf_jeonbuk2();
  asdf_jeonnam2();
  asdf_gyeongbuk2();
  asdf_gyeongnam2();
  asdf_jeju2();     
})

radio_2_1.addEventListener('click', function(){
  removeOverlay();  
    asdf_seoul5();
    asdf_busan5();
    asdf_daegu5();
    asdf_incheon5();
    asdf_gwangju5();
    asdf_daejeon5();
    asdf_ulsan5();
    asdf_gyeonggi5();
    asdf_gangwon5();
    asdf_chungbuk5();
    asdf_chungnam5();
    asdf_jeonbuk5();
    asdf_jeonnam5();
    asdf_gyeongbuk5();
    asdf_gyeongnam5();
})


radio_3_1.addEventListener('click', function(){
  removeOverlay();  
    asdf_seoul3();
    asdf_busan3();
    asdf_daegu3();
    asdf_incheon3();
    asdf_gwangju3();
    asdf_daejeon3();
    asdf_ulsan3();
    asdf_gyeonggi3();
    asdf_gangwon3();
    asdf_chungbuk3();
    asdf_chungnam3();
    asdf_jeonbuk3();
    asdf_jeonnam3();
    asdf_gyeongbuk3();
    asdf_gyeongnam3();
    asdf_jeju3();          
})

radio_4_1.addEventListener('click', function(){
  removeOverlay();  
    asdf_seoul4();
    asdf_busan4();
    asdf_daegu4();
    asdf_incheon4();
    asdf_gwangju4();
    asdf_daejeon4();
    asdf_ulsan4();
    asdf_sejong4();
    asdf_gyeonggi4();
    asdf_gangwon4();
          
})

    radio_a.addEventListener('click', function(){
      removeOverlay();  
      fuel_seoul();
      fuel_busan();
      fuel_daegu();
      fuel_incheon();
      fuel_gwangju();
      fuel_daejeon();
      fuel_ulsan();
      fuel_sejong();
      fuel_gyeonggi();
      fuel_gangwon();
      fuel_chungbuk();
      fuel_chungnam();
      fuel_jeonbuk();
      fuel_jeonnam();
      fuel_gyeongbuk();
      fuel_gyeongnam();
      fuel_jeju();     
  })

  
    radio_b.addEventListener('click', function(){
      removeOverlay();  
      fuel_seoul2();
      fuel_busan2();
      fuel_daegu2();
      fuel_incheon2();
      fuel_gwangju2();
      fuel_daejeon2();
      fuel_ulsan2();
      fuel_sejong2();
      fuel_gyeonggi2();
      fuel_gangwon2();
      fuel_chungbuk2();
      fuel_chungnam2();
      fuel_jeonbuk2();
      fuel_jeonnam2();
      fuel_gyeongbuk2();
      fuel_gyeongnam2();
      fuel_jeju2();    
  })

    radio_c.addEventListener('click', function(){
      removeOverlay();  
      fuel_seoul3();
      fuel_busan3();
      fuel_daegu3();
      fuel_incheon3();
      fuel_gwangju3();
      fuel_daejeon3();
      fuel_ulsan3();
      fuel_sejong3();
      fuel_gyeonggi3();
      fuel_gangwon3();
      fuel_chungbuk3();
      fuel_chungnam3();
      fuel_jeonbuk3();
      fuel_jeonnam3();
      fuel_gyeongbuk3();
      fuel_gyeongnam3();
      fuel_jeju3();    
  })

    radio_d.addEventListener('click', function(){
      removeOverlay();  
      fuel_seoul4();
      fuel_busan4();
      fuel_daegu4();
      fuel_incheon4();
      fuel_gwangju4();
      fuel_daejeon4();
      fuel_ulsan4();
      fuel_sejong4();
      fuel_gyeonggi4();
      fuel_gangwon4();
      fuel_chungbuk4();
      fuel_chungnam4();
      fuel_jeonbuk4();
      fuel_jeonnam4();
      fuel_gyeongbuk4();
      fuel_gyeongnam4();
      fuel_jeju4();    
  })

    radio_e.addEventListener('click', function(){
      removeOverlay();  
      fuel_seoul5();
      fuel_busan5();
      fuel_daegu5();
      fuel_incheon5();
      fuel_gwangju5();
      fuel_daejeon5();
      fuel_ulsan5();
      fuel_sejong5();
      fuel_gyeonggi5();
      fuel_gangwon5();
      fuel_chungbuk5();
      fuel_chungnam5();
      fuel_jeonbuk5();
      fuel_jeonnam5();
      fuel_gyeongbuk5();
      fuel_gyeongnam5();
      fuel_jeju5();    
  })

    radio_f.addEventListener('click', function(){
      removeOverlay();  
      fuel_seoul6();
      fuel_busan6();
      fuel_daegu6();
      fuel_incheon6();
      fuel_gwangju6();
      fuel_daejeon6();
      fuel_ulsan6();
      fuel_sejong6();
      fuel_gyeonggi6();
      fuel_gangwon6();
      fuel_chungbuk6();
      fuel_chungnam6();
      fuel_jeonbuk6();
      fuel_jeonnam6();
      fuel_gyeongbuk6();
      fuel_gyeongnam6();
      fuel_jeju6();    
  })
  
    radio_2019.addEventListener('click', function(){
      removeOverlay();  
      circle_seoul9();
      circle_busan9();
      circle_daegu9();
      circle_incheon9();
      circle_gwangju9();
      circle_daejeon9();
      circle_ulsan9();
      circle_sejong9();
      circle_gyeonggi9();
      circle_gangwon9();
      circle_chungbuk9();
      circle_chungnam9();
      circle_jeonbuk9();
      circle_jeonnam9();
      circle_gyeongbuk9();
      circle_gyeongnam9();
      circle_jeju9();
    })

    

    radio_2018.addEventListener('click', function(){ 
      removeOverlay();  
      circle_seoul8();
      circle_busan8();
      circle_daegu8();
      circle_incheon8();
      circle_gwangju8();
      circle_daejeon8();
      circle_ulsan8();
      circle_sejong8();
      circle_gyeonggi8();
      circle_gangwon8();
      circle_chungbuk8();
      circle_chungnam8();
      circle_jeonbuk8();
      circle_jeonnam8();
      circle_gyeongbuk8();
      circle_gyeongnam8();
      circle_jeju8();
    })

    radio_2017.addEventListener('click', function(){
      removeOverlay();  
      circle_seoul7();
      circle_busan7();
      circle_daegu7();
      circle_incheon7();
      circle_gwangju7();
      circle_daejeon7();
      circle_ulsan7();
      circle_sejong7();
      circle_gyeonggi7();
      circle_gangwon7();
      circle_chungbuk7();
      circle_chungnam7();
      circle_jeonbuk7();
      circle_jeonnam7();
      circle_gyeongbuk7();
      circle_gyeongnam7();
      circle_jeju7();
    })
    radio_2016.addEventListener('click', function(){
      removeOverlay();  
      circle_seoul6();
      circle_busan6();
      circle_daegu6();
      circle_incheon6();
      circle_gwangju6();
      circle_daejeon6();
      circle_ulsan6();
      circle_sejong6();
      circle_gyeonggi6();
      circle_gangwon6();
      circle_chungbuk6();
      circle_chungnam6();
      circle_jeonbuk6();
      circle_jeonnam6();
      circle_gyeongbuk6();
      circle_gyeongnam6();
      circle_jeju6();
    })

    radio_2015.addEventListener('click', function(){ 
      removeOverlay();  
      circle_seoul5();
      circle_busan5();
      circle_daegu5();
      circle_incheon5();
      circle_gwangju5();
      circle_daejeon5();
      circle_ulsan5();
      circle_sejong5();
      circle_gyeonggi5();
      circle_gangwon5();
      circle_chungbuk5();
      circle_chungnam5();
      circle_jeonbuk5();
      circle_jeonnam5();
      circle_gyeongbuk5();
      circle_gyeongnam5();
      circle_jeju5();
    })

  

    radio_2014.addEventListener("click", function (){
      removeOverlay();  
      circle_seoul4();
      circle_busan4();
      circle_daegu4();
      circle_incheon4();
      circle_gwangju4();
      circle_daejeon4();
      circle_ulsan4();
      circle_sejong4();
      circle_gyeonggi4();
      circle_gangwon4();
      circle_chungbuk4();
      circle_chungnam4();
      circle_jeonbuk4();
      circle_jeonnam4();
      circle_gyeongbuk4();
      circle_gyeongnam4();
      circle_jeju4();
    })
    radio_2013.addEventListener('click', function(){
      removeOverlay();  
      circle_seoul3();
      circle_busan3();
      circle_daegu3();
      circle_incheon3();
      circle_gwangju3();
      circle_daejeon3();
      circle_ulsan3();
      circle_sejong3();
      circle_gyeonggi3();
      circle_gangwon3();
      circle_chungbuk3();
      circle_chungnam3();
      circle_jeonbuk3();
      circle_jeonnam3();
      circle_gyeongbuk3();
      circle_gyeongnam3();
      circle_jeju3();
    })

    radio_2012.addEventListener('click', function(){
      removeOverlay();  
      circle_seoul2();
      circle_busan2();
      circle_daegu2();
      circle_incheon2();
      circle_gwangju2();
      circle_daejeon2();
      circle_ulsan2();
      circle_sejong2();
      circle_gyeonggi2();
      circle_gangwon2();
      circle_chungbuk2();
      circle_chungnam2();
      circle_jeonbuk2();
      circle_jeonnam2();
      circle_gyeongbuk2();
      circle_gyeongnam2();
      circle_jeju2();
    })

    radio_2011.addEventListener('click', function(){
      removeOverlay();  
      circle_seoul();
      circle_busan();
      circle_daegu();
      circle_incheon();
      circle_gwangju();
      circle_daejeon();
      circle_ulsan();
      circle_sejong();
      circle_gyeonggi();
      circle_gangwon();
      circle_chungbuk();
      circle_chungnam();
      circle_jeonbuk();
      circle_jeonnam();
      circle_gyeongbuk();
      circle_gyeongnam();
      circle_jeju();
    })
} 
