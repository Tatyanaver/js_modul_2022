// 4- Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//

let menu = document.getElementsByClassName('menu')[0];
let someArray = ['Main','Products','About us','Contacts'];
for (const item of someArray) {
    let listElem = document.createElement('li');
    listElem.innerText = `${item}`;
    menu.appendChild(listElem);
}
