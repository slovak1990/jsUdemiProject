"use strict";

const user = {
    name: "Alex",
    surname: "Smith",
    birthday : "2/04/2023",
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}
console.log(typeof(Object.keys(user)[0]));

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

for (const key in user) {
    console.log(user[key]);
}

const arr0 = ["b", "a", "c"];
Array.prototype.someMethod = function() {};
console.dir(arr0);
for (const key of arr0) {
    console.log(key);
}

const str = "string";
for (const key in str) {
    console.log(str[key]);
}


const salaries = {
    john: 500,
    ivan: 1000,
    anna: 3000,
    sayHello: function() {
        console.log("hello");
    }
}

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.anna,

        next() {
            if(this.current < this.last) {
                this.current = this.current + 500;
                return {done:false, value: this.current}
            }    else {
                return {done: true}
            }
        }
    }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

for(let res of salaries) {
    console.log(res);
}

const shops = [
    {rice:500},
    {oil:200},
    {bread:50}
]

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})

console.log(map);
console.log(map.has(shops[0]));
console.log(map.size);
map.delete();
map.clear();
map.keys();

const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}
console.log(goods);

for(let [shop, price] of map.entries()) {
    console.log(price, shop);
}

map.forEach((value, key, map) => {
    console.log(key, value);
});

const arr3 = [1, 1, 2, 2, 4, 5, 6, 7, 1];

const arr2 = ["Alex", "Anna", "Alex", "Oleg"];
function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr2));

const setArr = new Set(arr3);
setArr.add("Ivan")
        .add("Oleg");
console.log(setArr);

for(let value of setArr) {
    console.log(value);
}

setArr.forEach((value, valueAgaing, setArr) => {
    console.log(value, valueAgaing);
})

console.log(setArr.values());
console.log(setArr.keys());
console.log(setArr.entries());

