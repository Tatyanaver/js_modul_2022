// 1 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'ira', age: 41, status: true},
    {name: 'sergiy', age: 40, status: false},
    {name: 'ivan', age: 39, status: false},
    {name: 'kirill', age: 33, status: true},
    {name: 'oleksiy', age: 22, status: false},
    {name: 'tanya', age: 18, status: true},
    {name: 'nadya', age: 15, status: false},
    {name: 'oleksandr', age: 45, status: true},
    {name: 'natasha', age: 60, status: false},
];

// 1.1
for (let j = 0; j < users.length-10; j++) {
    document.write(`<div>Ім'я - ${users[j].name}, вік - ${users[j].age}</div>`)}

// 1.2
for (let n=0; n< users.length-10; n++) {
    document.write(`<div>${users[n].name} - ${n}</div>`)}

// 1.3
let i = 0
while (i < users.length) {
    document.write(`<h1>${users[i].name}</h1>`)
    i++
}

// 1.4
let a = 0
while (a < users.length) {
    document.write(`<h1>${users[a].name} - ${a}</h1>`)
    a++
}

// 2 - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
//      let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const item of listOfItems) {
    document.write(`
    <ul>
    <li>${item}</li>    
    </ul>`)
}

// 3 -  Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// --------------------
let products = [
    {   title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    document.write(`
    <div class="product-card">
    <h3 class="product-title">${product.title.toUpperCase()} - ${product.price} UA
    </h3>
    <img src="${product.image}" alt="photo of item" class="product-image"> 
    </div>`)
}

// 4
// є масив
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let someUsers = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const someUser of someUsers) {
    if (someUser.status)
    document.write(`
    <h3>Користувачі із статусом true:
    ${someUser.name}, ${someUser.age}, ${someUser.status}</h3>
    `)}

for (const falseUser of someUsers) {
    if (!falseUser.status)
    document.write(`
    <h3> Користувачі із статусом false:
    ${falseUser.name}, ${falseUser.age}, ${falseUser.status}</h3>
    `)}

for (const ageUser of someUsers) {
    if (ageUser.age > 30)
    document.write(`
    <h3>Користувачі старші 30:
    ${ageUser.name}, ${ageUser.age}, ${ageUser.status}</h3>
    `)}
