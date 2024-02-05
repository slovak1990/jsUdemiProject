// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту 

"use strict";

document.addEventListener("DOMContentLoaded", () => { // событие когда отрисуется вся структура страницы
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
		movieList = document.querySelector(".promo__interactive-list"), // получаем div фильмов
		addForm = document.querySelector("form.add"),
		addInput = addForm.querySelector(".adding__input"),
		checkbox = addForm.querySelector("[type='checkbox']");

	addForm.addEventListener("submit", (event) => {
		event.preventDefault(); // событие чтобы не перезагружать страницу

		let newMovie = addInput.value; // добавление значения в инпут
		const isFavorite = checkbox.checked; // проверка отметки чекбокса

		if(newMovie) {
			if(newMovie.length > 21) {
				newMovie = `${newMovie.substring(0, 22)}...`;
			}
			if(isFavorite) {
				console.log("Добавляем любимый фильм");
			}
			movieDB.movies.push(newMovie); 
			sortArr(movieDB.movies); 
			createMovieList(movieDB.movies, movieList);
		}

		event.target.reset();
	});

	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove(); // через форич удяляем каждый элемент
		});
	};

	const makeChanges = (url, textContent) => {
		genre.textContent = textContent; // меняем текст дочернего элемента
		poster.style.backgroundImage = url; // меняем фон у постера, взяв другую кратинку
	};
	
	const sortArr = (arr) => {
		arr.sort(); // сортируем элементы
	};

	function createMovieList(movies, parent) {
		parent.innerHTML = ""; // чистим список
		sortArr(movies);
		movies.forEach((film, i) => { 
			parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                 <div class="delete"></div>
            </li>
            `; 
		});

		document.querySelectorAll(".delete").forEach((btn, i) => {
			btn.addEventListener("click", () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				createMovieList(movies, parent);
			});
		});
	}

	// вызовы
	deleteAdv(adv_img);
	makeChanges("url('img/bg.jpg')", "Драма");
	createMovieList(movieDB.movies, movieList);
});