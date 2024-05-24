
"use strict";

// const box = document.querySelector(".box");
// const block = document.querySelector(".block");

// console.log(block);

// if (block) {
//     console.log(block.textContent);
// }
// console.log(block?.textContent);
// console.log(1+2);

// const newHeight = 100;
// const newWidth = 400;

// function changeParams(elem, h, w) {
// 	elem.style.height = `${h ?? 200}px`;
// 	elem.style.width = `${w ?? 200}px`;
//     elem.innerHTML = (h ?? 200) * (w ?? 200);
// }

// changeParams(box, newHeight, newWidth);

// let userName;
// let userKey;

// console.log(userName ?? userKey ?? "User");

// const userData = {
//     name: "Ivan",
//     age: null, 
//     say: function() {
//         console.log("Hello!");
//     }
// }

// userData.say();
// userData.hey?.();
// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills);
// }

// console.log(userData.skills?.js);

const boxesQuery = document.querySelectorAll(".box");
const boxesGet = document.getElementsByClassName("box");

boxesQuery.forEach(box => {
if (box.matches(".this")) console.log(box);
})

console.log(boxesQuery[0].closest(".wrapper"));
// boxesQuery[0].remove();
// boxesGet[0].remove();

// for(let i = 0; i < 5; i++) {
//     const div = document.createElement("div");
//     div.classList.add("box");
//     // document.body.append(div);
//     boxesGet[boxesGet.length] = div;
// }

// console.log(boxesQuery);
// console.log(boxesGet);
// console.log(document.body.children);
// console.log(Array.from(boxesGet));