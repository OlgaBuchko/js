//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//  function car  ( model, manufacturer, year, maxspeed, engine)  {
//
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//      this.drive = function () {
//          console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//      };
//          info = function () {
//         for (const argumentsKey in this) {if  (typeof this[argumentsKey] !== 'function'){
//         console.log(`${argumentsKey} - ${this[argumentsKey]}`)}
//          }
//      };
//      this.increaseMaxSpeed = function (newSpeed){
//          this.maxspeed = newSpeed;
//      };
//      this.changeYear = function (newValue){
//          this.year=newValue;
//      };
//      this.addDriver = function (driver){
//          this.driver = driver
//      };
//
//     }
//
//
//
//
//
// let car1 = new car(
//     'LAND ROVER','Tata Motors',2019, 220, '2.0 (Бензин)'
//     )
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(320);
// car1.changeYear(2001);
// car1.addDriver('Vova');
// console.log(car1);
// car1.drive()
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// class car { constructor ( model, manufacturer, year, maxspeed, engine) {
//
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
// }
//    drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     };
//     info = function () {
//         for (const argumentsKey in this) {if  (typeof this[argumentsKey] !== 'function'){
//             console.log(`${argumentsKey} - ${this[argumentsKey]}`)}
//         }
//     };
//     increaseMaxSpeed = function (newSpeed){
//         this.maxspeed = newSpeed;
//     };
//     changeYear = function (newValue){
//         this.year=newValue;
//     };
//     addDriver = function (driver){
//         this.driver = driver
//     };
//
// }
// let car2 = new car('Peugeot', 'France', 2000, 270, 2.0)
// console.log(car2);
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(320);
// car2.changeYear(2001);
// car2.addDriver('Vova');
// console.log(car2);
// car2.drive()

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let arrCinderella = [
    new cinderella('Vika',37,37),
    new cinderella('Katya', 18,35),
    new cinderella('Olya', 19,36),
    new cinderella('Lilya', 22,38),
    new cinderella('Karina', 19,39),
    new cinderella('Oksana', 19,40),
    new cinderella('Olena', 19,36),
    new cinderella('Ira', 19,34),
    new cinderella('Kira', 19,37),
    new cinderella('Gala', 19,38)
];
console.log(arrCinderella)
let Prince = {
    Name:'Alex',
    Age: 32,
    size: 34
}
console.log(Prince)
for (const cinderelka of arrCinderella) {
    if (cinderelka.size === Prince.size) {
        console.log(cinderelka)
    }
}

let Princessa= arrCinderella.find((item)=>item.size===Prince.size)
console.log(Princessa)
