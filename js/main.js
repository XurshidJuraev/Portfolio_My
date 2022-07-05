var elButton = document.querySelector('.header__menu-btn');
var elHeader = document.querySelector('.header');

elButton.addEventListener('click', (evt) => {
    elHeader.classList.toggle('header--active');
})