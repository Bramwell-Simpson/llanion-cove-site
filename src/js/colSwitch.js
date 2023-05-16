$(window).on('resize', function() {
    if($(window).width() > 1024) {
        $('#act-title').addClass('col-5');
        $('#act-title').removeClass('col-12');
        $('#act-desc').addClass('col-7');
        $('#act-desc').removeClass('col-12');
    }else{
        $('#act-title').addClass('col-12');
        $('#act-title').removeClass('col-5');
        $('#act-desc').addClass('col-12');
        $('#act-desc').removeClass('col-7');
    }
})