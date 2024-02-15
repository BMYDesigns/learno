const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const bar = document.querySelector('.bar');
const close = document.querySelector('.close');


hamburger.addEventListener('click', function() {
    menu.classList.toggle('hidden');
    bar.classList.toggle('hidden');
    close.classList.toggle('hidden')


})

