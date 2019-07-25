$(function () {
    setTimeout(function () {
        $('.slider__list_main').owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            smartSpeed: 500,
            navText: ['',''],
            autoplay:true,
            autoplayTimeout:10000,
            autoplayHoverPause:true,
            responsive : {
                0: {
                    autoWidth: false,
                    items: 1,
                    loop: true,
                    center: false,
                },
                1200: {
                    items: 1,
                    autoWidth: true,
                    stagePadding: 0,
                    margin: 0,
                    center: true,
                }
            }
        });
        $('.slider__list_vac').owlCarousel({
            dots: true,
            navText: ['',''],
            nav: true,
            responsive : {
                0: {
                    items: 1,
                },

                640: {
                    items: 2,
                },

                1024: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            }
        });
        $('.slider__list_card').owlCarousel({
            dots: true,
            navText: ['',''],
            nav: true,
            slideBy: 2, 
            responsive : {
                0: {
                    items: 1,
                    autoWidth: true
                },
                320: {
                    items: 1,
                    autoWidth: true
                },
                640: {
                    items: 2,
                    autoWidth: true
                },
                768: {
                    items: 3,
                    autoWidth: true
                },
                1024: {
                    items: 4,
                    autoWidth: true
                },
                1200: {
                    items: 4,
                },
            }
        });
        $('.slider__list_brand').owlCarousel({
            dots: true,
            nav:true,
            slideBy: 2, 
            responsive : {
                0: {
                    items: 1,
                    autoWidth: true,
                },
                320: {
                    items: 1,
                    autoWidth: true,
                },
                640: {
                    items: 3,
                    autoWidth: true,
                },
                768: {
                    items: 4,
                    autoWidth: true,
                },
                1024: {
                    items: 5,
                },
                1200: {
                    items: 6,
                },
            }
        });
        $('.slider__list_entry').owlCarousel({
            dots: true,
            nav:true,
            slideBy: 2, 
            navText: ['',''],
            responsive : {
                0: {
                    items: 1,
                    autoWidth: true,
                },
                640: {
                    items: 2,
                    autoWidth: true,
                },
                768: {
                    items: 3,
                    autoWidth: true,
                },
                1024: {
                    items: 3,
                    autoWidth: true,
                },
                1200: {
                    items: 3,
                },
            }
        });
    },100);
    $(document).ready(function() {

        var sync1 = $(".sync1");
        var sync2 = $("#sync2");
        var slidesPerPage = 6; //globaly define number of elements per page
        var syncedSecondary = true;

        sync1.owlCarousel({
            items : 1,
            slideSpeed : 200,
            autoplay: false,
            dots: false,
            loop: false,
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin: 0,
            navText: ['',''],
        }).on('changed.owl.carousel', syncPosition);
        sync2
            .on('initialized.owl.carousel', function () {
                sync2.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items : slidesPerPage,
                dots: false,
                nav: true,
                smartSpeed: 200,
                slideSpeed : 500,
                margin: 10,
                slideBy: 2, 
                slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate : 100,
                responsive:{
                    0:{
                        items: 4
                    },

                    768:{
                        items: 5
                    },
                    1200:{
                        items: 6
                    }
                }
            }).on('changed.owl.carousel', syncPosition2);
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;

            //if you disable loop you have to comment this block
            var count = el.item.count-1;
            var current = Math.round(el.item.index - (el.item.count/2) - .5);

            if(current < 0) {
                current = count;
            }
            if(current > count) {
                current = 0;
            }

            //end block

            sync2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();

            if (current > end) {
                sync2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                sync2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }
        function syncPosition2(el) {
            if(syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
        sync2.on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).index();
            sync1.data('owl.carousel').to(number, 300, true);
        });
    });
});
setTimeout(function(){
    $('.sync1').trigger('refresh.owl.carousel');
}, 500)

