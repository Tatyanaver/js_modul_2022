// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, "Olya",'Petrova', 'olya@ukr.net', '+380661235689')
let user2 = new User(2, "Kolya",'Ivanov', 'kolya@ukr.net', '+380661235688')
let user3 = new User(3, "Tanya",'Orlova', 'tanya@ukr.net', '+380661235687')
let user4 = new User(4, "Anna",'Ignatova', 'anna@ukr.net', '+380661235686')
let user5 = new User(5, "Ivanna",'Gunko', 'ivanna@ukr.net', '+380661235678')
let user6 = new User(6, "Valentina",'Golovko', 'valentina@ukr.net', '+380661235685')
let user7 = new User(7, "Dima",'Kostuchenko', 'dmitriy@ukr.net', '+380661235683')
let user8 = new User(8, "Sergiy",'Mishenko', 'sergiy@ukr.net', '+380661235682')
let user9 = new User(9, "Tolya",'Smaragdov', 'tolya@ukr.net', '+380661235681')
let user10 = new User(10, "Ira",'Sushko', 'irina@ukr.net', '+380661235670')

let users = [];
users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = users.filter(function (value) {
return value.id%2===0})
console.log(filterUsers)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = users.sort( (a,b)=> {
    return a.id - b.id})
console.log(sortUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client1 = new Client(1,"Olya",'Petrova', 'olya@ukr.net', '+380661235689', ['apples','juice','milk','water', 'candies', 'cheese','wine'])
let client2 = new Client(2, "Kolya",'Ivanov', 'kolya@ukr.net', '+380661235688', ['apples','juice'])
let client3 = new Client(3, "Tanya",'Orlova', 'tanya@ukr.net', '+380661235687',['milk','candy'])
let client4 = new Client(4, "Anna",'Ignatova', 'anna@ukr.net', '+380661235686', ['bread','candy', 'gingerbread','yogurt'])
let client5 = new Client(5, "Ivanna",'Gunko', 'ivanna@ukr.net', '+380661235678',['water','orange','lime'])
let client6 = new Client(6, "Valentina",'Golovko', 'valentina@ukr.net', '+380661235685',['lamp','pens','pencil','toy', 'ball'])
let client7 = new Client(7, "Dima",'Kostuchenko', 'dmitriy@ukr.net', '+380661235683',['bread', 'milk','water'])
let client8 = new Client(8, "Sergiy",'Mishenko', 'sergiy@ukr.net', '+380661235682', ['juise', 'apples','limes', 'yogurt'])
let client9 = new Client(9, "Tolya",'Smaragdov', 'tolya@ukr.net', '+380661235681', ['candies','pie','yogurt'])
let client10 = new Client(10, "Ira",'Sushko', 'irina@ukr.net', '+380661235670',['yogurt', 'gingerbread', 'cheese','meat','wine'])

let clients = [];
clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = clients.sort( (a,b)=> {
    return a.order.length - b.order.length})
console.log(sortClients)



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year,maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function (){
        return `їдемо зі швидкістю ${maxSpeed} км на годину`
        }

    this.info = function (){
        for (const field in this){
            if (typeof this[field]!=='function'){
                console.log(`${field} - ${this[field]}`)
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        return maxSpeed+=newSpeed
    }
    this.changeYear = function (newValue){
        return year+=newValue
    }
    this.addDriver = function (driver){
        this.driver = driver
    }
}

let someCar = new Car('mazda', 'Japan', 2010, 240, '2l')
console.log(someCar);
console.log(someCar.drive());
someCar.info();
console.log(someCar.increaseMaxSpeed(50));
console.log(someCar.changeYear(3));
someCar.addDriver({name:'Ivan', age:22})



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class AnotherCar{
    constructor (model, producer, year,maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.drive = function () {
            return `їдемо зі швидкістю ${maxSpeed} км на годину`
        }
        this.info = function (){
        for (const field in this){
            if (typeof this[field]!=='function'){
                console.log(`${field} - ${this[field]}`)
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        return maxSpeed+=newSpeed
    }
    this.changeYear = function (newValue){
        return year+=newValue
    }
    this.addDriver = function (driver){
        this.driver = driver
    }
}}

let car1 = new AnotherCar('bmw', 'Germany', 2015, 250, '3l')
console.log(car1);
console.log(car1.drive());
    car1.info();
console.log(car1.increaseMaxSpeed(50));
console.log(car1.changeYear(3));
    car1.addDriver({name:'Ivan', age:22})


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function Cinderella (name, age, sizeOfFoot) {
        this.name = name;
        this.age = age;
        this.sizeOfFoot = sizeOfFoot;
}
    let cinderella1 = new Cinderella('Olya', 28, 36);
    let cinderella2 = new Cinderella('Anya', 26, 37);
    let cinderella3 = new Cinderella('Masha', 24, 38);
    let cinderella4 = new Cinderella('Dasha', 25, 36,5);
    let cinderella5 = new Cinderella('Marianna', 28, 35);
    let cinderella6 = new Cinderella('Lina', 21, 39);
    let cinderella7 = new Cinderella('Lena', 22, 38);
    let cinderella8 = new Cinderella('Katya', 23, 37);
    let cinderella9 = new Cinderella('Ira', 19, 38);
    let cinderella10 = new Cinderella('Inna', 35, 37,5);

    let cinderellas = [];
    cinderellas.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10);
    console.log(cinderellas)

class Prince{
    constructor(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;}
}
let somePrince = new Prince('Sergiy', 33, 39)
console.log(somePrince)

const findCinderella = (arrayCinderellas,prince)=> {
    for (const cind of arrayCinderellas) {
        if (cind.sizeOfFoot === prince.size){
            console.log (`You find cinderella ${cind.name}`)}
}
}
findCinderella(cinderellas,somePrince)


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = cinderellas.find(item=>item.sizeOfFoot===somePrince.size);
console.log(find)



