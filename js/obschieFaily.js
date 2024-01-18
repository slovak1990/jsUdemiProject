"use strict";

let num = 50;

(num == 50) ? console.log("Ok!") : console.log("error"); // тернарный оператор
// 4 + 4  бинарный оператор
// +4 унарный оператор

switch (num) {
case 49: console.log("false");
	break;
case 50: console.log("true");
	break;
case 100: console.log("doublefalse");
	break;
default:
	console.log("try next time");
}

while(num < 55) {
	console.log(num);
	num++;
}

do {
	console.log(num);
	num++;
} while (num < 57);

for(let i = 0; i < 3; i++) {
	console.log("i = " + i);
	for(let j = 0; j < 3; j++) {
		console.log("j = " + j);
	}
}

let result1 = "";
const lenght = 7;
// *
// **
// ***
// ****
// *****
// ******
for(let i = 1; i < lenght; i++) {
	for(let j = 0; j < i; j++) {
		result1 += "*"; 
	}
	result1 += "\n";
}
console.log(result1);

first: for(let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for(let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
	}
	for(let k = 0; k < 3; k++) {
		if(k === 2) break first;
		console.log(`Third level: ${k}`);
	}
}



for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

let i = 2;
while(i <= 16) {
	if (i % 2 === 0) {
		i++;
		continue;
	} else {
		console.log(i);
		i++;
	}
}

const arrayOfNumbers = [];

for(let i = 5; i <= 10; i++) {
	arrayOfNumbers.push(i);
}
console.log(arrayOfNumbers);


for (let i = 20; i >= 10; i--) {
	if (i === 13) break;
	console.log(i);
}

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const arr1 = [3, 5, 8, 16, 20, 23, 50];
const results = [];

// Пишем решение вот тут
for(let i = 0; i < arr.length; i++) {
	results.push(arr1[i]);
}
console.log(results);

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const data2 = [5, 10, "Shopping", 20, "Homework"];

// Пишем решение вот тут
for (let i = 0; i < data2.length; i++) {
	if (typeof data2[i] === "number") {
		// Увеличиваем числа в 2 раза
		data2[i] *= 2;
	} else if (typeof data2[i] === "string") {
		// Добавляем " - done" к строкам
		data2[i] += " - done";
	}
}

console.log(data2);

const data = [5, 10, "Shopping", 20, "Homework"];
const result2 = [];

for(let i = 1; i <= data.length; i++) {
	result2[i - 1] = data[data.length - i];
}
console.log(result2);



const lines = 5;
let result = "";
// строка
for (let i = 0; i <= lines; i++) {
	// ставим пробелы в строке
	for (let k = lines; k > i; k--) {
		result += " ";
	}
	// рисуем звездочки
	for (let j = 0; j < 2 * i + 1; j++) {
		result += "*";
	}
	result += "\n";
}

console.log(result);


const soldier = {
	health: 440,
	armor: 100,
	sayHello: function() {
		console.log("Hello");
	}
};

// const john = {
// 	health: 100
// };

const johh = Object.create(soldier);
//john.__proto__ = soldier; // старый код
// Object.setPrototypeOf(john, soldier); // новый подход


console.log(johh.armor);
johh.sayHello();

function first() {
	setTimeout(function() {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();

function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

function done() {
	console.log("Я прошел этот урок");
}

learnJS("JS", done);

const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		background: "red"
	}, 
	makeTest: function() {
		console.log("text");
	}
};

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);
options.makeTest();
console.log(options.name);
delete options.name;
console.log(options);

let counter = 0;
for(let key in options) {
	if(typeof(options[key]) === "object") {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`); 
		counter++;
	}
}
console.log(counter);

const arr = [1, 2, 3, 6, 8];
// arr.pop();
// arr.push(10);
// console.log(arr);

// for(let value of arr) {
// 	console.log(value);
// }

arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

let a = 5, b = a;
b = b + 5;

console.log(a);
console.log(b);

const obj = {
	a: 4,
	b: "2323",
	c: true,
	d:[1, 45, 13]
};

function copy(obj) {
	let copyObj = {};
	let key;
	for(key in obj) {
		copyObj[key] = obj[key];
	}
	return copyObj;
}

const newObj = copy(obj);
console.log(newObj);

const add = {
	i: 17,
	f: 21
};

console.log(Object.assign(obj, add));

const oldArr = [1, "true", "gag"];
const newArr = oldArr.slice();
newArr[1] = false;
console.log(newArr);
console.log(oldArr);

const video = ["youtube", "vimeo", "rutube"],
	blogs = ["wordpress", "lifejournal", "blogger"],
	internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);	  