import "all.scss";
import "vendor/noframework.waypoints.min.js"
import "vendor/ScrollMagic.min.js"

$(function() {
  (function($) {

    // var waypoint = new Waypoint({
    //   element: document.getElementById('about'),
    //   handler: function(direction) {
    //     if (direction ==='down'){
    //       $('.name').fadeOut();
    //     } else if(direction === 'up')
    //     $('.name').fadeIn();
    //   },
    //   offset: '50%'
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

    // Nav bar animation
    function openNav(){
      $('.nav-overlay').fadeIn().addClass('open');
      $('.nav-burger').addClass('active');
    }

    function closeNav(){
      $('.nav-overlay').fadeOut().removeClass('open');
      $('.nav-burger').removeClass('active');
    }

    $('.nav-button').on('click', function(e){
      e.preventDefault();
      if ($('.nav-overlay').is(':hidden')){
        openNav();
      } else {
        closeNav();
      }
    });

    function showNav(){
      if ($(window).width() >= 600) {
        if ($('.nav-overlay').is(':hidden')) {
          $('.nav-overlay').removeAttr('style');
          $('.nav-overlay ul').removeAttr('style');
        }
      }
    }

    showNav();

    $(window).resize(function() {
      showNav();
    });

    // Show and hide hello
    function showHello() {
        $('.greeting').fadeIn().addClass('fin');
    }
    function hideHello(){
      $('.greeting').fadeOut();
      $('.name').fadeIn();
    }
    setTimeout(showHello, 1500);
    setTimeout(hideHello, 8000);


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

  })(jQuery);

});




