$(document).ready(function() {
    $('.navigation__menu-item').click(function () {
        $('.navigation ul').slideToggle();
    });
});
$(window).resize(function() {
    if ($(window).width() > 960) {
        $('.navigation ul').removeAttr();
    }
})

$(document).ready(function(){
    $("header").removeClass("fix-header-big");
    $(window).scroll(function(){
        if  (($(this).scrollTop() > 20) && ($(window).width() > 960)) {
            $("header").addClass("fix-header-big").fadeIn('fast');
        } else {
            $("header").removeClass("fix-header-big").fadeIn('fast');
        };
    });
});