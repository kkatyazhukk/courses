//замыкание — функция, которая ссылается на свободные переменные в своей области видимости.
//Замыкание — это особый вид функции. Она определена в теле другой функции и создаётся 
// каждый раз во время её выполнения. Синтаксически это выглядит как функция, находящаяся 
// целиком в теле другой функции. При этом вложенная внутренняя функция содержит ссылки 
// на локальные переменные внешней функции. Каждый раз при выполнении внешней функции 
// происходит создание нового экземпляра внутренней функции, с новыми ссылками на 
// переменные внешней функции.

// function makeCounter() {
//     let count = 0; // эта строка исп-ся только один раз
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter1 = makeCounter(); // это был вызов функции!!!
    //функция отработала и вернула нам новую ф-цию function() {return count++;}
    // count сохранила значение 0 и была как будто замкнута.
//   let counter2 = makeCounter();
  
//   console.log( counter1() ); // 0  --- в count сохранено было 0
    //  вызвалась функция function() {return count++;}
    // count перезаписался с 0 на 1
//   console.log( counter1() ); // 1 --- в count сохранено было 1
     // count перезаписался с 1 на 2
  
//   console.log( counter2() ); // 0 (независимо)




function createCalcFunction(n) {
    return function (){
      console.log(1000 * n);
    }
  }

const calc = createCalcFunction(42); // функция отработала и вернула нам новую ф-цию function (){console.log(1000 * n);}
//n сохранила значение 42 и была как будто замкнута
console.log(calc); //[Function (anonymous)]
calc(); //42000



function createIncrementor(n){
  return function(num){
    return n + num;
  }
}

const addOne = createIncrementor(1); // т.е. n = 1, это число замкнулось, будет всегда исп-ся
console.log(addOne(10)); // т.е. вызывается ф-ция function(num){return 1 + num;}, где num = 10
console.log(addOne(100)); //101



function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator('com'); //ф-ция отработала и вернула нам новую ф-цию function(url) {return `https://${url}.com`}
 //domain сохранила в себя значение 'com'

console.log(comUrl('google')); // т.е. вызывается ф-ция function(url) {return `https://${url}.com`} где url = google
console.log(comUrl('netflix'));