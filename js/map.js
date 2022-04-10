// 지도표시 popup
$('.about_text_bot>p>a').click(function(){
    $('.map_frame').show();
});
$('.closeBtn').click(function(){
    $('.map_frame').hide();
});


// 지도api
let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.16351442943923, 127.06035386912332), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
let markerPosition = new kakao.maps.LatLng(37.16351442943923, 127.06035386912332); 

// 마커를 생성합니다
let marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 마커가 드래그 가능하도록 설정합니다 
marker.setDraggable(true); 