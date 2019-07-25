$('.block-container__navigation .button, .slider__navigation .slider__navigation-item').tab({
    context: $('.grid-categories')
});

$(".grid-categories .more").click(function(e) {
    e.preventDefault();
    if($(this).text()=="Скрыть")
    {
        $(this).text("Показать еще");
        $(this).removeClass('open');
        $('html,body').animate({scrollTop:$('.grid-categories ').offset().top+"px"},{duration:1E3});
    } else {
        $(this).text("Скрыть");
        $(this).addClass('open');
        
    }
    $('.grid-categories__tab').toggleClass('open-h');
});
$('.nav-item-1').on('click', function() {
    
  });