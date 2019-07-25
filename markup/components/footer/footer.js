$(document).on('click', '.footer__header', function(e) {
    var $this = $(this);
    if(!$this.hasClass('active')) {
        $('.footer__header').removeClass('active');
        $this.addClass('active');
        $this.closest('.footer__column-content').siblings('.footer__column-content').find('.footer__list').removeClass('active');
        $this.next().addClass('active');
    } else {
        $this.removeClass('active');
        $this.next().removeClass('active');
    }
});
