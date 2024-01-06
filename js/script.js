"use strict";

let isValidInput = false;
let countOfFilms;

while (!isValidInput) {
	countOfFilms = prompt("Введите количество просмотренных фильмов:");
	if (countOfFilms === null) {
		// Пользователь нажал "Отмена" в диалоговом окне
		alert("Вы отменили ввод. Для продолжения введите количество просмотренных фильмов.");
	} else {
		countOfFilms = parseInt(countOfFilms);
		if (!isNaN(countOfFilms) && countOfFilms > 0) {
			// Количество фильмов больше 0, можно продолжить выполнение кода
			isValidInput = true;
		} else {
			alert("Введите корректное количество просмотренных фильмов (больше 0).");
		}
	}
}
console.log(countOfFilms);

const personalMovieDB = {
	count: countOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 1; i <= countOfFilms; i++) {
	let movieName = prompt("Один из последних просмотренных фильмов?", "");

	if (movieName === null || movieName.length === 0 || movieName.length > 50) {
		alert("Введите название фильма, длиной не более 50 символов.");
		i--; // чтобы уменьшить i и повторно запросить ввод
		continue;
	}

	let userRating = prompt("На сколько оцените его?", "");

	if (userRating === null || isNaN(userRating) || userRating == 0) {
		alert("Введите корректную оценку для фильма.");
		i--; // чтобы уменьшить i и повторно запросить ввод
		continue;
	}

	personalMovieDB.movies[movieName] = +userRating;
}
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
	alert("Просмотрено довольно мало фильмов!");
	console.log("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert("Вы классический зритель!");
	console.log("Вы классический зритель!");
} else if (personalMovieDB.count > 30) {
	alert("Вы киноман!");
	console.log("Вы киноман!");
} else {
	alert("Произошла ошибка!");
	console.log("Произошла ошибка!");
}
