//
// - Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
let replace = (string) =>{
    return string.replaceAll('__', ' ').replaceAll("---"," "). replaceAll('..'," ")
}

console.log(replace(n3));
console.log(replace(n2));
console.log(replace(n1))

//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArr = [];
let random =(arr)=>{
    for (let i = 0; i < 20; i++) {
        arr.push(Math.round(Math.random(20)*100));

    }
    return arr
}
console.log(random(randomArr))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sortArr = (arr)=>{

  return    arr.sort((a, b) => a-b);


}
console.log(sortArr(randomArr))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

    let filter1 = randomArr.filter((item) => {
        return item%2 === 0
    });

console.log(filter1)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let map = randomArr.map(value => value + '')
console.log(map)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
let sortNums = (arr, direction)=>{
    if (direction === 'ascending'){
     return    arr.sort((a, b)=>a-b)
    } else if( direction ==='descending' ){
     return    arr.sort((a,b)=>b-a)
    }
}
console.log(sortNums(nums,'ascending'))
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a,b)=>a.monthDuration-b.monthDuration))


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((item)=>item.monthDuration>5))