"use strict";

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