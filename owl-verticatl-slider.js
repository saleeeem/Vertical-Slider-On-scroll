$(document).ready(function(){
    var owl = $('.banner-content');

    owl.owlCarousel({
        loop: true,
		//rtl: true,
        margin: 10,
        items: 1,
        nav: false,
		dots: false,
        //animateOut: 'slideOutUp',
        animateOut: 'fadeOut',
		   smartSpeed: 9950
    });

	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			//owl.trigger('next.owl');
		} else {
			if( !isLastSlide() ){
				owl.trigger('prev.owl');
				
				e.preventDefault();
			}
		}
		
	});

	function isLastSlide() {
        return owl.find('.owl-item.active').index() === owl.find('.owl-item').length - 4;
    }
   
});
