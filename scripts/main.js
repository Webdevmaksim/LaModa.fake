'use strict';

/* Кнопка выбора города - НАЧАЛО */

// Обращение к кнопке в единственном экземпляре
const headerCityButton = document.querySelector('.header__city-button');

// Условие которое берёт название города из локального хранилища или вставляет строку 'Ваш город?' в случае если локальное хранилище пустое.
headerCityButton.textContent = localStorage.getItem('lamoda-location') || 'Ваш город?';

// Отлавливаем событие клика по кнопке 'header__city-button'
headerCityButton.addEventListener('click', () => {
    
    // Создаём переменную куда будем складывать название города из модалки вызваной prompt
    const city = prompt('Укажите ваш город');
    // Кладём полученное значение в текст кнопки с помощью - textContent
    headerCityButton.textContent = city;
    // Сохраняем полученное название города в локальном хранилище
    localStorage.setItem('lamoda-location', city);
});
/* Кнопка выбора города - КОНЕЦ */

/* Запрос базы данных - НАЧАЛО */
const getData = async () => {
    const data = await fetch('db.json');
    
    if(data.ok) {
        return data.json()
    } else {
        throw new Error(`Данные не были получены, ошибка ${data.status} ${data.statusText}`);
    }
};
const getGoods = (callback) => {
    getData()
        .then(data => {
            callback(data);
        })
        .catch(err =>{
            console.log(err);
        });
};
/* Запрос базы данных - КОНЕЦ */

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

/* Модальное окно - НАЧАЛО */
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
/* Модальное окно - КОНЕЦ */