$(document).ready(function(){
    $('.people__items').slick({
        slidesToShow: 3,
        arrows: false,
         autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    vertical: true,
                }
            }
        ]
    });

    // Smooth scroll and pageup
    $('.pageup').fadeOut("fast");
    $(window).scroll(function () {
    if($(this).scrollTop() > 1300){
        $('.pageup').fadeIn();
    } else{
        $('.pageup').fadeOut();
    }
    });
  
    //Hamburger menu
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__link'),
        hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    });
});