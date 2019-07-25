$('.modal-full-link').click(function(){
    $('.modal-full').modal("show");
})

$('.modal__close.close').click(function(){
    $('.ui.modal').modal("hide");
    return false;
});
$('.promo-pers .modal__close').click(function(){
    $('.promo-pers').modal("hide");
    return false;
});

$('.loginModalLink').click(function(){
    $('.loginModal').modal('show')
    return false;
});
$('.doneModalLink').click(function(){
    $('.doneModal').modal('show')
    return false;
});
$('.clearHide').click(function(){
    $('.doneModal').modal('hide');
    $('.basket--clear').modal('hide');
    return false;
});

$('.regModalLink').click(function(){
    $('.regModal').modal('show')
    return false;
});
$('.VacanciesLink').click(function(){
    $('.VacanciesPopup').modal('show')
    return false;
});

$('.recoverModalLink').click(function(){
    $('.recoverModal').modal('show')
    return false;
});


$('.search-item--close').click(function(){
    $('.search__input').focus();
});



    function activeStickyKit() {
        $('[data-sticky_column]').stick_in_parent({
			parent: '[data-sticky_parent]',
			offset_top: 55
        });

        // bootstrap col position
        $('[data-sticky_column]')
        .on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        });

    };
    activeStickyKit();

    function detachStickyKit() {
        $('[data-sticky_column]').trigger("sticky_kit:detach");
    };

   
