// 로딩화면
$('.progress_bar').each(function () {
    let progressWrap = $(this),
        progressBar = progressWrap.find('.bar'),
        progressText = progressWrap.find('.num'),
        progressNum = progressText.attr('data-num');

    progressBar.animate({ width: progressNum + "%" }, 2000);

    setInterval(textAni, 100);
    function textAni() {
        let currentWidth = progressBar.width() / progressWrap.width() * 100;
        progressText.text('로딩중 '+Math.ceil(+currentWidth) + "%");

        // console.log(currentWidth);
        if(currentWidth==100){
            progressText.text('완료!')
            setTimeout(function(){
                $('.loading').css('transform','scale(0)');
            },800)          
        }
    };
    // 로딩화면 스크롤 고정
    $('.loading').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
});

// 해더 fadein효과
let header_el = $('#header ul li');

setTimeout(function(){
    header_el.animate({opacity:1},1000);
},3000)

// 더보기 plus버튼
let plusBtn = $('#wrap #main .main_inner .main_text .mini_menu .plus');
let line1 = plusBtn.find('.line1');
let line2 = plusBtn.find('.line2');

// console.log(menuWidth);
plusBtn.click(function(){
    // console.log(menuWidth);
    if($('.mini_menu').css('width') =="40px"){
        line1.css('transform','rotate(45deg)');
        line2.css('transform','rotate(135deg)');
        $('.mini_menu').css('width','150px');
    }
    else if($('.mini_menu').css('width') == "150px"){
        line1.css('transform','rotate(90deg)');
        line2.css('transform','rotate(0)');
        $('.mini_menu').css('width','40px');
    }
})

// 배너 텍스트 효과
let bannerText = $('.main_text h1');
setTimeout(function(){
    bannerText.css('margin-right','0').css('opacity','1');
},3000);

//전구 색상 효과
let bulb = $('.fa-lightbulb');
setTimeout(function(){
    bulb.css('color',"#e3dc4e");
},5000);


// about메뉴 관련
let leftBtn = $('.arr_area>a>.fa-angle-left');
let rightBtn = $('.arr_area>a>.fa-angle-right');

leftBtn.click(function(){
    let prevIdx = $('.about_photo img.active').index();
    let rightText = $('.about_right_text');

    // console.log(prevIdx);
    $('.about_photo img').removeClass('active');
    rightText.removeClass('active');

    let nextIdx = prevIdx-1;
    if(nextIdx== -1) nextIdx=1;
    // console.log(nextIdx);

    $('.about_photo img').eq(nextIdx).addClass('active');
    rightText.eq(nextIdx).addClass('active');
});


rightBtn.click(function(){
    let prevIdx = $('.about_photo img.active').index();
    let rightText = $('.about_right_text');

    // console.log(prevIdx);
    $('.about_photo img').removeClass('active');
    rightText.removeClass('active');

    let nextIdx = prevIdx+1;
    if(nextIdx== 2) nextIdx=0;
    // console.log(nextIdx);

    $('.about_photo img').eq(nextIdx).addClass('active');
    rightText.eq(nextIdx).addClass('active');
});

// 지도api
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.16351442943923, 127.06035386912332), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition = new kakao.maps.LatLng(37.16351442943923, 127.06035386912332); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 마커가 드래그 가능하도록 설정합니다 
marker.setDraggable(false); 