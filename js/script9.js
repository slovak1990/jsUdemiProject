"use strict";
const birthday = Symbol("birthday");
const user = {
    name: "Alex",
    surname: "Smith",
    [birthday] : "2/04/2023",
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}
// Object.defineProperty(user, "birthday", {value: prompt("Date?"), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

Object.defineProperty(user, "showMyPublicData", {enumerable: false});

for(let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
})

// user.name = "ddd";
// writable 
// enumerable
// configurable
