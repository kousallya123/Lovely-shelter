const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()

const connect=async()=>{
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.MONGO_URL);
      } catch (error) {
        throw error
      }
}
mongoose.connection.on("disconnected",()=>{
    console.log("mongodb is disconnected");
})

mongoose.connection.on("connected",()=>{
    console.log("mongodb is connected");
})

module.exports={connect}