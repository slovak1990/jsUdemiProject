"use strict";

function showFirstMessage(text) {
	console.log(text);
}
showFirstMessage("Hello world");

function calc1(a, b) {
	return (a+b);
}
console.log(calc1(4, 3));

function ret() {
	let num = 50;
	return num;
}

const logger = function() {
	console.log("Hello");
};

logger();

const calc = (a, b) => a + b;

const usdCurr = 28;
const euroCurr = 32;
const discount = 0.9;
function convert(amount, curr) {
	return curr * amount;
}
function promotion(result) {
	console.log(result * discount);
}
promotion(convert(500, usdCurr));
promotion(convert(500, euroCurr));

// Место для первой задачи
function sayHello(name) {
	return `Hello, ${name}`;
}

sayHello("Alex");
// Место для второй задачи
function returnNeighboringNumbers(number) {
	return console.log([number-1, number, number+1]);
}
returnNeighboringNumbers(776);

// Место для третьей задачи
function getMathResult(bazaNumber, count) {
	if (typeof(times) !== "number" || count <= 0) {
		return bazaNumber;
	}
	let str = "";
	for (let i = 1; i <= count; i++) {
		str += `${bazaNumber * i}`;
		if (i < count) {
			str += "---";
		}
	}
	return str;
}
console.log(getMathResult(7, 3));
console.log(getMathResult(7, 0));

const number2 = 7.3;
const pix = "12.2px";
console.log(Math.round(number2));
console.log(parseInt(pix));
console.log(parseFloat(pix));

/* 
Задачи:
1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 
(тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое 
число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть 
строку "При вычислении произошла ошибка"

2) Напишите функцию, которая будет определять номер купе по переданному ей номеру места.
Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

3) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
(Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
Если вместо аргумента приходит не число, дробное или отрицательное число - 
функция возвращает строку "Ошибка, проверьте данные"
Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 

4) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0

5) Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
Причем, их количество должно быть равно переданному аргументу.
Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

7) Напишите функцию showExperience, 
которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
P.S. желательно использовать деструктуризацию, но не обязательно

8) Напишите функцию showProgrammingLangs, 
которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
Причем функция должна работать вне зависимости от количества языков. 
Если ни один не указан, то возвращается пустая строка.

9) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

10) Напишите функцию showFamily, которая будет принимать в себя массив строк и 
возвращать сообщение в нужном формате.
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

11) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и 
будет выводить в консоль эти строки в нижнем регистре.

12) Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

13) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги 
из двух разных банков в разных валютах. Один банк основной с базовыми валютами, 
второй дополнительный с прочими валютами:
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив 
со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), 
второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. 
Функция возвращает строку в нужном виде. Заметьте:
- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, 
потом additionalCurrencies по порядку
*/

// Место для первой задачи
function calculateVolumeAndArea(ribLenght) {
	if(typeof(ribLenght) === "number" && ribLenght % 1 !== 0 || ribLenght < 0 || typeof(ribLenght) === "string") {
		return "При вычислении произошла ошибка";
	} else {
		const volume = Math.pow(ribLenght, 3);
		const square = 6 * Math.pow(ribLenght, 2);
		return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
	}
}

// Место для второй задачи
function getCoupeNumber(seatNum) {
	if(typeof(seatNum) === "number" && seatNum % 1 !== 0 || typeof(seatNum) === "string" || seatNum < 0) {
		return "Ошибка. Проверьте правильность введенного номера места";
	} else if(seatNum === 0 || seatNum > 36 ) {
		return "Таких мест в вагоне не существует";
	} else {
		const copeNum = Math.ceil(seatNum / 4);
		return copeNum;
	}
}

// Место для третьей задачи
function getTimeFromMinutes(minutes) {
	if(typeof(minutes) === "number" && minutes % 1 !== 0 || typeof(minutes) === "string" 
	|| minutes < 0 || minutes >= 600 || isNaN(minutes) || minutes === null) {
		return "Ошибка, проверьте данные";
	} else {
		const remainingHours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		const hoursText =
        remainingHours === 1 ? "час" : (remainingHours === 0 || (remainingHours >= 5 && remainingHours <= 10)) ? "часов" : "часа";
		return `Это ${remainingHours} ${hoursText} и ${remainingMinutes} минут`;
	}
}

// Место для четвертой задачи
function findMaxNumber(a, b, c, d) {
	if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" || typeof d !== "number" ||
        arguments.length < 4) {
		return 0;
	}
	return Math.max(a, b, c, d);
}

// Место для пятой задачи
function fib(count) {
	if (typeof(count) !== "number" || count <= 0 || !Number.isInteger(count)) {
		return "";
	}
	let result = "";
	let first = 0;
	let second = 1;
	for (let i = 0; i < count; i++) {
		if (i + 1 === count) {
			result += `${first}`;
		} else {
			result += `${first} `;
		}
		let third = first + second;
		first = second;
		second = third;
	}
	return result;
}

// Место для шестой задачи
function factorial(n) {
	if (typeof n !== "number" || n < 0 || typeof(n) === "number" && n % 1 !== 0 ) {
		return "Введите целое число";
	} else {
		if (n === 0 || n === 1) {
			return 1;
		} else {
			return n * factorial(n - 1);
		}
	}
}

// Место для седьмой задачи
const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng"],
		programmingLangs: {
			js: "20%",
			php: "10%"
		},
		exp: "1 month"
	},
	showAgeAndLangs: function(plan) {
		const {age} = plan;
		const {languages} = plan.skills;
		let str = `Мне ${age} и я владею языками: `;

		languages.forEach(function(lang) {
			str += `${lang.toUpperCase()} `;
		});

		return str;
	}
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// Место для восьмой задачи
function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;
}

showExperience(personalPlanPeter);

// Место для девятой задачи
function showProgrammingLangs(plan) {
	let str = "";
	const {programmingLangs} = plan.skills;
	for (let key in programmingLangs) {
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}

	return str;
}

// Место для десятой задачи
const family = ["Peter", "Ann", "Alex", "Linda"];
function showFamily(arr) {
	let str = "";

	arr.length === 0 ? str = "Семья пуста" : str = "Семья состоит из: ";

	arr.forEach(member => {
		str += `${member} `;
	});

	console.log(str);
	return str;
}

showFamily(family);

// Место для одинадцатой задачи
const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];
function standardizeStrings(arr) {
	arr.forEach(city => {
		console.log(city.toLowerCase());
	});
}
standardizeStrings(favoriteCities);

// Место для двенадцатой задачи
const someString = "This is some strange string";
function reverse(str) {
	if(typeof str !== "string") {
		return "Ошибка!";
	}
	return str.split("").reverse().join("");
}
reverse(someString);

// Место для тринадцатой задачи
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
	let str = "";
	arr.length === 0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n";
	arr.forEach(function(curr, i) {
		if (curr !== missingCurr) {
			str += `${curr}\n`;
		}
	});
	return str;
}
console.log(availableCurr(baseCurrencies, additionalCurrencies));
