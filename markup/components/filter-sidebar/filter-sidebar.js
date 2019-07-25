if($('.filter-sidebar').length) {
    $('.filter-sidebar')
        .sidebar('setting', {
            defaultTransition: {
                computer: {
                    left: 'overlay',
                    right: 'overlay',
                    top: 'overlay',
                    bottom: 'overlay'
                },
                mobile: {
                    left: 'overlay',
                    right: 'overlay',
                    top: 'overlay',
                    bottom: 'overlay'
                }
            }
        })
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '.button_mod_mobile-filter');
}
