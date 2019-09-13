import "all.scss";
import Waypoints from 'waypoints';
import Inview from 'waypoints';
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

var projectDown = $('.project-page-jumbo-container').waypoint(function(direction) {
  if (direction === 'down') {
    $('.project-page-jumbo-container').addClass('project-active');
  } else if(direction === 'up') {
    removeClass($('.project-page-jumbo-container'), 'project-active');
  }
}, {
  offset: '-1%'
});

var greetingDown = $('main').waypoint(function(direction) {
  if (direction === 'down') {
    $('.scroll').addClass('scrollActive');
  } else if(direction === 'up') {
    removeClass($('.scroll'), 'scrollActive');
  }
}, {
  offset: '-1%'
});

var footerHeight = $('footer').outerHeight();
$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() >= $(document).height() - (footerHeight * 0.8)) {
    $('.footer-wrapper').addClass('active');
    $('.scroll').addClass('scrollDisappear');
  } else if ($(window).scrollTop() + $(window).height() < $(document).height() - (footerHeight / 2)){
    $('.footer-wrapper').removeClass('active');
    $('.scroll').removeClass('scrollDisappear');
  }
});

var controller = new ScrollMagic.Controller();

var homepageScene1 = new ScrollMagic.Scene({
  duration: '30%',
  })
  .setPin('#greeting')
.addTo(controller);

var emailbgParallax = new ScrollMagic.Scene({
  triggerElement: '.email-bg-container',
  triggerHook: 1,
  duration: '100%'
})
.setTween(TweenMax.from('.email-bg', 1, {y: '30%', ease:Power0.easeNone}))
.addTo(controller);

var emailSectionScene1 = new ScrollMagic.Scene({
  triggerElement: '.email-title-container',
  triggerHook: 0.7,
})
.setClassToggle('.email-title-container', 'active')
.addTo(controller);

var emailSectionScene2 = new ScrollMagic.Scene({
  triggerElement: '.esp',
  triggerHook: 0.7,
})
.setClassToggle('.esp', 'active')
.addTo(controller);

var espParallax = new ScrollMagic.Scene({
  triggerElement: '.esp',
  triggerHook: 1,
  duration: '100%'
})
.setTween(TweenMax.from('.esp-ul', 1, {y: '20%', ease:Power0.easeNone}))
.addTo(controller);

var projectSectionScene1 = new ScrollMagic.Scene({
  triggerElement: '.project-header',
  triggerHook: 0.7,
})
.setClassToggle('.project-header', 'active')
.addTo(controller);

var projectSectionScene2 = new ScrollMagic.Scene({
  triggerElement: '.project-title-container',
  triggerHook: 0.7,
})
.setClassToggle('.project-title-container', 'active')
.addTo(controller);

var projectSectionScene3 = new ScrollMagic.Scene({
  triggerElement: '.project-example',
  triggerHook: 0.7,
})
.setClassToggle('.project-example', 'active')
.addTo(controller);

var projectbgParallax = new ScrollMagic.Scene({
  triggerElement: '.project-bg-container',
  triggerHook: 1,
  duration: '100%'
})
.setTween(TweenMax.from('.project-bg', 1, {y: '30%', ease:Power0.easeNone}))
.addTo(controller);

var emailPageBgScene = new ScrollMagic.Scene({
  triggerElement: '.email-container',
  triggerHook: 0.1,
  duration: '100%'
})
.setTween(TweenMax.from('.email-container', 1, {backgroundSize: '200%', ease:Power0.easeNone}))
.setClassToggle('.email-page-title-container', 'active')
// .addIndicators({name: "pin scene", colorEnd: "#758987"})
.addTo(controller);

var blocksScene = new ScrollMagic.Scene({
  triggerElement: '.timeline-jumbo-container',
  triggerHook: 0.7,
  duration: $(".timeline-jumbo-container").height()
})
.setTween(TweenMax.to('.top-block', 1, {y: '100%', ease:Power0.easeNone}))
.setClassToggle('.timeline-container', 'active')
.addTo(controller);

var before = new ScrollMagic.Scene({
  triggerElement: '.before',
  triggerHook: 0.7,
})
.setClassToggle('.before', 'active')
.addTo(controller);

var during = new ScrollMagic.Scene({
  triggerElement: '.during',
  triggerHook: 0.7,
})
.setClassToggle('.during', 'active')
.addTo(controller);

var after = new ScrollMagic.Scene({
  triggerElement: '.after',
  triggerHook: 0.7,
})
.setClassToggle('.after', 'active')
.addTo(controller);


var location = window.location.href;
var keyWords = new Array('email', 'project', 'fun');
var colors = new Array('#fcb7a8', '#f3c130', '#d8d8e8');

for (var i = 0; i < keyWords.length; i++) {
  if(location.indexOf(keyWords[i]) > -1) {
    $('.menu-color').css('background-color', colors[i]);
    $('.link-home').removeClass('active');
    $('.link-' + keyWords[i]).addClass('active');
  }
}

var blocksScene = new ScrollMagic.Scene({
  triggerElement: '.timeline-jumbo-container',
  triggerHook: 0.7,
  duration: $(".timeline-jumbo-container").height()
})
.setTween(TweenMax.to('.top-block', 1, {y: '100%', ease:Power0.easeNone}))
.setClassToggle('.timeline-container', 'active')
.addTo(controller);











 







































  })(jQuery);

});




