$(window).on('resize', function() {
    if((window).Width() < 768) {
        $('#footer-left').toggleClass("u-justify-flex-end");
        $('#footer-right').toggleClass("u-justify-flex-start");
    }
    else {
        $('#footer-left').toggleClass('u-justify-flex-end');
        $('#footer-right').toggleClass("u-justify-flex-start");
    }
})