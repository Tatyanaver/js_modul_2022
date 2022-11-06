// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// 1
let array = [23, 999, true, 'book', -80, -10000, false, 'genre', 'author', 'page'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// 2
let book1 = {
    title: 'A Study in Scarlet',
    pageCount: 345,
    genre: 'detective',
}
console.log(book1)

let book2 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 350,
    genre: 'fantasy novel',
}
console.log(book2)

let book3 = {
    title: 'The Adventures of Tom Sawyer',
    pageCount: 250,
    genre: 'novel',
}
console.log(book3)

// 3
let book11 = {
    title: 'A Study in Scarlet',
    pageCount: 345,
    genre: 'detective',
    author: ['Conan Doyle', '45']
}
console.log(book11);
console.log(book11.author);

let book12 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 350,
    genre: 'fantasy novel',
    author: ['Rowling', '46']
}
console.log(book12);
console.log(book12.author);

let book13 = {
    title: 'The Adventures of Tom Sawyer',
    pageCount: 250,
    genre: 'novel',
    author: ['Mark Twain', '65']
}
console.log(book13);
console.log(book13.author);

// 4

let users = [
    {name:'Olya', username: 'olga', password:'uyigy'},
    {name:'Masha', username: 'mariya', password:'gfuguyg'},
    {name:'Tanya', username: 'tetiana', password: 'fhfhfhg'},
    {name:'Kolya', username: 'nikolay', password: 'gfhgh'},
    {name:'Vasya', username: 'vasiliy', password: 'kjlkjl'},
    {name:'Tonya', username: 'antonina', password: 'hggkhk'},
    {name:'Vanya', username: 'ivan', password: 'hjhcgfxfd'},
    {name:'Anna', username: 'anna', password: 'fhgjhgjh'},
    {name:'Vasilisa', username: 'vasilisa', password: 'dxfdssde'},
    {name:'Andriy', username: 'andriy', password: 'ffstftf'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
