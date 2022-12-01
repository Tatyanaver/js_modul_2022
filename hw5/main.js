// 1- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a,b) {
    return a*b;
}
let s = square(10,15)
console.log(s);


// 2- створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return Math.PI*r*2;
}
let area = areaCircle(3);
console.log(area);


// 3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaOfСylinder(r,h) {
    return 2*Math.PI*r*h;
}

let areaCyl = areaOfСylinder(10,20)
console.log(areaCyl);

// 4- створити функцію яка приймає масив та виводить кожен його елемент
function arrayOfNumbers(arr) {
    for (const elem of arr){
        console.log(elem)
    }
}
arrayOfNumbers([10,20,30,40,50])


// 5- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function someText(tag,text) {
    document.write(`<${tag}>${text}</${tag}>`);
}
someText('p', 'Hello friend! How are you?')


// 6- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function someList(text) {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`);
}
someList(`How are you?`)


// 7- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list(text,listItem) {
    document.write(`<ul>`)
    for (let i=0; i<listItem; i++)
    {document.write(`<li>${text}</li>`)}
    document.write(`</ul>`)
}
list("Hello friend",3)


// 8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayOfElements(someArray) {
    for (const e of someArray){
        {document.write(`<li>${e}</li>`)}
}
}
arrayOfElements([10,20,true, 30,40, 'hi',50])



// 9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrayOfUsers(users) {
    for (const user of users) {
        document.write(`<p>${user.name} ${user.age}</p>`)
    }
}
let someUsers = [
    {id:1, name: 'vasya', age: 31},
    {id:2, name: 'petya', age: 30},
    {id:3, name: 'kolya', age: 29},
    {id:4, name: 'olya', age: 28},
]
arrayOfUsers(someUsers);

// 10- створити функцію яка повертає найменьше число з масиву

let Numb = [11,89,-340, 7,56,101,74,-5,-100];
function minNumber(arguments){
    for (let i = 0; i < Numb.length; i++) {
        if(Numb[i] < Numb[0]){
            Numb[0] = Numb[i];
        }
    }
    return(Numb[0]);
}
let min = minNumber(Numb)
console.log(min)

// 11- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let Numbers = [11,89,7,56,101,74, -111, -35]
let sumOfNums = (array) => {
    let n = 0;
    for (const arrayElement of array) {
        n += arrayElement;}
    return n;
};

const sum = sumOfNums(Numbers)
console.log(sum);