'use strict';
$('.ui.dropdown').dropdown({
    on:'hover',
    allowCategorySelection: true
});

$('.header-bottom__box').sticky({
    context: '.main'
});

$('.header-bottom .item.cart').popup({
    popup: $('.cart.popup'),
    closable: true,
    position: 'bottom right',
    scrollContext: window,
    hideOnScroll: true,
    lastResort: 'bottom right',
    on: 'click'
});
if(window.innerWidth > 767) {
        $('.description.item').popup({
            popup: $('.description.popup'),
            closable: true,
            position: 'bottom right',
            scrollContext: window,
            hideOnScroll: true,
            lastResort: 'bottom right',
            on: 'click',
        });
}

$('.description.item').click(function(){
    if(window.innerWidth < 767)
        $('.modal-description').modal("show");
});
$('.modalSearch--link').click(function(){
    if(window.innerWidth < 767)
        $('.modalSearch').modal("show");
        return false
});
$('.header__icon-box_cart').click(function(){
    if(window.innerWidth < 767)
        $('.modalBasket').modal("show");
        return false
});
$('.header__icon-box_cart').popup({
    popup: $('.cart.popup'),
    hideOnScroll: true,
    position: 'bottom center',
    lastResort: 'bottom center',
    on: 'manual'
});

$('.header-main__right .header__phone .icon').popup({
    popup: $('.phone.popup'),
    position: 'bottom right',
    lastResort: 'bottom right',
    on: 'manual'
});
$(document).on('click','.header-cart__close',function (e) {
    $('.cart.popup').popup('hide all');
    
    $('.modalBasket').modal('hide');
});
$(document).on('click','.bg--cart',function (e) {
    $('.cart.popup').popup('hide all');
    $('.modalBasket').modal('hide');
});
$(document).on('click','.clearHide',function (e) {
    $('.basket--clear').modal('hide');
});

$(document).on('click','.header-main__right .header__phone .icon',function (e) {
    if(window.innerWidth < 768)
        $('.header-main__right .header__phone .icon').popup('show');
});


$('.ui.search').search();
$(".fixed-search__btn").on("click", function (e) {
    e.preventDefault();
    var search_length = $('.fixed-search__input').val();
    if ($(".fixed-search__input").hasClass('focus') && search_length.length != 0 || search_length.length != 0) {

    } else {
        $(".fixed-search__input").addClass('focus');
        $(".fixed-search__input").focus();
    }
});

$(function ($) {
    $(document).mouseup(function (e) {
        var div = $(".sr-search");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".sr-search__input").blur();
            $(".sr-search__input").removeClass('focus');
            $(".sr-search__input").val("");
        }
    });
});

$(window).scroll(function () {
    $(".fixed-search__input").blur();
    $(".fixed-search__input").removeClass('focus');
    $(".fixed-search__input").val("");
    $(".cart").popup('hide')
});

$('#modal-link').click(function(){
    $('.modal-menu').modal("show");
})
$('.modal--req-link').click(function(){
    $('.modal--req').modal("show");
})

$('.header__phone').click(function(){
    if(window.innerWidth < 768)
    $('.modal-phone').modal("show");
})


$('.fixed-search__input').focusout(function(){
    $(this).val('');
  });

  let btn = document.querySelector('[rel=scrolltop]');

  window.onscroll = magic;

  function magic() {
      if (window.pageYOffset > 20) {
      btn.style.opacity = '1';
    } else { btn.style.opacity = '0'; }
}	






function getBrowserWidth() {
    if (self.innerWidth) {
        return self.innerWidth;
    }

    if (document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth;
    }

    if (document.body) {
        return document.body.clientWidth;
    }
}

function calculateRhombuses() {
    var container = document.querySelector('.c-rhombus');

    if (typeof (container) != 'undefined' && container != null) {
        var browserWidth = getBrowserWidth();

        if (container.getAttribute('data-width') * 1 === browserWidth * 1) return false;
        container.setAttribute('data-width', browserWidth);

        var type = (browserWidth > 500) ? 'desktop' : 'mobile',
            columns = (type === 'desktop') ? 3 : 2,
            rhombs = Array.from(document.querySelectorAll('.c-rhombus .item')),
            rhombWidth = container.offsetWidth / columns,
            realRhombWidth = rhombWidth / 1.41;
        if (type === 'mobile') realRhombWidth = rhombWidth / 1.35;


        container.style.marginLeft = rhombWidth / 2 + 'px';
        container.style.marginRight = rhombWidth / 2 + 'px';
        container.style.marginTop = realRhombWidth / 4 + 'px';

        if (type === 'desktop') {
            container.style.height = rhombWidth * 1.9 + 'px';
            container.style.marginLeft = (-1) * (realRhombWidth / 3) + 'px';
            container.style.marginRight = rhombWidth / 2 + 'px';
        } else {
            container.style.height = rhombWidth * 4 + 'px';
            container.style.marginLeft = realRhombWidth / 2.6 + 'px';
            container.style.marginRight = realRhombWidth / 2 + 'px';
        }

        rhombs.forEach((rhomb, i) => {

            rhomb.style.width = realRhombWidth + 'px';
            var row = Math.floor(((i + 1) - 0.01) / columns),
                col = (i + 1) - (row * columns);

            // расчет top
            if (type === 'desktop') {
                // padding
                rhomb.style.top = rhombWidth * 1.1 / 2 * row + 'px';
                // rhomb.style.top = rhombWidth / 2 * row + 'px';
                rhomb.style.display = 'block';
            } else {
                rhomb.style.top = (rhombWidth * 1.1 / 2) * i + 'px';
                // if (i > 5) rhomb.style.display = 'none';
            }

            // расчет left
            var left = 0;
            if (type === 'desktop') {
                if (col === 2) left = rhombWidth;
                else if (col === 3) left = 2 * rhombWidth;

                if ((row + 1) % 2 === 0) {
                    left = left + rhombWidth / 2;
                }

                // padding
                left *= 1.1;
            } else {
                if (col === 2) left = realRhombWidth - realRhombWidth * 0.1;
            }
            rhomb.style.left = left + 'px';

        });
    }
}


calculateRhombuses();
window.addEventListener("resize", calculateRhombuses);
$('#container').jstree({});

  if (document.querySelectorAll('#map').length) {

    var isMobile = window.innerWidth < 768 ? true : false,
        myZoom = 14,
        center = [55.670021, 37.552480],
        centerTwo= [55.702830, 37.355722],
        myEvents,
        myControls;

    if(isMobile) {
        myEvents = ['searchControl', 'drag', 'scrollZoom', 'rightMouseButtonMagnifier'];
        myControls = [];
    } else {
        myEvents = ['searchControl', 'scrollZoom', 'rightMouseButtonMagnifier'];
        myControls = ['zoomControl'];
    }

    ymaps.ready(initMap);

    function initMap() {
        var myMap = new ymaps.Map("map", {
            center: center,
            zoom: myZoom,
            controls: myControls
        });
        myMap.behaviors.disable(myEvents);
        var myPlacemark = new ymaps.Placemark(
            center,
            {},
            {
                iconLayout: 'default#image',
                iconImageHref: '../static/img/assets/catalog/map.png', // картинка иконки
                iconImageSize:  [50, 60], // размер иконки
            }
        );
        var myPlacemark2 = new ymaps.Placemark(
            centerTwo,
            {},
            {
                iconLayout: 'default#image',
                iconImageHref: '../static/img/assets/catalog/map.png', // картинка иконки
                iconImageSize:  [50, 60], // размер иконки
            }
        );
        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark2);
    }
}


$(function() {
 
    (function quantityProducts() {
      var $quantityArrowMinus = $(".minus");
      var $quantityArrowPlus = $(".plus");
      var $quantityNum = $(".qty");
   
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);
   
      function quantityMinus() {
        if ($quantityNum.val() > 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }
   
      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    })();
   
  });