
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a,b,c) {
//   if (a<b &&a<c){
//       console.log(a)
//   }  else if(b<c &&b<a){
//       console.log(b)
//   }else if(
//       c<a &&c<b){
//       console.log(c)
//   }
// }
// min(1,3,8);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a,b,c) {
//     if (a>b && a>c){
//         console.log(a)
//     }  else if(b>c &&b>a){
//         console.log(b)
//     }else if (
//         c>a && c>b
//     )
//
//         console.log(c)
//
// }
// max(6,1,8);

// - створити функцію яка повертає найбільше число з масиву
let number =[3,5,44,3,2,664,5,87]
// function maxArr(arr)
// {
// let max = [0];
//     for (const numb of arr) {
//         if (numb > max) {
//             max = numb
//         }
//     }
//    return max;
// }
// maxArr(number)
//



// - створити функцію яка повертає найменьше число з масиву
// function minArr(arr)
// {
//     let min = arr[0];
//     for (const numb of arr) {
//
//         if (numb < min) {
//             min = numb
//         }
//     }
//    return min;
// }
// minArr(number)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function summator(arr) {let sum=0;
//     for (const arrElement of arr) {
//         sum = sum+arrElement;
//     }
//     console.log(sum)
// }
// summator(number)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function averageSum(arr)
//  {let sum=0;
//     for (const arrElement of arr) {
//         sum = sum+arrElement;
//     }
//     console.log(sum/arr.length)
// }
// averageSum(number)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minmax(arr)
// {
//     let  mini = minArr(arr);
//
//    let maxi =  maxArr(arr);
//     console.log(maxi);
//     return mini;
// }
// minmax(number)

// - створити функцію яка заповнює масив рандомними числами
// let arrey8 =[];
// function rundom(arr) {
//     for (let i = 0; i <35 ; i++) {
//         arr[i]= Math.round(Math.random()*100)
//
//     }
//     console.log(arr)
// }
// rundom(arrey8)
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arrey9 =[];
// function rundomlimit(arr,limit ) {
//     for (let i = 0; i <35 ; i++) {
//         arr[i]= Math.round(Math.random()*limit)
//
//     }
//     console.log(arr)
// }
// rundomlimit(arrey9, 200)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function startEnd(arr5) {
    let array2 = [];

for (let i = arr5.length-1, j=0; i >= 0; i=i-1) {

array2[j]=arr5[i];
    j++
    }
    console.log(array2)

}
    startEnd(number);