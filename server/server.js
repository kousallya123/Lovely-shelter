const express=require("express")
const dotenv=require("dotenv")
const { connect } = require("./connections/mongo");
const authRoute=require("./routes/auth")
const app=express()
dotenv.config()

connect();

app.use("/auth",authRoute)

app.listen(2002,()=>{
    console.log('server is runing');
}) 