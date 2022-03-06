// Задачи
// - нужен код который выведет "начало работы" и дата (new Date) с точностью до секунды или 
//   выше, 
// 	 через 4 секунда выведет "Обед" и дату с точностью до секунды
// 	 через 5 секунд выведет "конец работы" и дату с точностью до секунды
// setTimeout(() => {
//     console.log(`Workday is started at ${new Date()}`);
//     setTimeout(() => {
//         console.log(`Lunch time at ${new Date()}`);
//         setTimeout(() => {
//             console.log(`Workday is finished at ${new Date()}`);
//         }, 5000);
//     }, 4000)
// })

const { get } = require("https");

// setTimeout(() => {
//     console.log(`Another Workday is started at ${new Date()}`);
//     setTimeout(() => {
//         console.log(`Another Lunch time at ${new Date()}`);
//         setTimeout(() => {
//             console.log(`Another Workday is finished at ${new Date()}`);
//         });
//     }, 4000)
// })

// - запустить счетчик который будет увеличиваться на 1 каждую секунду и писать в консоль
// let counter = 0;
// setInterval(() => {
//     console.log(`Counter is increased ${++counter}`);
// }, 1000)

// - написать код который напишет Hello , 
// 	через рандомный промежуток времени прибавит World и напишет Hello World 
// 	через рандомный промежуток времени прибавит ", I'm@ и напишет Hello World, I'm
// 	через рандомный промежуток времени прибавит  here и напишет Hello World, I'm here 
// 	текст передавать как параметер колбэка, максимальное время ожидания 5 сек

function getRandom() {
    return Math.floor(Math.random() * (5000 - 1 + 1) + 1);
}
let str = '';
setTimeout(() => {
    str = 'Hello';
    console.log(`${str}`);
    let time = getRandom();
    setTimeout(() => {
        str = `${str} World`;
        console.log(`${str}`);
        let time = getRandom();
        setTimeout(() => {
            str = `${str}, I'm`;
            console.log(`${str}`);
            let time = getRandom();
            setTimeout(() => {
                str = `${str} here`;
                console.log(`${str}`);
            }, time)
        }, time)
    }, time)
})