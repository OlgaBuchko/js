// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
let wrap = document.createElement('div');
wrap.classList.add('wrap', 'collapse', 'alpha', 'beta');
document.body.appendChild(wrap);
let wrap2 = wrap.cloneNode(true);
document.body.appendChild(wrap2);
// - Є масив:
 let arrey =  ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
let ul = document.getElementsByClassName('menu');
console.log(ul);
for (const string of arrey) {
   let li = document.createElement('li');
li.textContent=string;

ul[0].appendChild(li);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
 let div = document.createElement('div');
 document.body.appendChild(div);
 div.textContent= coursesAndDurationArrayElement.title+' '+coursesAndDurationArrayElement.monthDuration;
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('item');
    let h1 = document.createElement('h1');
    div.appendChild(h1);
    h1.classList.add('headding');
    let p = document.createElement('p');
    div.appendChild(p);
    p.classList.add('description');
    h1.textContent = coursesAndDurationArrayElement.title;
    p.textContent = coursesAndDurationArrayElement.monthDuration;
}