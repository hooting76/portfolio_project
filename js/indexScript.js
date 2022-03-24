let header_el = $('#header .header_inner li');

$(window).onload(function(){
    header_el.eq(0).css({left:0});
    header_el.eq(1).css({right:0});
});