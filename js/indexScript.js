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
        if(Math.ceil(+currentWidth)>=100){
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


// 지도표시 popup
$('.about_text_bot>p>a').click(function(){
    $('.map_frame').show();
});
$('.closeBtn').click(function(){
    $('.map_frame').hide();
});


// 포트폴리오 영역 슬라이드 작업
let banner = $('.port_idx>.port_slide>li');
let current = 0;
// 양쪽화살표버튼 불러오기
let port_slide_left_btn = $('.port_idx>.port_slide>a').eq(0);
let port_slide_right_btn = $('.port_idx>.port_slide>a').eq(1);
let port_list = $('.port_list>li');

// console.log(port_slide_left,port_slide_right); ok

// 양쪽화살표 관련
port_slide_left_btn.click(function(){
    current--;
    if(current ==-1) current=banner.size()-1;
    // console.log(current);

    let next = banner.eq(current);
    let next_list = port_list.eq(current);
    // console.log(next);

    port_list.find('a').removeClass('on');
    next_list.find('a').addClass('on');
    banner.removeClass('on');
    next.addClass('on');
});

port_slide_right_btn.click(function(){
    current++;
    if(current ==banner.size()) current=0;
    // console.log(current);

    let next = banner.eq(current);
    let next_list = port_list.eq(current);
    // console.log(next);
    port_list.find('a').removeClass('on');
    next_list.find('a').addClass('on');
    banner.removeClass('on');
    next.addClass('on');
});
// 화살표 끝.

// 슬라이드 상단 메뉴
port_list.click(function(){
    let tg = $(this);
    let i = tg.index();

    port_list.find('a').removeClass('on');
    tg.find('a').addClass('on');

    if(current>i){
        slideDotBtn1(i);
    }else{
        slideDotBtn2(i);
    }
});

function slideDotBtn1(i){
    // 현재랑 같다면 아무것도 안함.
    if(current==i) return;

    let currentEl = banner.eq(current);
    let nextEl = banner.eq(i);

    // console.log(nextEl);

    currentEl.removeClass('on');
    nextEl.addClass('on');
    current=i;
};

function slideDotBtn2(i){
    // 현재랑 같다면 아무것도 안함.
    if(current==i) return;

    let currentEl = banner.eq(current);
    let nextEl = banner.eq(i);

    currentEl.removeClass('on');
    nextEl.addClass('on');
    current=i;
};
// 슬라이드 상단메뉴 끝.


// 로드맵 클릭 이벤트
// let loadMapBtn = $('.way_point>a');

// loadMapBtn.click(function(){
//     let opValue = $(this).next().css('opacity');

//     // console.log(opValue); ok

//     if(opValue==0){
//         $(this).next().css('opacity',1);
//         $(this).parent().css('background','#bbb');
//     }
//     if(opValue==1){
//         $(this).next().css('opacity',0);
//         $(this).parent().css('background','#fff');
//     }
// })

// 클릭이벤트 끝.
// 로드맵 길이에 따른 opacity값 조절
// $(window).resize(function(){
//     windowResize();
// });

// function windowResize(){
//     winW=$(window).innerWidth();

//     if(winW<1401){
//         $('.way_point').not('.way_point1').find('.c_p_text').css('opacity',0);
//         $('.way_point').not('.way_point1').css('background','#fff');
//     }
//     if(winW>=1401){
//         $('.way_point').not('.way_point1').find('.c_p_text').css('opacity',1);
//         $('.way_point').not('.way_point1').css('background','#bbb');
//     }
// }

// 메뉴바 이동 애니메이트
$('.toAbout').click(function(){
    $('html, body').animate({scrollTop: $('#about').offset().top-120},800);
    $('#section>ul>li').removeClass('on');
    $(this).addClass('on');
});
$('.toSkill').click(function(){
    $('html, body').animate({scrollTop: $('#skill').offset().top-100},800);
    $('#section>ul>li').removeClass('on');
    $(this).addClass('on');
});
$('.toPortfolio').click(function(){
    $('html, body').animate({scrollTop: $('#portfolio').offset().top-95},800);
    $('#section>ul>li').removeClass('on');
    $(this).addClass('on');
});
$('.toContact').click(function(){
    $('html, body').animate({scrollTop: $('#contact').offset().top},800);
    $('#section>ul>li').removeClass('on');
    $(this).addClass('on');
});

// 메뉴바 스트롤값에 따라 상단 고정하기
let menu = $('#section>ul');
let contents = $('#section>ul>li');
let menuTop = menu.offset().top;

$(window).scroll(function(){
    if($(this).scrollTop() >= menuTop){
        menu.addClass('fixed');
        menu.stop().animate({height:'auto'},500,function(){
            return
        });
    }else{
        menu.removeClass('fixed');
        contents.removeClass('on');
    }
});

// 스크롤에 따라 해당컨텐츠의 버튼 색상 변경
$(window).scroll(function(){
    let sct=$(window).scrollTop();

    if($('#about').offset().top-120 <= sct){
        $('#section>ul>li').removeClass('on');
        $('.toAbout').addClass('on');
    }
    if($('#skill').offset().top-100 <= sct){
        $('#section>ul>li').removeClass('on');
        $('.toSkill').addClass('on');
    }
    if($('#portfolio').offset().top-100 <= sct){
        $('#section>ul>li').removeClass('on');
        $('.toPortfolio').addClass('on');
    }
    if(sct == $(document).height() - $(window).height()){

        $('#section>ul>li').removeClass('on');
        $('.toContact').addClass('on');
    }
});

// totop버튼
let topBtn = $('.toTop');
topBtn.click(function(){
    $('html, body').animate({scrollTop: $('#wrap').offset().top},800);
});

// 메인에서는 totop버튼 비활성화


$(window).scroll(function(){
    let sct=$(window).scrollTop();

    // console.log($('#main').offset().top); 

    if($('#main').offset().top==sct){
        topBtn.css('bottom','-30px');
    }else if($('#main').offset().top !== sct){
        topBtn.css('bottom','50px');
    }
});

