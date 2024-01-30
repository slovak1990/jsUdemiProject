/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

const adv_img = document.querySelectorAll(".promo__adv img"), // получаем псевдомассив
	poster = document.querySelector(".promo__bg"), // получаем div постера
	genre = poster.querySelector(".promo__genre"), // от постера получаем его дочерний элемент
	movieList = document.querySelector(".promo__interactive-list"); // получаем div фильмов
adv_img.forEach(item => {
	item.remove(); // через форич удяляем каждый элемент
});

genre.textContent = "Драма"; // меняем текст дочернего элемента

poster.style.backgroundImage = "url('img/bg.jpg')"; // меняем фон у постера, взяв другую кратинку

movieList.innerHTML = ""; // чистим список фильмов
movieDB.movies.sort(); // сортируем элементы
movieDB.movies.forEach((film, i) => { 
	movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
         <div class="delete"></div>
    </li>
    `; 
});



