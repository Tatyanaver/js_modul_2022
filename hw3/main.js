
// 1 - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 100
if (x>0) {
    document.write('<h1>вірно</h1>');
} else if (x<0) {
    document.write('<h1>вірно</h1>');
} else if (x===0) {
    document.write('<h1>не вірно</h1>')
}
let a=1
// let a=0
// let a=-3
if (a>0) {
    document.write('<h1>вірно</h1>');
} else if (a<0) {
    document.write('<h1>вірно</h1>');
} else if (a===0) {
    document.write('<h1>не вірно</h1>')
}



// 2 - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 30
if (time>0 && time<=15) {
    document.write('<h1>перша чверть години</h1>');
} else if (time>15 && time<=30) {
    document.write('<h1>друга чверть години</h1>');
} else if (time>30 && time<=45) {
    document.write('<h1>третя чверть години</h1>')
} else if (time>45 && time<=59) {
    document.write('<h1>четверта чверть години</h1>')
}

// 3 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let num = 20;
if (num>0 && num<=10) {
    document.write('<h1>перша декада місяця</h1>');
} else if (num>10 && num<= 20) {
    document.write('<h1>друга декада місяця</h1>');
} else if (num>20 && num<=30) {
    document.write('<h1>третя декада місяця</h1>')
}


// 4  - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day = +prompt('введіть день тижня');
switch (day) {
    case 1:
        console.log('План на понеділок');
        break;
    case 2:
        console.log('План на вівторок');
        break;
    case 3:
        console.log('План на середу');
        break;
    case 4:
        console.log('План на четвер');
        break;
    case 5:
        console.log('План на пятницю');
        break;
    case 6:
        console.log('План на субботу');
        break;
    case 7:
        console.log('План на неділю');
        break;
    default:
        console.log('введіть день тижня')
}

// 5 - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let num1 = 98
let num2 = 8
if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else { console.log("числа рівні");}




// 6  є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// // за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let xxx = 'word'
let unKnown = null
if (xxx || unKnown) {
    console.log(xxx)}
else {console.log(xxx = 'default')
}

// або

let xx;
if (xx=7898798 || false) {
    console.log(xx)}
else {console.log(xx = 'default')
}