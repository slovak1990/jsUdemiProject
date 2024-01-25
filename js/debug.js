/* eslint-disable no-debugger */
"use strict";

const restorantData = {
	menu: [
		{
			name: "Salad Caesar",
			price: "14$"
		},
		{
			name: "Pizza Diavola",
			price: "9$"
		},
		{
			name: "Beefsteak",
			price: "17$"
		},
		{
			name: "Napoleon",
			price: "7$"
		}
	],
	waitors: [
		{name: "Alice", age: 22}, {name: "John", age: 24}
	],
	averageLunchPrice: "20$",
	openNow: true
};

function isOpen(prop) {
	let answer = "";
	prop ? answer = "Открыто" : answer = "Закрыто";

	return answer;
}

console.log(isOpen(restorantData.openNow));

function getPriceValue(priceString) {
	const numericPart = priceString.slice(0, -1);

	if (!isNaN(numericPart)) {
		return parseFloat(numericPart);
	} else {
		return NaN;
	}
}


function isAverageLunchPriceTrue(fDish, sDish, average) {
	const fDishPrice = getPriceValue(fDish.price);
	const sDishPrice = getPriceValue(sDish.price);

	if (!isNaN(fDishPrice) && !isNaN(sDishPrice)) {
		if (fDishPrice + sDishPrice < average.slice(0, -1)) {
			return "Цена ниже средней";
		} else {
			return "Цена выше средней";
		}
	} else {
		// Если одна из цен не может быть преобразована в число, вернуть сообщение об ошибке
		return "Ошибка: Невозможно преобразовать цену в число";
	}
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
	const copy = Object.assign(restorantData, data);
	const newWaitor = {name: "Mike", age: 32};
	copy.waitors = newWaitor;
	return copy;
}

transferWaitors(restorantData);