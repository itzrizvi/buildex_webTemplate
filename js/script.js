jQuery(document).ready(function($){

    $('.drop-search').click(function(){
        $('ul.drop-down-search').slideToggle();
    });

    $('.mobile-menu span.bars').click(function(){
        $('.mobile-menu ul').slideToggle();
    });

    $('.banner-slider').owlCarousel({
        loop:true,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
    });

    $('.testimonial-sl').owlCarousel({
        loop:true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            1000:{
                items:2
            }
        },
        autoplay: true,
    });
    $('.client-slide').owlCarousel({
        loop:true,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            767:{
                items:3
            },
            950:{
                items: 3
            },
            1000:{
                items:4
            }
        },
        autoplay: true,
    });

    $('.video-play-btn').magnificPopup({
        type: 'video',
    });


    $('.project-filter li').on('click', function(){


        $('.project-filter li').removeClass('active');
        $(this).addClass('active');

        var slctr = $(this).attr('data-filter');
        
        $('.project-list').isotope({
            filter: slctr,
        });

    });

    $('.project-list').isotope();



    $('.counter').counterUp({
        delay: 50,
        time: 4000,
    });

    $('.call-one-btn a').click(function(){
        $('.slide-content h2').addClass('text-change');
        $('.slide-content p').addClass('text-change');
        $('.slide-content a').addClass('background-change');
        $('section.call-to-action-one').addClass('background-change');
    });

    

});