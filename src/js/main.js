$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        items: 6,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
    owl = $('.owl-carousel').owlCarousel();
    $(".prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".next").click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.fa-bars').click(function () {
        $('.nav').toggleClass("block");
        $('.logo').toggleClass("height")
    })

    function scrollwindow() {
        $(window).resize(function () {
            let windowWidth = $(window).width();
            if (windowWidth > 1100) {
                $('.nav').removeClass("block");
                $('.logo').removeClass("height")
            }
        })
    }
    scrollwindow();
    
    new WOW().init();

})