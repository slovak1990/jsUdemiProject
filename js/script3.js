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
