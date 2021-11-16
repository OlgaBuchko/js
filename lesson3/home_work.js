// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrey1 = [34,5,987,-82,4];
// let arrey2 = ["hello", "bye", "home", "vasya","kolya"];
// let arrey3 = [-82, 4, "hello", "bye", true];
// console.log(arrey3,arrey2,arrey1);
//



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let arrey4 = [];
// arrey4[3]="dimma";
// arrey4[2]="ira";
// arrey4[0]= 87;
// arrey4[1]=false;
// console.log(arrey4);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>hello mentor</div>`)
//
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>hello mentor ${i}</div>`)
//
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i =0;
// while (i<20){
//     document.write(`<h1>довільний текст</h1>`)
//
// i++;}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i =0;
// while (i<20){
//     document.write(`<h1>довільний текст ${i}</h1>`)
//
// i++;}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrey = [4,23,-3,54,56,-76,-5,0,6, 32];
// for (const number of arrey) {
//     console.log(number)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let areey = ["hello", "bye", "home", "vasya","kolya", "ira", "vika","roman","petro","stop"];
// for (const string of areey) {
//     console.log(string)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrey = [-82, 4, "hello", "bye", true, undefined,null, -654, "home",false];
// for (const arreyElement of arrey) {
//     console.log(arreyElement)
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrey = [-82, 4, "hello", "bye", true, undefined,null, -654, "home",false];
// for (const arreyElement of arrey) {
// if  (typeof arreyElement === "boolean" ){
//     console.log(arreyElement)
// }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrey = [-82, 4, "hello", "bye", true, undefined,null, -654, "home",false];
// for (const arreyElement of arrey) {
//     if  (typeof arreyElement === "number" ){
//         console.log(arreyElement)
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arrey = [-82, 4, "hello", "bye", true, undefined,null, -654, "home",false];
// for (const arreyElement of arrey) {
//     if  (typeof arreyElement === "string" ){
//         console.log(arreyElement)
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arrey4 = [];
// arrey4[3]="dimma";
// arrey4[2]="ira";
// arrey4[0]= 87;
// arrey4[1]=false;
// arrey4[4] =-456;
// arrey4[5] = true;
// arrey4[6]= "home";
// arrey4[7]= undefined;
// arrey4[8]="hello";
// arrey4[9]="bye"
// console.log(arrey4);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i=i+2) {
//     console.log(i)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 2; i <= 100; i=i+2) {
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i=i+2) {
//     console.log(i)
// }