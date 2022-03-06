// let user = {
//     name: "John",
//     age: 30,
//     isAdult: true,
//   };
  
// console.log(user.name); // "John"
// console.log(user["age"]); // 30

// console.log(Object.keys(user)); // [ 'name', 'age', 'isAdult' ]
// console.log(Object.values(user)); // [ 'John', 30, true ]
// console.log(Object.entries(user)); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'isAdult', true ] ]

// user.surname = 'Smith'; // добавить новое свойство
// delete user.surname; // удалить новое свойство

// let length = Object.keys(user).length;
// console.log(length); //  кол-во свойств

// for (let key in user) {
//     console.log(key); // все ключи: name age isAdult
//     console.log(user[key]); // все значения: 30 isAdult true
// }

//   4. Создайте ассоциативный массив (объект) заработных плат obj. 
//   Выведите на экран зарплату Пети и Коли.
const obj4 = {
  'Коля':'1000',
  'Вася':'500', 
  'Петя':'200'
};
let salaries = Object.entries(obj4);
console.log(salaries); // [ [ 'Коля', '1000' ], [ 'Вася', '500' ], [ 'Петя', '200' ] ]
//console.log(salaries[i]); [ 'Коля', '1000' ] & [ 'Вася', '500' ] & [ 'Петя', '200' ]
//console.log(salaries[i][0]); 'Коля' & 'Вася' & 'Петя'
//console.log(salaries[i][1]); '1000' & '500' & '200'

for(let i = 0; i < salaries.length; i++) {
    if(salaries[i][0] === 'Коля' || salaries[i][0] === 'Петя'){
        console.log(salaries[i][1])
    }
}