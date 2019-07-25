
$('.tabs__item')
.tab()
;
$(".factories__item").click(function () {
    $(".factories__item").removeClass("active");
    $(this).addClass("active");
    
});

$(".factories--link-open").click(function () {
    $(".factories.f-tabs").removeClass("active");
    $(".factories__item").removeClass("active");
    
    return false
});

$(document).ready(function(){
    $('.factories__item').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('rel');
    var factoriesHead = $('.factories-head').height() + $('.header-bottom').height() + 10; 

    if($(".header-bottom").is(":visible")){
        var factoriesHead = $('.factories-head').height() + $('.header-bottom').height() + 10; 
       
    }else{
        var factoriesHead = $('.factories-head').height() + 10; 
    }
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - factoriesHead }, 500); // анимируем скроолинг к элементу scroll_el
        }
        $(".factories.f-tabs").addClass("active");
        $(scroll_el).removeClass("active");
	    return false; // выключаем стандартное действие
    });
});
$(".tabs__item_acr").click(function() {
    $(".tabs_poduct .ui.tab").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();
    $(".tabs__item_acr").removeClass("active");
    $(this).addClass("active");
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});
$("body").on('click', '.tabs__item_acr', function(e){
    var fixed_offset = 62;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });