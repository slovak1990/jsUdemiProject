"use strict";
// динамеческое подставление скриптов
const p = document.querySelectorAll("p");
console.log(p);

function loadScript(src) {
	const script = document.createElement("script");
	script.src = src; 
	script.async = false;
	document.body.append(script); // загружаем файл скрипта ассинхронно (можно поменять)
}

loadScript("js/script7.js");
loadScript("js/script2.js");