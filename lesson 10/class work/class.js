
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let form_one = document.createElement('form');
// form_one.setAttribute('name', 'formone');
// document.body.appendChild(form_one);
// let form_two = document.createElement('form');
// document.body.appendChild(form_two);
// form_two.setAttribute('name', 'formtwo');
// let inpute_one = document.createElement('input');
// inpute_one.setAttribute('name','inputeone')
// let inpute_two = document.createElement("input");
// inpute_two.setAttribute('name','inputetwo');
// let inpute_three = document.createElement("input");
// inpute_three.setAttribute('name','inputethree')
// let input_four = document.createElement('input');
// input_four.setAttribute('name','inputfour');
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText= 'тицьни тут';
// form_one.append(inpute_one,inpute_two);
// form_two.append(inpute_three,input_four);
// button.addEventListener('click', function (){
//     console.log(document.forms.formone.inputeone.value);
//     console.log(document.forms.formone.inputetwo.value);
//     console.log(document.forms.formtwo.inputethree.value);
//     console.log(document.forms.formtwo.inputfour.value);
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let form = document.createElement('form');
// document.body.appendChild(form)
// let inpute_one = document.createElement('input');
// inpute_one.setAttribute('name','inputeone');
// inpute_one.setAttribute('type','number');
// form.appendChild(inpute_one);
// let inpute_two = document.createElement("input");
// inpute_two.setAttribute('name','inputetwo');
// inpute_two.setAttribute('type','number');
// form.appendChild(inpute_two);
// let inpute_three = document.createElement("input");
// inpute_three.setAttribute('name','inputethree');
// inpute_three.setAttribute('type','text');
// document.body.appendChild(inpute_three);
// let button = document.createElement('button');
// form.appendChild(button);
// button.innerText= 'табличкка';
// form.onsubmit = function (e){
//     e.preventDefault();
//     let row = +inpute_one.value;
//     let column = +inpute_two.value;
//     let content = inpute_three.value;
//    let table = document.createElement('table')
//
//     for (let i = 0; i < row; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);
//         for (let j = 0; j < column; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             td.innerText = content;
//
//         }
//     }
//     document.body.appendChild(table);
// }





//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//

// let arr = ["свиня", "козел", "придурок","ідіот"];
// let form = document.createElement('form');
// document.body.appendChild(form)
// let inpute = document.createElement("input");
// inpute.setAttribute('name','inputethree');
// inpute.setAttribute('type','text');
// form.appendChild(inpute);
// let button = document.createElement('button');
// form.appendChild(button);
// button.innerText='тицяй'
// button.onclick = function (e){
//     e.preventDefault();
// for (const arrElement of arr) {
//     if (inpute.value === arrElement){
//         alert('ай-яй-яй')
//     }
// }}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let arr = ["свиня", "козел", "придурок","ідіот"];
let form = document.createElement('form');
document.body.appendChild(form)
let inpute = document.createElement("input");
inpute.setAttribute('name','inputethree');
inpute.setAttribute('type','text');
form.appendChild(inpute);
let button = document.createElement('button');
form.appendChild(button);
button.innerText='тицяй'
button.onclick = function (e){
    e.preventDefault();
    for (const arrElement of arr) {
      let inp_split = inpute.value.split(" ");
        for (const string of inp_split) {
            if (string === arrElement){
                alert('ай-яй-яй')
        }
        }

    }}