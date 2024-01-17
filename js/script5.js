"use script";

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