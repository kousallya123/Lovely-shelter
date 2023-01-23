const express=require("express")
const { registerNewUser,login } = require("../controllers/auth")
const router=express.Router()

router.post('/register',registerNewUser)

router.post('/login',login)

module.exports=router