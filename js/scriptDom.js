// console.log(document.body);
// console.log(document.documentElement); все элементы в струткруе html
// console.log(document.body.childNodes); все узлы родителя
// console.log(document.body.firstChild); первый потомок нода
// console.log(document.body.lastChild); последний потомок нода
// console.log(document.querySelector("#current").parentNode.parentNode); родитель => родитель родителя
// console.log(document.querySelector("[data-current='3']").previousElementSibling); след/пред нода (узел)
// console.log(document.querySelector("[data-current='3']").nextElementSibling); след элемент
// console.log(document.querySelector("#current").parentElement); получить элемент
// console.log(document.body.firstElementChild);

for (let node of document.body.childNodes) {
	if (node.nodeName == "#text") {
		continue;
	}
	console.log(node);
}