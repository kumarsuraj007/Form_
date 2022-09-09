const router = require('express').Router();
const bcrypt = require('bcrypt');

// IMPORT MODELS 
const UserModel = require('../Models/User');


// REGISTER USER 
router.post('/signup', async (req, res) => {
    try {
        const {name, lname, username, email, password} = req.body
        const FindEmail = await UserModel.findOne({email:email})
        if(FindEmail) {
            return res.json({Message:'Email is already taken, try another one'}) 
        }
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)
        const SavedUser = await UserModel.create({
            name, lname, username, email, password:hashedpassword
        })
        res.json({Message: 'User Registered Successfully'}) 
    } catch (error) {
        res.json(error)
    }
});


// LOGIN USER 
router.post('/signin', async (req, res) => {
    try {
        const {email, password} = req.body
        const Match = await UserModel.findOne({email:email})
        if(!Match) {
            res.json('Email and Password are invalid')
        }
        const compare = bcrypt.compare(password, Match.password).then((domatch) => {
            if(domatch) {
                return res.json({Message: "You Are Logged in"})
            } else {
                res.json({Message: 'Email and Password are invalid'})
            }
        });
       
    } catch (error) {
        res.json(error)
    }
});


// GETDATA 
router.get('/getdata', async (req, res) => {
    UserModel.find({}, function (user, err) {
        if(user) {
            return res.json(user)
        } else {
            res.json(err)
        }
    })
});

module.exports = router ;