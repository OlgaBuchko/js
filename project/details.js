fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let user_id = JSON.parse(localStorage.getItem('user-details'));
        let user_container = document.createElement('div')
        document.body.appendChild(user_container)
        user_container.classList.add('container')
        for (const user of users) {
            if (user.id === user_id) {
                console.log(user)
                let user_box = document.createElement('div')
                user_box.classList.add('user_box')
                user_container.appendChild(user_box)
                user_box.innerHTML = `<split>user</split><br>id: ${user.id} <br> name: ${user.name}  <br> user name: ${user.username} <br> phone: ${user.phone}  <br>  email: ${user.email} <br>  website: ${user.website}`
                let address = document.createElement("div")
                address.classList.add('address')
                user_container.appendChild(address)
                address.innerHTML = `<split>user address</split><br>street: ${user.address.street} <br> city: ${user.address.city} <br> geo: lat = ${user.address.geo.lat} ;lng = ${user.address.geo.lng} <br> suite: ${user.address.suite} <br> zipcode: ${user.address.zipcode}`
                let company = document.createElement('div')
                company.classList.add('company')
                company.innerHTML= `<split>user company</split><br>company: ${user.company.name} <br>catchPhrase: ${user.company.catchPhrase} <br>  bs: ${user.company.bs}`
                user_container.appendChild(company)
                let button = document.createElement('button')
                button.innerText='post of current user'
                user_container.appendChild(button)
                button.classList.add('button_details')
                button.onclick=function (){
                    div_post.classList.toggle('d_none')
                }
                let div_post = document.createElement('div')
                div_post.classList.add("div_post",'d_none')
                user_container.appendChild(div_post)
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response=>response.json())
                    .then(posts=>{
                        for (const post of posts) {
                            if(user.id === post.userId){
                                let post_title = document.createElement('div')
                                post_title.innerText=post.title
                                post_title.classList.add('post_title')
                                div_post.appendChild(post_title)
                                let button_post = document.createElement('button')
                                button_post.innerText='post details'
                                button_post.classList.add('button_post')
                                post_title.appendChild(button_post)
                                button_post.onclick=function (){
                                    localStorage.clear()
                                    localStorage.setItem('post-details',JSON.stringify(user_id))
                                    window.location.href='post-details.html'
                                }
                            }
                        }
                    })
                }

        }
    })