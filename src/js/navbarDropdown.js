// Show dropdown when clicked
$('#header-btn').on('click', function(e) {
    $('#header-menu').toggleClass('active');
    $('.nav-btn').toggleClass('active');
});

// Hide menu after clicking menu item
$('div .mobile-nav').on('click', function(e) {
     $('#header-menu').removeClass('active');
     $('.nav-btn').removeClass('active');
});