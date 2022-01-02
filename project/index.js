fetch( 'https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
.then(users=>{
    let user_detail = {}
    let container = document.createElement('div');
     document.body.appendChild(container)
    container.classList.add('container')
    for (const user of users) {
        let user_div = document.createElement('div')
        container.appendChild(user_div)
        user_div.innerText=user.id +' ' +user.name;
        user_div.classList.add('user_div')
        let button = document.createElement('button')
        user_div.appendChild(button)
        button.innerText='details'
        button.onclick=function (){localStorage.clear()
            localStorage.setItem('user-details',JSON.stringify(user.id))
            window.location.href='user-details.html'
        }
    }
})