import "all.scss";
import "vendor/noframework.waypoints.min.js"
import "vendor/ScrollMagic.min.js"

$(function() {
  (function($) {

    // var waypoint = new Waypoint({
    //   element: document.getElementById('about'),
    //   handler: function(direction) {

    //       $('.half-background').addClass('slide-left');


    //   },
    //   offset: '-100%'
    // })


    // Wipes
    // var controller = new ScrollMagic.Controller({
    //   globalSceneOptions: {
    //     triggerHook: 'onLeave'
    //   }
    // });

    // // get all slides
    // var slides = document.querySelectorAll("section.panel");

    // // create scene for every slide
    // for (var i=0; i<slides.length; i++) {
    //   new ScrollMagic.Scene({
    //       triggerElement: slides[i]
    //     })
    //     .setPin(slides[i])
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
    // }

    // // Show and hide modals
    // var length = document.querySelectorAll('.timeline_content').length;

    // $('.timeline_content').each(function(el){
    //   $(this).on('click', function(){
    //     if ( el <= length - 3) {
    //       $(this).parent().find('[id^="modal_"]').removeAttr('class').addClass('modalIn');
    //     } else if ( el > length - 3) {
    //       return;
    //     }
    //   })
    // })

    // $('.modal-close').each(function(){
    //   $(this).on('click', function(){
    //     $(this).closest('[id^="modal_"]').addClass('modalOut');
    //   })
    // });


  $('.menu-burger-area').on('click', function(){
    $('body').toggleClass('menu-active');
  });

  $('.menu-burger-area').on('mouseover', function(){
    $('body').addClass('menu-hover');
  });

   $('.menu-burger-area').on('mouseout', function(){
    $('body').removeClass('menu-hover');
  });


$('.about-bg').on('click', function(){
  $('svg polyline').toggleClass('dash');
});


  // Show and hide hello
  function showHello() {
    $('#hello').fadeIn().addClass('fin');
  }
  setTimeout(showHello, 1000);

  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - $('header').height();

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
  });

  // function calculateGap() {
  //   if (($(window).width() > 600)) {

  //   } else {

  //   }
  // }

  // calculateGap();

  // $(window).resize(function() {
  //   calculateGap();
  // });

  var controller = new ScrollMagic.Controller();

  // var homepageScene1 = new ScrollMagic.Scene({
  //   triggerElement: '.home',
  //   offset: '0.1',
  //   duration: '20%',
  //   triggerHook: 0
  //   })
  //   .setPin('.home')
  //   .setClassToggle('body', 'introOpen')
  //   .addIndicators({
  //       name:'home scene',
  //       colorTrigger: 'black',
  //       // indent: 200,
  //       colorStart: 'pink',
  //       colorEnd: 'pink'
  // })
  // .addTo(controller);

































































  })(jQuery);

});




