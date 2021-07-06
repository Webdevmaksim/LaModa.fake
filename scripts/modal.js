'use strict';

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

// Функция открытия модалки
const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
};

// Функция закрытия модалки
const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
};

// Событие клика на кнопку корзины
subheaderCart.addEventListener('click', cartModalOpen);

// Закрытие на клавишу ESC
document.addEventListener('keydown', event => {
    if (event.code === 'Escape'){
        cartModalClose();
    }
});

// Закрытие модалки по полю 
cartOverlay.addEventListener('click', event => {
    const target = event.target;

    if(target.classList.contains('cart__btn-close') || target.classList.contains('cart-overlay')){
        cartModalClose();
    }
});

