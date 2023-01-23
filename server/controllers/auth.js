const User = require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const registerNewUser=async(req,res,next)=>{
    try {
        const salt=bcrypt.genSaltSync(10)
        const hash=bcrypt.hashSync(req.body.password,salt)

        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
       await newUser.save()
       res.status(200).json("User has been created sucessfully")
    } catch (error) {
        next(error)
    }

}

const login=async(req,res,next)=>{
    try {
    const user= await User.findOne({username:req.body.username})
    if(!user) return  res.status(200).json("User doesn't exist")

    const crtpassword= await bcrypt.compare(req.body.password,user.password)
    if(!crtpassword) return  res.status(200).json("Password is incorrect")

    const token=jwt.sign({id:user._id,isAdmin:user.isAdmin})

    const {password,isAdmin,...otherDetails}=user._doc
    
    res.status(200).json({...otherDetails})

    } catch (error) {
        next(error)
    }

}


module.exports={registerNewUser,login}