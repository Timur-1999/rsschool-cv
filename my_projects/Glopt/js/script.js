$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 3,
    variableWidth: true,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow/arrow-right.png"></button>',
  });

    // Smooth scroll and pageup
  $(window).scroll(function () {
    if($(this).scrollTop() > 800){
      $('.pageup').fadeIn();
    } else{
      $('.pageup').fadeOut();
    }
  });
  
    //Hamburger menu
    window.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__item'),
      hamburger = document.querySelector('.hamburger');
  
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
  
      menuItem.forEach(item => {
          item.addEventListener('click', () => {
              hamburger.classList.toggle('hamburger_active');
              menu.classList.toggle('menu_active');
          });
      });
  });
});