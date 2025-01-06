const { response } = require('express')
fetch('http://localhost:3000/api/users/2',{
    method : 'DELETE',
    headers : {
        'Content-Type':'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))