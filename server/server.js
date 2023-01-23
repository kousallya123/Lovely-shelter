const express=require("express")
const dotenv=require("dotenv")
const { connect } = require("./connections/mongo");
const authRoute=require("./routes/auth")
const hotelRoute=require("./routes/hotels")
const roomRoute=require("./routes/rooms")
const userRoute=require("./routes/users")
const app=express()
dotenv.config()

connect();

app.use(express.json())

app.use("/auth",authRoute)
app.use("/hotels",hotelRoute)
app.use("/rooms",roomRoute)
app.use("/users",userRoute)


app.use((error,req,res,next)=>{
    const errorStatus=error.status||500
    const errorMessage=error.message||"Something went wrong!"
    return res.status(errorStatus).json({
        sucess:false,
        status:errorStatus,
        message:errorMessage,
        stack:error.stack
    })
})
app.listen(2002,()=>{
    console.log('server is runing');
}) 