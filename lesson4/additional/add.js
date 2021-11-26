//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
let arrey = [3]
function sumC(arr) {let result = 0;
    for (const arrElement of arr){

        if (arr.length === 1) {
            result = arrElement;

        } else if (arr.length > 1) {
            result = result + arrElement;


        }
    } console.log(result)
}
sumC(arrey)
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
let one =[1,2,3,4]
   let two = [2,3,4,5]
// результат
//     [3,5,7,9]
//
// function sumArr(oneArr, twoArr) {
//     let sumarr = [];
//     for (let oneelement of oneArr) {
//         for ( let twoelement of twoArr) {
//
//
//         if (oneelement[i] === twoelement[i])
//     { sumarr[i]=oneelement+twoelement}
//     console.log(sumarr)} }
// }
// sumArr(one, two)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
  let arr =  [{name: 'Dima', age: 13}, {model: 'Camry'}]
//     ===> [ name, age, model ]
//
function objectarr( arrey){let key = [];
    for (const arreyKey of arrey) {
        for (const arreyKeyKey in arreyKey) {


                key.push(arreyKeyKey);


        }
    } console.log(key)

}
objectarr(arr)
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function objectarr2( arrey){let key = [];
    for (const arreyKey of arrey) {
        for (const  value in arreyKey) {


            key.push(arreyKey[value]);


        }
    }
    console.log(key)
}
objectarr2(arr)

