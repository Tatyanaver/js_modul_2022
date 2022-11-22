// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world'
let str2 = 'lorem ipsum'
let str3 = 'javascript is cool'
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let text1 = 'hello world'
let toUpperCaseText1 = text1.toUpperCase()
console.log(toUpperCaseText1);
let text2 = 'lorem ipsum'
let toUpperCaseText2 = text2.toUpperCase()
console.log(toUpperCaseText2);
let text3 = 'javascript is cool'
let toUpperCaseText3 = text3.toUpperCase()
console.log(toUpperCaseText3);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(toUpperCaseText1.toLowerCase())
console.log(toUpperCaseText2.toLowerCase())
console.log(toUpperCaseText3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let newStr = str.trim();
console.log(newStr);
console.log(newStr.length);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let string1 = 'Ревуть воли як ясла повні';
let arr = string1.split(' ')
console.log(arr)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrayOfNumbers = [10,8,-7,55,987,-1011,0,1050,0]
let strArray = arrayOfNumbers.map(value => value.toString())
console.log(strArray)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let sortOfNums = nums.sort (function (a,b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
})
console.log(sortOfNums);

let sortNums = nums.sort (function (a,b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
})
console.log(sortNums)

// -- відсортувати масив за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortMonthDuration = coursesAndDurationArray.sort((m1,m2) => {
return m2.monthDuration - m1.monthDuration
})
console.log(sortMonthDuration)

let filterMonthDuration = coursesAndDurationArray.filter(function (value) {
    return value.monthDuration > 5}
)
console.log(filterMonthDuration)

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'},
    {cardSuit:'', value: 'Joker1', color:''},
    {cardSuit:'', value: 'Joker2', color:''}
];
 let findSpadeAce = deck.find (item => item.cardSuit==='Spade' & item.value==='Ace');
 console.log(findSpadeAce)

let findSix = deck.filter(item => item.value === 6) ;
console.log(findSix)

let findRedCards = deck.filter(item => item.color === 'Red')
console.log(findRedCards)

let findDiamonds = deck.filter(item => item.cardSuit==='Diamonds')
console.log(findDiamonds)

let findClubsMoreNine = deck.filter(item => item.cardSuit==='Clubs' & item.value > 8 || item.value.length > 1)
console.log(findClubsMoreNine)




// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
