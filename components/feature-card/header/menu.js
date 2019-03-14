$(document).ready(function() {
    $('.navigation__menu-item').click(function () {
        $('.navigation ul').slideToggle(960);
    });
});
$(window).resize(function() {
    if ($(window).width() > 960) {
        $('.navigation ul').removeAttr('style');
    }
})