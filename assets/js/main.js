jQuery(document).ready(function () {
  /*isotop portfolio menu*/
  // init Isotope
  var $grid = $('.portfolio__active').isotope({
    // options
  });
  $('.portfolio__menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  /*counter for fact area*/
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

  // brand owl carousel activation
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:4,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  });
// slick slider
$('.single-item').slick({
  autoplay: true,
  fade: true,
});
});

