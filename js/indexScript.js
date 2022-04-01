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


