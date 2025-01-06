const {response} = require('express')

fetch('http://localhost:3000/api/users/3', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name : 'Gray',
        email : 'grayzzz@gmail.com',
        phone : '081234567891'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))