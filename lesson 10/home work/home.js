// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let element = document.createElement('div');
// document.body.appendChild(element);
// element.id = "text"
// element.innerText='lorem';
// let buttom_closs = document.createElement('button');
// buttom_closs.innerText = 'close';
// document.body.appendChild(buttom_closs);
// buttom_closs.onclick = function (){
//     let id_text = document.getElementById('text')
//     id_text.style.display= 'none'
// };
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let buttom_closs = document.createElement('button');
// buttom_closs.innerText = 'close';
// document.body.appendChild(buttom_closs);
// buttom_closs.onclick = function (){
//     buttom_closs.style.display= 'none'
// };
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// let input = document.createElement('input');
// document.body.appendChild(input);
// input.name= 'user_age';
// input.type = "number";
// input.id= 'age';
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'ok';
// button.onclick = function (e) {
//     e.preventDefault();
//     let age = document.getElementById('age').value;
//
//     if (age>= 18){
//         alert('повнолітній')
//     }else {
//         alert('не повнолітній')
//     }
// }
// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
let menu = document.createElement("button");
document.body.appendChild(menu);
menu.innerText = 'menu';
let ul = document.createElement('ul');
document.body.appendChild(ul);
let li1 = document.createElement('li');
ul.appendChild(li1);
li1.innerText= 'пункт 1';
let li2 = document.createElement('li');
ul.appendChild(li2);
li2.innerText= 'пункт 2';
let li3 = document.createElement('li');
ul.appendChild(li3);
li3.innerText= 'пункт 3';
let li4 = document.createElement('li');
ul.appendChild(li4);
li4.innerText= 'пункт 4';
let li5 = document.createElement('li');
ul.appendChild(li5);
li5.innerText= 'пункт 5';

menu.onclick = function () {
    ul.classList.toggle('none')

}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let arr_coments=[{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti1'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti2'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti3'},
    {title : 'lorem4', body:'lorem ipsum dolo sit ameti4'}];
for (const Coment of arr_coments)
{
    let div = document.createElement('div');
    document.body.appendChild(div);
           let h1 = document.createElement('h1');
           div.appendChild(h1);
           h1.innerText = Coment.title;
           let h3 = document.createElement("h3");
           div.appendChild(h3);
           h3.innerText = Coment.body;
     let button = document.createElement("button");
     button.innerText = 'тицьни тут';
    div.appendChild(button);
    button.onclick = function () {
        h3.classList.toggle("none")
    }




}
