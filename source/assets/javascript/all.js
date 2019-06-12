import "all.scss";
import Waypoints from 'waypoints';
// import Inview from 'inview';
import { TimelineMax, TweenMax, Linear } from 'gsap';
// import "waypoints/lib/shortcuts/inview.min.js";
// import ScrollMagic from 'scrollmagic'; 
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import Swiper from 'swiper';


$(function() {
  (function($) {

  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      grabCursor: true,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });

  // Show and hide modals
  $('.each-project').each(function(el){
    $(this).on('click', function(){
      $(this).next('[id^="modal_"]').removeAttr('class').addClass('modalIn');   
    })
  })

  
  $('.modal-close').on('click', function(){
    $(this).closest('[id^="modal_"]').addClass('modalOut');
  })
    

  $('.menu-burger-area').on('click', function(){
    $('body').toggleClass('menuOpen');

  });

  $('.menu-burger-area').on('mouseover', function(){

    $('body').addClass('menuHover');

  });

   $('.menu-burger-area').on('mouseout', function(){

    $('body').removeClass('menuHover');

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

function removeClass(el, className){
  if (el.hasClass(className)) {
    el.removeClass(className);
  }
}

  var greetingDown = $('#greeting').waypoint(function(direction) {
    if (direction === 'down') {
      $('body').addClass('greeting-active');
    } else if(direction === 'up') {
      removeClass($('body'), 'greeting-active');
    }
  }, {
    offset: '-1%'
  });

  var greetingUp = $('#greeting').waypoint(function(direction) {
    if (direction === 'up') {
      removeClass($('body'), 'greeting-active');
    }
  }, {
    offset: '-30%'
  });


  // $('#greeting').waypoint(function(direction) {
  //   if (direction === 'up') {
  //     removeClass($('body'), 'greeting-active');
  //   } 
  // }, {
  //   offset: '-30%' 
  // });

  var controller = new ScrollMagic.Controller();

  var homepageScene1 = new ScrollMagic.Scene({
    // triggerElement: '#hello',
    // offset: '0.1',
    duration: '30%',
    })
    .setPin('#greeting')
    // .setClassToggle('body', 'introOpen')
    .addIndicators({
        name:'home scene',
        colorTrigger: 'black',
        // indent: 200,
        colorStart: 'pink',
        colorEnd: 'pink'
  })
  .addTo(controller);


































































  })(jQuery);

});




