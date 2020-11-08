$(function (){
    let introH = $('#intro').innerHeight();
    let header = $('#header');
    let scrollOffset = 0;

    // fixed header
    checkScroll(scrollOffset)

    $(window).on('scroll', function () {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll() {
        if (scrollOffset >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');

        }
    }

//    smooth scroll
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();
        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;
        $('#nav a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    });

// nav-toggle
    $('#nav-toggle').on('click', function (event){
        event.preventDefault();
        $('#nav').toggleClass('active');
        $(this).toggleClass('active');
    });

    //accordion
    $('[data-collapse]').on('click', function (event){
       event.preventDefault();
       let $this = $(this);
       $('.accordion__item').removeClass('active')
       $this.toggleClass('active');
    });


//slider
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow:1,
        slidesToScroll:1,
    });

});
