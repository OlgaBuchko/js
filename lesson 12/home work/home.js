// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>{
        console.log(posts)
        let conteiner = document.createElement('div');
        conteiner.classList.add('posts_box')
        document.body.appendChild(conteiner)
        for (const post of posts) {
            let div = document.createElement('div');
            div.classList.add('post');
            div.innerHTML =
                `<h4> User Id: ${post.userId}  Id: ${post.id}</h4>
                 <h5>Tittle: ${post.title}</h5>
                 <p>body: ${post.body}</p> `

           conteiner.appendChild(div);
        }
    })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments