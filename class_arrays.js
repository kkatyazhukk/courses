// 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(key of arr) {
//     console.log(key);
// }

// 2. Выведите столбец чисел от 1 до 50.
// for(let i = 1; i <= 50; i++) {
//     console.log(i)
// }

// 3. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
let arr3 = [2, 3, 4, 5];
// let m = 1;
// for(key of arr3) {
//     m *= key;
// }
// console.log(m);
// let newArr3 = arr3.reduce(function (a, b) {
//     return a * b;
// });
// console.log(newArr3);
// 4. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
let str4 = '2025-12-31';
// let newStr4 = str4.split('-').reverse().join('/');
// console.log(newStr4);

// 5. Преобразуйте первую букву строки в верхний регистр.
let str5 = 'hello world';
// let letter = str5[0].toUpperCase() + str5.slice(1);
// console.log(letter);
// 6. Преобразуйте первую букву каждого слова строки в верхний регистр.
let str6 = 'я учу javascript!';
// let newStr6 = str6.split(' ');
// let newStr61 = []
// for(i of newStr6) {
//     newStr61.push(i[0].toUpperCase() + i.slice(1)); 
// }
// console.log(newStr61.join(' '));

// 7. Преобразуйте строку 'let_test_text' в 'letTestText'. Скрипт, конечно же, должен работать с любыми 
// аналогичными строками.
let str7 = 'let_test_text';
// let newStr7 = str7.split('_');
// let arr7 = [];
// for(let i = 0; i < newStr7.length; i++) {
//     if(i === 0) {
//         arr7.push(newStr7[i])
//     } else {
//         arr7.push(newStr7[i][0].toUpperCase() + newStr7[i].slice(1))
//     }
//  }
//  console.log(arr7.join(''))

// 8. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
let obj8 = {
    green: 'зеленый', 
    red: 'красный', 
    blue: 'голубой'
}
// for(key in obj8) {
//     console.log(`${key} = ${obj8[key]}`);
// }
//9. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 
// 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 
// 'Минск - это Беларусь.'.
let obj9 = {
	'Минск': 'Беларусь',
	'Москва': 'Россия',
	'Киев': 'Украина'
};

// for(key in obj9) {
//     console.log(`${key} - это ${obj9[key]}`)
// }

//10. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
let arr101 = [1, 2, 3];
let arr102 = [4, 5, 6];
// let arr103 = arr101.concat(arr102);
// arr101.push(...arr102);
// console.log(arr103);
// console.log(arr101);

// 11. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arr11 = [1, 2, 3, 7, 3, 8];
// let newArr11 = arr11.reverse();
// console.log(newArr11)
// 12. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5,  а в начало 0.
let arr12 = [1, 2, 3];
// arr12.push(4, 5);
// arr12.unshift(0);
// console.log(arr12);
// 13. Дан массив [1, 2, 3, 4, 5]. С помощью метода массива запишите в новый элементы [1, 2, 3].
let arr13 =[1, 2, 3, 4, 5];
// let newArr13 = arr13.slice(0, 3);
// console.log(newArr13);
// 14. Дан массив [3, 4, 21, 1, 2, 7, 11]. Отсортируйте его.
let arr14 = [3, 4, 21, 1, 2, 7, 11];
// let newArr14 = arr14.sort((a, b) => a - b);
// console.log(newArr14);

// 15. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. 
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = 0
// if(a > 0 && a <= 5) {
//     console.log(`True`)
// } else {
//     console.log(`False`)
// }

// 16.В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число 
// (в первую, вторую, третью или четвертую). 
// let a = 10;
// switch(a) {
//     case a <= 15:
//         console.log('First');
//         break;
//     case a > 15 && a <= 30:
//         console.log('Second');
//         break;
//     case a
// }
// 17. нужно получить [{name: "a", square: "120"},{name: "b", square: "168"},{name: "c", square: "165"}] 
let ssa = [{name: "a", width: "10", length:"12"}, 
{name: "b", width: "12", length:"14"},
{name: "c", width: "15", length:"11"}]

let ssa1 = ssa.map((a) => {
    return {
        square: a.width * a.length,
        name: a.name
    }
});
// for(let i = 0; i < ssa.length; i++) {
//     ssa1.push({
//         square: ssa[i].width * ssa[i].length,
//         name: ssa[i].name
//     })
// }
//console.log(ssa1);

// 18. Найти площать и периметр, отобразаить в одном объекте.
let arr18 = [ {sideLength: 7 }, { sideLength: 13 }, { sideLength: 17 }];

let newArr18 = arr18.map(a => {
    return {
        s: a.sideLength * a.sideLength,
        p: a.sideLength * 4
    }
})

console.log(newArr18)