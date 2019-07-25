$(".read-more").click(function(e) {
    e.preventDefault();
    var moreCont = $(this).attr("href");
    $('#'+moreCont).slideToggle();
    
        if($(this).text()=="Скрыть")
        {
            $(this).text("Читать полностью");
            $(this).removeClass('open');
            $('html,body').animate({scrollTop:$('.promo_type_main').offset().top+"px"},{duration:1E3});
        } else {
            $(this).text("Скрыть");
            $(this).addClass('open');
        }
        $(".ISProductBody").toggle(); 
            
});

$(document).ready(function(){
    if($(".promo_type_main").length) {
        var show = true;
        var countbox = ".promo_type_main";
        $(window).on("scroll load resize", function () {
            if (!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height();        // Высота окна браузера
            var d_height = $(document).height();      // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $(".spincrement").spincrement({
                    thousandSeparator: "",
                    duration: 2000
                });
                show = false;
            }
        });
    }
});
$(function(){
	$(".promo-order-link").click(function(){
        $(".promo-order-popup").modal('show');
        return false
    });
    $(".promo-offer-link").click(function(){
        $(".promo-offer-popup").modal('show');
        return false
	});
});

// external js: isotope.pkgd.js

$('.grid-photo').packery({
    itemSelector: '.grid-item',
    gutter: 0,
    percentPosition: true,
  
  });
  