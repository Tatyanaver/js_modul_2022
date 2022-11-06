// 1 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log
let str1 = 'hello'
console.log(str1)

let str2 = 'owu'
console.log(str2)

let str3 = 'com'
console.log(str3)

let str4 = 'ua'
console.log(str4)

let num1 = 1
console.log(num1)

let num2 = 10
console.log(num2)

let num3 = -999
console.log(num3)

let num4 = 123
console.log(num4)

const PI = 3.14
console.log(PI)

let num5 = 2.7
console.log(num5)

let num6 = 16
console.log(num6)

let bool1 = 'true'
console.log(bool1)

let bool2 = 'false'
console.log(bool2)

// 2 Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Finkbainer'
let middleName = 'Tetiana'
let lastName = 'Mykolaivna'

let person = `${firstName} ${middleName} ${lastName}`
console.log(person)

// 3 За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100
console.log(typeof a);
let b = "100"
console.log(typeof b);
let c = true
console.log(typeof c);

// 4- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = +prompt("Введіть ім'я");
console.log(name);
let midName = +prompt('Введіть по-батькові');
console.log(midName);
let age = +prompt('Введіть ваш вік');
console.log(age);
