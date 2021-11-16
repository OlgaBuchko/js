// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let arrey = [2,17,13,6,22,31,45,66,100,-18];
// 1
// let i=0;
// while (i<arrey.length)
// {
//     console.log(i)
//     i++
// }
// (с заду на перед)
// let i=arrey.length-1;
// while (i>=0)
// {
//     console.log(i)
//     i= i-1;
// }

// 2
// for (let i = 0; i < arrey.length; i++) {
//     console.log(i)
// }
//
// (с заду на перед)
// for (let i = arrey.length-1; i >=0; i=i-1) {
//     console.log(i)
// }
// 3
// let i=2;
// while (i<arrey.length)
// {let arr = arrey[i];
//     console.log(arr)
//     i= i+2;
// }
// (с заду на перед)
// let i=arrey.length-2;
// while (i>=2)
// {let arr = arrey[i];
//     console.log(arr)
//     i= i-2;
// }
// 9

// 4
// for (let i = 2; i < arrey.length; i=i+2) {
//     let arr = arrey[i];
//     console.log(arr)
// }
// (с заду на перед)
// for (let i =arrey.length-2; i >=2 ; i=i-2) {
//     let arr = arrey[i];
//     console.log(arr)
// }
// 5
// let i=0;
// while (i<arrey.length)
// {let arr = arrey[i];
//     if (arr % 2 ===0){
//         console.log(arr)
//     }
//     i++;
// }
// (с заду на перед)
// let i=arrey.length-1;
// while (i>=0)
// {let arr = arrey[i];
//     if (arr % 2 ===0){
//         console.log(arr)
//     }
//     i=i-1;
// }
// 6
// for (let i = 0; i < arrey.length; i++) {
//     let arr = arrey[i];
//     if (arr % 2 ===0){
//     console.log(arr)}
// }

// (с заду на перед)
// for (let i = arrey.length-1; i>=0 ; i=i-1) {
//     let arr = arrey[i];
//     if (arr % 2 ===0){
//     console.log(arr)}
// }
// 7
// for (let i = 0; i < arrey.length; i++) {
//     let arr = arrey[i];
//     if (arr % 3 === 0) {
//         arr="okten"
//         console.log(arr)
//     }
// }
// (с заду на перед)
// for (let i = arrey.length-1; i >=0 ; i=i-1) {
//     let arr = arrey[i];
//     if (arr % 3 === 0) {
//         arr="okten"
//         console.log(arr)
//     }
// }
// 8
// for (let i = arrey.length-1; i >=0; i=i-1) {
//     let arr = arrey[i];
//     console.log(arr)}

// 9

// let i=arrey.length-1;
// while (i>=0)
// {let arr = arrey[i];
//     console.log(arr)
//     i= i-2;
// }