$('.filter-section__element .ui.checkbox').click(function(){
    $('.filter-section__element').removeClass('active');
    $(this).closest('.filter-section__element').toggleClass('active');
});