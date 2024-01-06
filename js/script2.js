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
const arr = [3, 5, 8, 16, 20, 23, 50];
const results = [];

// Пишем решение вот тут
for(let i = 0; i < arr.length; i++) {
	results.push(arr[i]);
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
