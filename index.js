document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItems = menu.querySelectorAll('.menu__item');

    function showMenu() {
        hamburger.classList.toggle('show');
        menu.classList.toggle('show');
    }
    hamburger.addEventListener('click', () => {
        showMenu();
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            showMenu();
        });
    });

    const pageUp = document.createElement('a');
    pageUp.classList.add('page-up');
    pageUp.setAttribute('href', '#page-up')
    pageUp.innerHTML =
        `
        <span></span>
        <span></span>
    `
    document.body.insertAdjacentElement('beforeend', pageUp);

    function showButtonUp() {
        if (document.documentElement.scrollTop > 380) {
            pageUp.style.opacity = 1;
        } else {
            pageUp.style.opacity = 0;
        }
    }
    window.addEventListener('scroll', showButtonUp);
});