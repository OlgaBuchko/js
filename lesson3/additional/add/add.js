// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// a
// let arr1 = [];
// for (let i = 1; i <50 ; i++) {
//     let nubmer = Math.random()*100;
//     arr1[i] = Math.round(nubmer)*2;
//
// }
// console.log(arr1);
// b
// arr2=[];
// for (let i = 1; i <50 ; i++) {
//     let nubmer = Math.random()*100;
//     arr2[i] = Math.round(nubmer)*2+1;
//
// }
// console.log(arr2)
// // c
// arr3=[];
// for (let i = 1; i <20 ; i++) {
//
//     let nubmer = Math.random()*100;
//     arr3[i] = Math.round(nubmer);
//
// }
// console.log(arr3)



// d
// arr4=[];
// for (let i = 0; i <20 ; i++) {
//     min = Math.ceil(8);
//     max = Math.floor(733);
//     let number=Math.round(Math.random() * (max - min)) + min;
//     arr4[i]=number
//
// }
// console.log(arr4);
// 2. Вивести за допомогою console.log кожен третій елемен
// let arr5 = [731, 615, 650, 341, 319, 594, 497, 628, 40, 482, 381, 524, 269, 602, 67, 630, 645, 130, 630, 506,169, 117, 9, 143, 5, 115, 35, 179, 91, 145, 183, 115, 169, 77, 197, 11, 37, 157, 149];
// for (let i = 2; i < arr5.length; i= i+3) {
//    let ar1= arr5[i];
//    console.log(ar1)
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 2; i < arr5.length; i= i+3) {
//     let ar2= arr5[i];
//     if (ar2 %2 ===0){
//     console.log(ar2)}
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr5 = [731, 615, 650, 341, 319, 594, 497, 628, 40, 482, 381, 524, 269, 602, 67, 630, 645, 130, 630, 506,169, 117, 9, 143, 5, 115, 35, 179, 91, 145, 183, 115, 169, 77, 197, 11, 37, 157, 149];
// let array2 = [];
// for (let i = 2, j=0; i < arr5.length; i=i+3) {
//     let array = arr5[i];j++;
//     if (array %2 ===0){
// array2[j]=array;
//
//     }
//
// }
// console.log(array2)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним   ???
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let x =[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// let y = 0;
// for (const x1 of x) {
//     if (x1%2===0){
//         for (let i = x1; i  ; i++) {
//
//         }
//             console.log()
//         }
//
//
//         // }
//
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let sum = 0;
// let mas =[100,250,50,168,120,345,188];
// for (const ma of mas) {
//   sum = sum+ ma;
//
// }
//
// console.log(sum/mas.length)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.  ???
let mass7 =[];
arr3=[];
for (let i = 0; i <20 ; i++) {

    let nubmer = Math.random()*100;
    arr3[i] = Math.round(nubmer);




for (const Element of arr3)  {
   mass7[i] =Element*5
}
}

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
// let arrey = [-82, 4, "hello", "bye", true, undefined,null, -654, "home",false]
// for (const arreyElement of arrey) {
//
//     if (typeof Element === "number"){
//       let  newarr=Element
//     }
// }
// console.log(newarr)
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
