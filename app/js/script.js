const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function () {
    if (header.classList.contains('expand')) { //Close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('expand');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });


    } else { // Open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('expand');
        fadeElements.forEach(function (element) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });

    }

});