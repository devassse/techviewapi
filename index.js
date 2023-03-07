const express = require("express")
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const usersRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log('DB Connected successfuly'))
.catch((error) => {
    console.log('DB Connecting Error', error);
})

app.use('/api/v1/user', usersRoute)
app.use('/api/v1/auth', authRoute)

app.listen("5000", () => {
    console.log("Techview Backend is Running");
})
