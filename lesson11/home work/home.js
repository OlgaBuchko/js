// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let form = document.forms.users;
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let name = form.name.value;
//     let age = form.age.value;
//    localStorage.setItem('user', JSON.stringify( {name,age}))
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let arr = [];
let form2 = document.forms.avto;
form2.onsubmit= function (e){
    e.preventDefault();
    let auto = {
        model:form2.model,
        type:form2.type,
        volume:form2.volume
    }
    arr.push(auto);
    localStorage.setItem('new_auto',JSON.stringify(arr))

}