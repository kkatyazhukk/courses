// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
// let user = new User("Вася");
// console.log(user); // User { name: 'Вася', isAdmin: false }
// console.log(user.name); // Вася
// console.log(user.isAdmin); // false


// Создание методов в конструкторе
function User(name) {
    this.name = name;
    this.sayHi = function() {
      console.log( "Меня зовут " + this.name );
    };
  }
  
let vasya = new User("Вася");
vasya.sayHi(); // Меня зовут Вася
console.log(vasya); // User { name: 'Вася', sayHi: [Function (anonymous)] }


//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

function Calculator() {
    this.a = 5;
    this.b = 10;

    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
let calculator = new Calculator();
console.log(calculator); //Calculator { a: 5, b: 10, sum: [Function (anonymous)], mul: [Function (anonymous)]}
console.log( "Sum=" + calculator.sum() ); // Sum=15
console.log( "Mul=" + calculator.mul() ); // Mul=50