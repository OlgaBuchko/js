// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let UserArrey = [];
UserArrey.push(new User(10,"Petya", "Petrov", "frghjk@ghlj.com", "0675786545"));
UserArrey.push(new User(2,"Vasya", "Vaskiv", "frvvvck@ghlj.com", "06765445"));
UserArrey.push(new User(8,"Olya", "Petka", "f.mmb@ghlj.com", "067535645"));
UserArrey.push(new User(4,"Ylia", "Vetrova", "fkj,nm@ghlj.com", "065886545"));
UserArrey.push(new User(6,"Vika", "Bura", "fxvnhnr@ghlj.com", "06789686545"));
UserArrey.push(new User(5,"Alina", "Prima", "fdsr@ghlj.com", "0768654545"));
UserArrey.push(new User(7,"Karina", "Malina", "rwqe@ghlj.com", "0675543445"));
UserArrey.push(new User(3,"Oksana", "Pavlova", "ouh@ghlj.com", "0676777545"));
UserArrey.push(new User(9,"Ira", "Grim", "frjjjjj@ghlj.com", "0675666645"));
UserArrey.push(new User(1,"Galia", "Valya", "jfgtjfk@ghlj.com", "0687878745"))
console.log(UserArrey)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter=UserArrey.filter(User =>User.id%2===0
)
console.log(filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = UserArrey.sort((a,b)=>a.id-b.id);
console.log(sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }


}
let UserArrey1 = [];
UserArrey1.push(new Client(10,"Petya", "Petrov", "frghjk@ghlj.com", "0675786545",  ["сметана"]));
UserArrey1.push(new Client(2,"Vasya", "Vaskiv", "frvvvck@ghlj.com", "06765445", ["хліб","квас","яйця"]));
UserArrey1.push(new Client(8,"Olya", "Petka", "f.mmb@ghlj.com", "067535645",["оселедець","майонез","батон"]));
UserArrey1.push(new Client(4,"Ylia", "Vetrova", "fkj,nm@ghlj.com", "065886545",["чіпси","сир","пиво","молоко"]));
UserArrey1.push(new Client(6,"Vika", "Bura", "fxvnhnr@ghlj.com", "06789686545",["восьминіг","кальмар"]));
UserArrey1.push(new Client(5,"Alina", "Prima", "fdsr@ghlj.com", "0768654545",["яблука","морозиво"]));
UserArrey1.push(new Client(7,"Karina", "Malina", "rwqe@ghlj.com", "0675543445",["буряк","кріп","морква","оселедець","майонез","батон"]));
UserArrey1.push(new Client(3,"Oksana", "Pavlova", "ouh@ghlj.com", "0676777545",["абрикоси","помідори","оселедець","майонез","батон"]));
UserArrey1.push(new Client(9,"Ira", "Grim", "frjjjjj@ghlj.com", "0675666645",["огірки","кефір","яблука","морозиво","молоко"]));
UserArrey1.push(new Client(1,"Galia", "Valya", "jfgtjfk@ghlj.com", "0687878745",["багет","масло","ікра"]))
console.log(UserArrey1)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort1 = UserArrey1.sort((a,b)=>a.order.length-b.order.length);
console.log(sort1)

