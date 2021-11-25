/*- Знайти та вивести довижину настипних стрінгових значень*/
let hello = 'hello world';
let lorem = 'lorem ipsum';
let js= 'javascript is cool';
console.log(hello.length);
console.log(lorem.length);
console.log(js.length);


/*- Перевести до великого регістру наступні стрінгові значення*/
/*'hello world', 'lorem ipsum', 'javascript is cool'*/
let toUpperCase1  =hello.toUpperCase();
let toUpperCase2 = lorem.toUpperCase();
let toUpperCase3 = js.toUpperCase();
console.log(toUpperCase3,toUpperCase2,toUpperCase1)
/*- Перевести до нижнього регістру настипні стрінгові значення*/
    let toLowerCase3 = toUpperCase3.toLowerCase();
let toLowerCase2 = toUpperCase2.toLowerCase();
let toLowerCase1 = toUpperCase1.toLowerCase();
console.log(toLowerCase1, toLowerCase2, toLowerCase3)
/*'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
// . Почистити її від зайвих пробілів.*/
// /*- Є "брудна" стрінга


// let str = ' dirty string   '
// let trim = str.trim();
// console.log(trim)

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.*/
// /*                                       let str1 = 'Каждый охотник желает знать';*/
/*let arr = stringToarray(str);*/
/*document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']*/

let str1 = 'Каждый охотник желает знать';
let stringToarray =(string)=>string.split(' ');
console.log(stringToarray(str1))


/*- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.*/
/*let str = 'Каждый охотник желает знать';*/
/*document.writeln(delete_characters(str, 7)); // Каждый*/


let delete_characters = (string, length) => string.substr(0, length);
document.write(delete_characters(str1,7));


/*- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.*/
 let str2 = "HTML JavaScript PHP";
 let insert_dash=(string)=> string.replaceAll(' ', '-').toUpperCase();
console.log(insert_dash(str2));


// /*document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'*/

/*- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.*/
// let arrey = 'каждый охотник желает знать'
let i0uppercase =(string) =>{
  if (!string)return;
      return string[0].toUpperCase()+string.slice(1)
}

console.log(i0uppercase('каждый охотник желает знать'))



/*- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.*/
let alluppercase = (string)=>{
    let split = string.split(' ');
let newarr = split.map((word)=>word.charAt(0).toUpperCase()+word.slice(1));
return newarr.join(' ')


}
console.log(alluppercase('каждый охотник желает знать'))