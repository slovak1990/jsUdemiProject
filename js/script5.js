/* мобильные собитыя */
// touchstart клик
// touchmove касание
// touchend
// touchenter зашел на элемент
// touchliave ушел с элемента
// touchcansel выход за пределы элемента
// touches кол-во пальцев на мониторе
// targetTouches кол-во пальцев на элементе
// changedTouches кол-во пальцев в данном событии

window.addEventListener("DOMContentLoaded", () => {
	const box = document.querySelector(".box");

	box.addEventListener("touchstart", (e) => {
		e.preventDefault();
		console.log("start");
		console.log(e.targetTouches);
	});

	box.addEventListener("touchmove", (e) => {
		e.preventDefault();
		console.log("move");
		console.log(e.targetTouches[0].pageX);
	});

	box.addEventListener("touchend", (e) => {
		e.preventDefault();
		console.log("end");
	});
});