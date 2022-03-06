// 1. Получите из объекта obj значение id и разместите его в константу userId.
const obj1 = {
    id: 5,
    token: 12343423
};

const userId = obj1.id;
console.log(userId)

//2.Получите из объекта obj значение id в констанду id не используя выражение obj1.id
const obj2 = {
    id: 5,
    token: 12343423
};

const userId1 = obj2['id'];
console.log(userId1)
// 3. Проверьте, что этот объект не пустой и что в нем есть ключ age.
let user = {
    name: "John",
    age: 30
  };

if(Object.keys(user).length === 0) {
    console.log(`Object do not have proprties`);
} else {
    console.log(`Object have propertis ${Object.keys(user).toString()}`)
}

//   4. Создайте ассоциативный массив (объект) заработных плат obj. 
//   Выведите на экран зарплату Пети и Коли.
// const obj4 = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
// let salaries = Object.entries(obj4);
// for(let i = 0; i < salaries.length; i++) {
//     if(salaries[i][0] === 'Коля' || salaries[i][0] === 'Петя'){
//         console.log(salaries[i][1])
//     }
// }

// 5. Проверьте, что строка начинается на http://.
// function checkString(str) {
//     let newStr = str.substr(0, 7);
//     if(newStr === 'http://') {
//         console.log('Yes')
//     } else {
//         console.log('No')
//     }
// }
// checkString('http://dsfdfdsfsdf')
// checkString('ererehttp://dsfdfdsfsdf')

// function checkString1(str) {
//     if(str.startsWith('http://')) {
//         console.log('Yes')
//     } else {
//         console.log('No')
//     }
// }

// checkString1('http://dsfdfdsfsdf')
// checkString1('ererehttp://dsfdfdsfsdf')

// 6. Проверьте, что строка заканчивается на .html.
// function checkString(str) {
//     if(str.endsWith('.html')) {
//         console.log('Yes')
//     } else {
//         console.log('No')
//     }
// }
// checkString('efefsdf.html')
// checkString('dfjdmf.htmldlfdf')
// 7. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.