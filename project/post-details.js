
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(posts=>{
        let post_id = JSON.parse(localStorage.getItem('post-details'));
       let container = document.createElement("div")
        container.classList.add('container_post')
        document.body.appendChild(container)
        for (const post of posts) {
            if(post_id === post.id){
                let post_block = document.createElement('div')
                post_block.innerHTML = `userId: ${post.userId} <br> id: ${post.id} <br> title: ${post.title} <br> body: ${post.body}`
                container.appendChild(post_block)
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response=>response.json())
                    .then(comments=>{
                        let comments_box = document.createElement('div')
                        container.appendChild(comments_box)
                        for (const comment of comments) {
                            if (comment.postId === post.id){
                                console.log(comment)
                                let comment_block = document.createElement('div')
                                comment_block.innerHTML=`Post id : ${comment.postId} coment id: ${comment.id}<br> post name: ${comment.name} <br> email: ${comment.email} <br> post body: ${comment.body}`
                                comments_box.appendChild(comment_block)
                            }
                        }
                    })
            }
        }

    })
