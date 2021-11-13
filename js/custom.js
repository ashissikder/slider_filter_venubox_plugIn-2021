
$(document).ready(function(){
    // scrolling
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 500){
            $('.scroll').fadeIn();
        }else{
            $('.scroll').fadeOut();
        }

         // menu slider
        if(scrolling>200){
            $('.menu-bg').addClass('fixed');
        }else{
            $('.menu-bg').removeClass('fixed');
        }
    });
    $('.scroll').on('click', function(){
        $('html,body').animate({
            scrollTop:"0px",
        })
    });

    // banner slider
    $('.banner-bg').slick({
        prevArrow:'<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next next-arrow"></i>',
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    // person feedback slider
    $('.person-slider').slick({
        arrows:false,
        autoplay:true,
        asNavFor:'.image-slider',
    });

    $('.image-slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:3,
        centerMode:true,
        autoplay:true,
        centerPadding:'0px',
        asNavFor:'.person-slider',
    });
    // gallery-menu active
    $('.gallery-menu ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    // gallery-filter
    var mixer = mixitup('.gallery-image');

    //gallery hover direction
    $('.image').directionalHover({
        overlay:"overlay",
        easing:"swing",
        speed: 400,
    });


    // gallery pop-up
    $('.venobox').venobox({
        arrowsColor:'#fd7e14',
        closeColor:'#d22222',
        framewidth:'500px',
        frameheight:'400px',
        spinner:'wandering-cubes',
        spinColor:'#fd7e14',
    });
    // video pop-up
    $('.venobox_custom').venobox({
        closeColor:'#d22222',
        framewidth:'900px',
        frameheight:'500px',
        spinner:'wave',
        spinColor:'#d22222',
    }); 

    // nav-underline

    $('.menu ul li a').on('click', function(){
        $('.menu ul li').addClass('current');
    })

});