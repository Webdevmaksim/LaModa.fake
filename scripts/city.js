'use strict';

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