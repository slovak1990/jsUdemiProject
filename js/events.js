"use strict";

let i = 0;
const btns = document.querySelectorAll("button"), 
	deleteElement = (event) => {
		console.log(event.target);
		// i++;
		// if(i == 1) {
		// 	btns.removeEventListener("mouseenter", deleteElement); // убирает обработчик
		// }
		//event.target.remove(); // удалить при наведении
	},
	overlay = document.querySelector(".overlay"),
	eventWithOverlay = (event) => {
		console.log(event.currentTarget);
		console.log(event.type);
	};

// btn.onclick = () => { // перетираются события
// 	alert("click");
// };

// btn.addEventListener("click", () => { // постановка в очередь
// 	alert("Click");
// });

// btn.addEventListener("mouseenter", (event) => { // наведение (hover) мышки
// 	console.log(event.target); // event - событие в параметрах

// });

// btn.addEventListener("mouseenter", deleteElement); // добавляет обработчик
// overlay.addEventListener("click", eventWithOverlay); 

btns.forEach(btn => {
	btn.addEventListener("click", deleteElement, {once: true}); // options третьим аргументом
});

const link = document.querySelector("a");
link.addEventListener("click", (event) => {
	event.preventDefault(); //отменяем стандартное поведение браузера
	console.log(event.target);
});

