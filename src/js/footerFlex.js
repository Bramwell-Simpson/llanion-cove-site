$(window).on('resize', function() {
    if($(window).width() > 768) {
        // $('#footer-left').toggleClass("u-justify-flex-end");
        // $('#footer-right').toggleClass("u-justify-flex-start");

        //Center contact details without stacking
        $('#footer-left').addClass("u-justify-flex-end");
        $('#footer-right').addClass("u-justify-flex-start");
        $('#footer-left').removeClass("u-justify-center");
        $('#footer-right').removeClass("u-justify-center");
    }
    else {

        //Remove flex aligns to allow for stacked centering
        $('#footer-left').removeClass('u-justify-flex-end');
        $('#footer-right').removeClass("u-justify-flex-start");

        $('#footer-left').addClass("u-justify-center");
        $('#footer-right').addClass("u-justify-center");
    }
})