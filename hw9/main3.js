// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//


document.getElementById('btn').onclick = function (e) {
    e.preventDefault()
    let body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    for(const i = 0; i < 5; i++){
        let tr = tbl.insertRow();
        let el, td;
        for(var j = 0; j < 5; j++){

            td = tr.insertCell();
            el = document.createElement('input');
            el.value = 'text';
            el.setAttribute('type', 'text');
            el.setAttribute('name', `input-${i}-${j}`);
            td.appendChild(el);
            td.style.border = '1px solid black';

        }
    }
    body.appendChild(tbl);


    // let row = document.createElement('tr');
    // let td = document.createElement('td');
    //
    //
    // row.appendChild(table);
    // td.appendChild(table);
    // table.innerText = description
//     document.body.appendChild(table);
// }