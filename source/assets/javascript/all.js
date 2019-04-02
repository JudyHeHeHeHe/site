import "all.scss";

function openNav(){
  $('.nav-overlay').fadeIn().addClass('open');
  $('.nav-burger').addClass('active');
  if ($('.header').hasClass('is-down')){
    $('.header').css('height', '100%');
  }
}

function closeNav(){
  $('.nav-overlay').fadeOut().removeClass('open');
  $('.nav-burger').removeClass('active');
  if ($('.header').hasClass('dropdown-nav')){
    $('.header').removeAttr('style');
  }
}

$('.nav-button').on('click', function(e){
  e.preventDefault();
  if ($('.nav-overlay').is(':hidden')){
    openNav();
  } else {
    closeNav();
  }
});




