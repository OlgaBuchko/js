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
                user_box.innerHTML = `id: ${user.id} <br> name: ${user.name}  <br> user name: ${user.username} <br> phone: ${user.phone}  <br>  email: ${user.email} <br>  website: ${user.website}`
                let address = document.createElement("div")
                address.classList.add('address')
                user_container.appendChild(address)
                address.innerHTML = `street: ${user.address.street} <br> city: ${user.address.city} <br> geo: lat = ${user.address.geo.lat} ;lng = ${user.address.geo.lng} <br> suite: ${user.address.suite} <br> zipcode: ${user.address.zipcode}`
                let company = document.createElement('div')
                company.classList.add('company')
                company.innerHTML= `company: ${user.company.name} <br>catchPhrase: ${user.company.catchPhrase} <br>  bs: ${user.company.bs}`
                user_container.appendChild(company)
            }
        }
    })