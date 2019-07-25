$(".lg-toolbar").append("<div class='headline'><input type='text' placeholder='Заголовок' class='head'></div>");
if (jQuery().lightGallery) {
    var $swiper = $('[rel="swiper"]');
    $swiper.lightGallery({
        thumbnail: true,
        closable: false,
        download: false,
        escKey: false,
        pager: false,
        zoom: false,
        dynamic: false,
        appendCounterTo: '.lg-thumb-outer ',
        selector: '.src',
    });
    
    $swiper.on('onAfterSlide.lg', function (event, index, fromTouch, fromThumb) {
        $('#top-left').show();
        $('#top-right').show();

        console.log('--- Композиция. Изменен слайд ---');
    });
    $swiper.on('onCloseAfter.lg', function (event, index, fromTouch, fromThumb) {
        $('#top-left').hide();
        $('#top-right').hide();
    });

    if (window.location.hash) {
        if ($('.swiper-global').length === 0) {
            var offerID = parseInt(window.location.hash.replace(/\D+/g, ""));

            $(".src[data-offer='" + offerID + "']").trigger('click');

        }
    }
}
if (window.location.hash) {
    if ($('.swiper-global').length === 0) {
        var offerID = parseInt(window.location.hash.replace(/\D+/g, ""));

        $(".src[data-offer='" + offerID + "']").trigger('click');

    }
}
$(".feedback--link").click(function(){
    $(".feedback--popup").modal('show');
    return false
});
$(".request--link").click(function(){
    $(".request--popup").modal('show');
    return false
});
$(".description.item").click(function(){
    return false
});
$(".product__share").click(function(){
    $(".product__share--popup").modal('show');
    return false
});

$('.composition--link').click(function(){
    $('.composition--modal').modal("show");
    return false;
});

$('.tovar--link').click(function(){
    $('.tovar--popup').modal("show");
    return false;
});

$('.ui.modal').not('.request--popup , .done-reg')
  .modal({
    allowMultiple: true
  })
;
$('.personal-date').click(function(){
    $('.promo-pers').modal("show");
    return false;
});
$('.done-reg-link').click(function(){
    $('.done-reg').modal("show");
    return false;
});


$('.basket--clear--link').click(function(){
    $('.basket--clear').modal("show");
    return false;
});
$('.basket--order--link').click(function(){
    $('.basket--order').modal("show");
    return false;
});

$('.composition--modal .modal__close').click(function(){
    $('.composition--modal').modal("hide");
    return false;
});
$('.product-card .ui.checkbox').click(function(){
    $(this).closest('.product-card').toggleClass('active');
});
$('.composition .ui.checkbox').click(function(){
    $(this).closest('.composition').toggleClass('active');
});
$('.composition--modal .modal__footer-content .modal__footer-cell.edit .button').click(function(){
    $('.modal__content').addClass("open");


    if($(this).text()=="СОХРАНИТЬ ВЫБОР")
        {
            $(this).text("Изменить состав комплекта");
            $('.modal__content').removeClass('open');
        } else {
            $(this).text("СОХРАНИТЬ ВЫБОР");
            $('.modal__content').addClass('open');
        }
})

function copyText() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    console.log('yes')
}

$(".button_copy").click(function(e) {
    e.preventDefault();
        if($(this).text()=="Копировать ссылку")
        {
            $(this).text("Cкопированно!");
        }
});
$(".spoler__head").click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('open');
});
