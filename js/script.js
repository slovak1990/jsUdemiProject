"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: () => {
		let isValidInput = false;
		while (!isValidInput) {
			personalMovieDB.count = +prompt("Введите количество просмотренных фильмов:").trim();
			if (personalMovieDB.count === null || isNaN(personalMovieDB.count) || personalMovieDB.count <= 0) {
				alert("Введите корректное количество просмотренных фильмов (больше 0).");
			} else {
				isValidInput = true;
			}
		}
	},
	rememberMyFilms: () => {
		for (let i = 1; i <= 2; i++) {
			let movieName = prompt("Один из последних просмотренных фильмов?", "").trim();
			if (movieName === null || movieName.length === 0 || movieName.length > 50) {
				alert("Введите название фильма, длиной не более 50 символов.");
				i--; // чтобы уменьшить i и повторно запросить ввод
				continue;
			}
			let userRating = prompt("На сколько оцените его?", "").trim();
			if (userRating === null || isNaN(userRating) || userRating <= 0) {
				alert("Введите корректную оценку для фильма.");
				i--; // чтобы уменьшить i и повторно запросить ввод
				continue;
			}
			personalMovieDB.movies[movieName] = +userRating;
		}
		console.log(personalMovieDB);
	},
	detectPersonalLevel: () => {
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
	},
	showMyDB: (hidden) => {
		!hidden && console.log(personalMovieDB);
	},
	toggleVisibleMyDB: () => {
		personalMovieDB.privat = !personalMovieDB.privat;
	},
	writeYourGenres: () => {
		for(let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`).trim().toLowerCase();
			if (genre === null || genre.length === 0 || genre.length > 50 || !isNaN(genre)) {
				alert("Введите название жанра");
				i--;
				continue;
			}
			personalMovieDB.genres[i - 1] = genre;
		}
		return personalMovieDB.genres;
	}
};
