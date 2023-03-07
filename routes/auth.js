const router = require('express').Router()
const User = require('../models/Users')
const bcrypt = require('bcrypt');

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})

        !user && res.status(404).json('Wrong credentials') 
        const validatePassword = await bcrypt.compare(req.body.password, user.password)
        !validatePassword && res.status(404).json('Wrong credentials') 

        const { password, ...loginData } = user._doc

        res.status(200).json(loginData)
    } catch(error){
        console.log('Error Login');
        res.status(500).json()
    }
})


module.exports = router