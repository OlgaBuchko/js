// розпорядок дня
function morning(isWorkingDay = true) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
         if (isWorkingDay){
             resolve("просинайся");
             return isWorkingDay;
         }else {
             reject('поспи трошки');
             return  isWorkingDay;
         }
        },1000)
    })
}
function go_eat(eat) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (eat){
                resolve('їмо '+eat)
            }else{
            reject('пий чай')}
        }, 4000)
    })
}
function go_school(isWorkingDay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (isWorkingDay){
                resolve('веду дитя до школи')
            }else{
            reject('ура! вихідний')}
        }, 2000)
    })
}
function study() {

        return new Promise((resolve) =>{
            setTimeout(()=>{
                resolve('вчись поки можеш')
            }, 3000)
    } )

}
function go_balet() {
    return new Promise((resolve )=> {
        setTimeout(()=>{
            resolve('дитя танцює, сиди і чекай')
        },2000)
    })
}
function go_home() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve ("нарешті вдома")
        }, 300)
    })
}
function cooking(what_to_cook) {
    return new Promise(resolve => {
        setTimeout(()=>{

            resolve ('готую  ' + what_to_cook);
            return what_to_cook
        },1500)
    })
}
function homeWork() {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('починай бухати, це лише перший клас ')
        },1000)
    })
}
function go_slip() {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('можна спати')
        },500)
    })
}


async function day() {
   const working_day = await morning(true);
  await go_school(working_day);
    await study();
    await go_eat('картолплю');
    await go_balet();
    await go_home();
   const cooking = await cooking('макарони');
    await go_eat(cooking);
    await homeWork();
    await go_slip();
}
day()

//
// morning(true)
//     .then(morning=>{
//         console.log(morning);
//     return go_school(morning)})
// .then(school=>{
//     console.log(school);
//     return study()
// })
//     .then(studys=>{
//         console.log(studys);
//         return go_home()
//     })
//     .then(home=>{
//         console.log(home);
//         return go_eat('гречку')
//     })
//     .then(eating=>{
//         console.log(eating);
//         return go_balet()
//     })
//     .then(balet=>{
//         console.log(balet);
//         return go_home()
//     })
//     .then(home=>{
//         console.log(home);
//         return cooking('картоплю')
//     })
//     .then(cook=>{
//         console.log(cook)
//         return go_eat('картоплю')
//     })
//     .then(eating=>{
//         console.log(eating)
//         return homeWork()
//     })
//     .then(homeworking=>{
//         console.log(homeworking);
//         return go_slip()
//         }
//     )
//     .then(sliping=>{
//         console.log(sliping)
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// function morning(isWorkingDay = true, callback) {
//         setTimeout(()=>{
//             if (isWorkingDay){
//                 console.log("просинайся");
//                 callback()
//             }else {
//                 console.log('поспи трошки');
//                 callback()
//             }
//         },1000)
//     }
//
// function go_eat(eat, callback) {
//     setTimeout(()=>{
//             if (eat){
//                 console.log('їмо '+eat);
//                 callback()
//             }else{
//                 console.log('пий чай');
//             callback}
//         }, 4000)
// }
// function go_school(isWorkingDay,callback) {
//         setTimeout(()=>{
//             if (isWorkingDay){
//                 console.log('веду дитя до школи');
//                 callback()
//             }else{
//                 console.log('ура! вихідний');
//             callback()}
//         }, 2000)
// }
// function study(callback) {
//         setTimeout(()=>{
//             console.log('вчись поки можеш');
//             callback()
//         }, 3000)
// }
// function go_balet(callback) {
//         setTimeout(()=>{
//             console.log('дитя танцює, сиди і чекай');
//             callback()
//         },2000)
// }
// function go_home(callback) {
//         setTimeout(()=>{
//             console.log("нарешті вдома");
//             callback()
//         }, 300)
// }
// function cooking(what_to_cook, callback) {
//         setTimeout(()=>{
//             console.log('готую  ' + what_to_cook);
//             callback()
//         },1500)
// }
// function homeWork(callback) {
//         setTimeout(()=>{
//             console.log('починай бухати, це лише перший клас ');
//             callback()
//         },1000)
// }
// function go_slip() {
//         setTimeout(()=>{
//             console.log('можна спати')
//         },500)
// }
//
// morning(false,()=>{
//     go_school(false,()=>{
//       study(()=>{
//             go_eat('гречка',()=>{
//                 go_balet(()=>{
//                     go_home(()=>{
//                         cooking('плов',()=>{
//                             go_eat('плов',()=>{
//                                 homeWork(()=>{
//                                     go_slip()
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
