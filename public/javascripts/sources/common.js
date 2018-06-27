$(() => {
  AOS.init({
    duration: 600,
    disable: 'mobile'
  });

  $('.slick').slick({
    centerMode: true,
    centerPadding: '0px',
    centerMode: true,
    slidesToShow: 1,
    responsive: [
    {
    	breakpoint: 480,
    	settings: {
    		arrows: false,
    		dots: true
    	}
    }
    ]
  });
})