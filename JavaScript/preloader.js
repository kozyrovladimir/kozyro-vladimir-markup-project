$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay().fadeOut('slow');
    $('body').delay().css({'overflow':'visible'});
})