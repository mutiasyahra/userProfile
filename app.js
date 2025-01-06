const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user-route')
const logger = require('./middlewares/logger')
const auth = require('./middlewares/auth')

dotenv.config();
const app = express();
app.use(logger)
app.use(auth)
app.use(bodyParser.json())
app.use('/api/users', userRouter)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server run at http://localhost:${port}/api/users`)
})