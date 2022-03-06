// //Функция, которая явл-ся свойством объекта, наз-ся методом этого объекта

// let user = {
//     name: 'John',
//     age: 30
//   };
  
// user.sayHi = function() {
//     console.log('Hi');
//   };
  
// user.sayHi(); // Привет!
// console.log(user); // { name: 'John', age: 30, sayHi: [Function (anonymous)] }
// // добавилась функция в user


// //сокращенная запись, можно убрать слово function
// let male = {
//     sayHi() {
//         console.log("Привет");
//     }
//   };

// male.sayHi();  


let user2 = {
    name: "Джон",
    age: 30,
    sayHi() {
       console.log(`Hi, ${this.name}`);
    }  
  };
  
user2.sayHi(); //Hi, Джон

//Создайте объект calculator (калькулятор) с тремя методами:
let calculator = {
    a: 5,
    b: 10,
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

console.log(calculator.sum()); // 15
console.log(calculator.mul()); // 50