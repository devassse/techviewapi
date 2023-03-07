const router = require('express').Router()
const User = require('../models/Users')
const bcrypt = require('bcrypt');

//REGISTER
router.post('/register', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
            profilepic: req.body.profilepic,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    }catch(error) {
        console.log('Error Registering User', error);
    }
})

module.exports = router