const { response } = require('express')
fetch('http://localhost:3000/api/users',{
    method : 'POST',
    headers : {
        'Content-Type':'application/json',
    },
    body : JSON.stringify({
        name : 'Lagi Cuyyyyyy',
        email : 'cobacoba@gmail.com',
        phone : '087654322'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))