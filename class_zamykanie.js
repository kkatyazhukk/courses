// function sayHello(name = 'Misha') {
//     console.log(`Hello ${name}`);
// }

// sayHello('Yauehn');
// sayHello();

// function sum(...param) {
//     let summa = 0;
//     param.forEach(n => summa += n)
//     console.log(summa)
// }
// sum(1, 4, 34, 934, 233, 555);

// let a = 10;
// let b = 15;
// function plus() {
//     console.log(a + b);
// }
// plus()

// let a = 4;
// let b = 3;

// function minus() {
//     let a = 10;
//     let b = 15;
// }
// minus();
// console.log(a, b);

// function counter() {
//     let count = 0;
//     return function() {
//         return count++;
//     }
// }

// let counterOne = counter();
// console.log(counterOne());
// console.log(counterOne());
// console.log(counterOne());
// console.log(counterOne());
// console.log(counterOne());
// console.log(counterOne());
// console.log(counterOne());
// let counterTwo = counter();
// console.log(counterTwo());
// console.log(counterTwo());

// function hello(name, number) {
//     console.log(`Hello ${name}`);
//     if(number === 1) {
//         return;
//     } else {
//         hello(name, number - 1);
//     }
// }
// console.log(hello('Ya', 5));

let obj = {
    name: 'Yauhen',
    age: 30,
}

console.log(Object.keys(obj))
console.log(Object.entries(obj))