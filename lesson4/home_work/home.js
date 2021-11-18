// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a, b) {
    let result = a * b + 'sm';
    console.log(result)
}

area(3, 4)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleS(r) {
    let s = 3.14 * Math.pow(r, 2) + 'sm';
    console.log(s)
}

circleS(4)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderS(r, h) {
    let v = 2 * 3.14 * r * (h + r);
    console.log(v)
}

cylinderS(8, 10)

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrey(a) {
    for (const aElement of a) {
        console.log(aElement)
    }
}

arrey([4, 76, 5, 6, 7, 8, 9]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function PText(text) {
    document.write(`<p>${text}</p>`)
}

PText('Lorem ipsum dolor sit amet, consectetur.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(li) {
    document.write(`<ul>
<li>${li}</li>
<li>${li}</li>
<li>${li}</li>
</ul>`)
}

ul('Lorem ipsum dolor.')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul2(li,num) {
    document.write(`<ul>`)
    for (let i = 0; i <num ; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}

ul2('Lorem ipsum dolor.', 4)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
let arrey2 = [-82, 4, "hello", "bye", true, undefined,null, -654, "home",false];
function arreyUl(arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
arreyUl(arrey2)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let array6 = [
    {

        id: 1,
        name:"Petya",
        age:32
    },
    {
        id: 2,
        name:"Petya",
        age:32
    },
    {
        id: 3,
        name:"Petya",
        age:32
    },
    {
        id: 4,
        name:"Petya",
        age:32
    },
    {
        id: 5,
        name:"Petya",
        age:32
    },
    {
        id: 6,
        name:"Petya",
        age:32
    },
    {
        id: 7,
        name:"Petya",
        age:32
    },
    {
        id: 8,
        name:"Petya",
        age:32
    },
    {
        id: 9,
        name:"Petya",
        age:32
    }];
function arrObject(arr ) {
    for (const Element of arr) {
        document.write(`<div>${Element.id}<br>${Element.name}<br>${Element.age}</div>`)
    }
}
arrObject(array6)