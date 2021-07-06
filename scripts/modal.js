'use strict';



const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

/* Блокировка скрола = начало */

// Отключение скрола
const disableScroll = () => {

    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.style.cssText = `
    postion: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
    `;
};

// Включение скрола
const enableScroll = () => {
    document.body.style.cssText = '';
};
/* Блокировка скрола = конец */

// Функция открытия модалки
const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
    disableScroll();
};

// Функция закрытия модалки
const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
    enableScroll();
};

// Событие клика на кнопку корзины
subheaderCart.addEventListener('click', cartModalOpen);

// Закрытие на клавишу ESC
document.addEventListener('keydown', event => {
    if (event.code === 'Escape'){
        cartModalClose();
        enableScroll();
    }
});

// Закрытие модалки по полю 
cartOverlay.addEventListener('click', event => {
    const target = event.target;

    if(target.classList.contains('cart__btn-close') || target.classList.contains('cart-overlay')){
        cartModalClose();
    }
});

