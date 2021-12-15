// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https:jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(posts=>{
    let conteiner = document.createElement('div')
    conteiner.classList.add('conteiner')
    document.body.appendChild(conteiner)
    for (const post of posts) {
        let div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML=
            `<h4> User Id: ${post.userId}  Id: ${post.id}</h4>
             <h5>Tittle: ${post.title}</h5>
             <p>body: ${post.body}</p>`
        conteiner.appendChild(div)
        let button = document.createElement("button")
        button.innerText= 'всі коментарі'
        div.appendChild(button)
        button.onclick= function () {
            fetch('https:jsonplaceholder.typicode.com/comments')
                .then(response=>response.json())
                .then(coments=>{
                    let comentblock = document.createElement('div')
                    div.appendChild(comentblock)
                    comentblock.classList.add('comentblock')
                    let allcoments = document.createElement('div')
                    allcoments.classList.add('allcoments')
                    comentblock.appendChild(allcoments)
                    for (const coment of coments) {
                        if(post.id === coment.postId){
                            let divcoment = document.createElement('div')
                            allcoments.appendChild(divcoment)
                            divcoment.classList.add('divcoment')
                            divcoment.innerHTML=
                                `<h4>${coment.email} </h4>
             <h5> name: ${coment.name}<h5/>
             <p class="coment_p"> ${coment.body}</p>
             <p class="id">postId: ${coment.postId}  <span>id: ${coment.id}</span></p>`

                        }
                    }
                    let butClose = document.createElement('button')
                    butClose.innerText='сховати'
                    comentblock.appendChild(butClose)
                    butClose.onclick=function () {
                      comentblock.style.display='none'
                    }
                })
        }
    }
})