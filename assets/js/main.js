$(document).ready(function () {

    // Read more button
    $('#read-btn').click(function () {
        if ($('.visibility').is(":visible")) {
            $('#read-btn').text("Read More");
        } else {
            $('#read-btn').text("Show Less");
        }
        $('.visibility').toggle(600);
    });

    // Adjust header height
    var myHeader = $('.header');

    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
    });

    // Add active to navbar link 
    $('.links').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //Navbar change background on scroll
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".navbar-fixed-top").css("background-color", "rgb(76, 84, 98)");
        } else {
            $(".navbar-fixed-top").css("background-color", "transparent");
        }
    });
    //Set the carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });

});

// Nicescroll and remove horizontal scroll
jQuery(function () {
    'use strict';
    $('body').niceScroll({
        horizrailenabled: false
    });
});
