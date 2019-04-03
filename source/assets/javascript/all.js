import "all.scss";

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
  showNav()
});




