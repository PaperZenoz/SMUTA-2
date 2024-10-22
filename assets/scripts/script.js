$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {
    $('.main-slider').slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        lazyLoad: 'ondemand'
    })


    $('.information-slider').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })


    $('.travelling-slider').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        focusOnSelect: true
    })


    function header() {
        $('.header__mobile-button').on('click', function (e) {
            e.preventDefault()
            $('.header__nav').toggleClass('open')
            $(this).toggleClass('open')
        })

    }

    function history_line() {
        $('.history__title').on('click', function (e) {
            e.preventDefault()
            var $parent = $(this).parent()

            if (!$parent.hasClass('open')) {
                $parent.addClass('open')
                $(this).siblings('.history__text').slideDown()

            } else {
                $parent.removeClass('open')
                $(this).siblings('.history__text').slideUp()
                return false
            }
        })

        $('.history__more').on('click', function (e) {
            e.preventDefault()
            $('.history__item.hide').fadeIn()
            $(this).hide()
        })
    }

    function symbols() {
        var $content = $('.symbols-slider__content'),
            $more = $('.symbols-slider__more')

        $('.symbols-slider').slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            centerMode: false
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $content.removeClass('show')
            $more.show()
        })


        $('body').on('click', '.symbols-slider__more', function (e) {
            e.preventDefault()
            $content.addClass('show')
            $more.hide()
        });
    }


    history_line()
    symbols()
    header()

})
