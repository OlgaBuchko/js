<!--Взяти файл template_2.html та працювати в ньому-->
<!--1) Напишіть код, який :-->
<!--a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)-->
let ById = document.getElementById("main_header");
ById.classList.add("sep-2021");
ById.textContent = "september-2021";
<!--b) робить шириниу елементу ul 400px-->
let ByTagName = document.getElementsByTagName('ul');
ByTagName[0].style.width = '400px';
<!--c) робить шириниу всіх елементів з класом linkList шириною 50%-->
let ByClassName = document.getElementsByClassName('linkList');
for (const NameElement of ByClassName) {
    NameElement.style.width='50%'
}
<!--d) отримує текст який зберігається в елементі з класом listElement2-->

let litext2 = document.getElementsByClassName("listElement2");
console.log(litext2);
<!--e) отримує всі елементи li та змінює ім колір фону на сірий-->

let li = document.getElementsByTagName('li');
for (const liElement of li) {
    liElement.style.backgroundColor = "grey";
}
<!--f) отримує всі елементи 'a' та додає їм клас anchor-->
let a = document.getElementsByTagName("a")
for (const aElement of a) {
    aElement.classList.add("anchor");
}
// <!--g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів-->
for (const aElement of a) {
    if (aElement.innerText === 'link3'){
        aElement.style.fontSize = '40px'
    }
}
// <!--h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a-->

    for (const aElement of a) {
        aElement.classList.add(aElement.innerText);
    }


// <!--i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()-->
// let sub_color = document.getElementsByClassName('sub-header');
//     let color = prompt('color?')
// for (const subColorElement of sub_color) {
//     subColorElement.style.backgroundColor = color
// }
// <!--j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()-->
// for (const subColorElement of sub_color) {
//
//     if (subColorElement.innerText==="content 2 segment"){
//         subColorElement.style.color=prompt('color text') ;
//     } else
//    subColorElement.style.color = 'blue'
// }
// <!--k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()-->
// let content = document.getElementsByClassName('content_1');
// content[0].textContent = prompt('text');
// <!--l) отримати елементи p та змінити їм padding на 20px-->
let padding = document.getElementsByTagName('p');
for (const paddingElement of padding) {
    paddingElement.style.padding= '20px'
}
// <!--m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)-->
let text2 = document.getElementsByClassName('text2');
 text2[0].textContent = "september-2021";






