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

// 해더 fadein
let header_el = $('#header ul li');

window.onload = function(){
    header_el.animate({opacity:1},3000);
};

