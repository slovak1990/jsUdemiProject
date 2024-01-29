"use strict";

const box = document.getElementById("box"),
	btns = document.getElementsByTagName("button"),
	circles = document.getElementsByClassName("circle"),
	wrapper = document.querySelector(".wrapper"),
	hearts = wrapper.querySelectorAll(".heart"),
	oneHeart = wrapper.querySelector(".heart");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

const widthNumb = 500;
box.style.cssText = `background-color: blue; width: ${widthNumb}px`;

// for(let i =0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = "blue"; 
// }

hearts.forEach(item => {
	item.style.backgroundColor = "blue";
});

const div = document.createElement("div"); // создан пока что в JS
//const text = document.createTextNode("Тут был я");

div.classList.add("black");
document.body.append(div);
wrapper.append(div);

// wrapper.appendChild(div);
// wrapper.prepend(div);

//hearts[2].before(div);
// hearts[1].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello world</h1>";
// div.textContent = "Hi";

div.insertAdjacentHTML("beforebegin", "<h2>before begin</h2>");
div.insertAdjacentHTML("afterbegin", "<h2>after begin</h2>");
div.insertAdjacentHTML("afterend", "<h2>after end</h2>");
div.insertAdjacentHTML("afterbegin", "<h2>begin end</h2>");


