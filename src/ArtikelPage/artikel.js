// burgerMenu
const menu = document.querySelector('#menu');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('click', function() {
    if (toggle.checked) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
