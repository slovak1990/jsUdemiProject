"use strict";

// const obj = {
//     "name": "Test",
//     [Symbol("id")]: 1,
//     getId: function() {
//         return this[id];
//     }
// }

//let id = Symbol();
//obj[id] = 1;
//console.log(obj.getId());
//console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

const myAwesomeDB = {
    movies: [], 
    actors:[],
    [Symbol.for("id")]: 123
}

// СТоронний код

myAwesomeDB.id = "12333";
console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);
