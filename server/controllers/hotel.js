const Hotel=require("../models/hotel")


const createHotel=async(req,res,next)=>{
    console.log(req.body,'vjhjhggj');
    const newHotel=new Hotel(req.body)
    try {
        const savedHotel=await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
       next(error) 
    }
}

const updateHotel=async(req,res,next)=>{
    console.log(req.body,'vjhjhggj');
    try {
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(error) 
    }
}


const deleteHotel=async(req,res,next)=>{
    try {
        await Hotel.findByIdAndRemove(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        next(error) 
    }
}


const getOneHotel=async(req,res,next)=>{
    try {
        const hotel=await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error) 
    }
}

const getAllHotel=async(req,res,next)=>{
    try {
        const hotel=await Hotel.find()
        res.status(200).json(hotel)
    } catch (error) {
        next(error) 
    }
}

module.exports={createHotel,updateHotel,deleteHotel,getAllHotel,getOneHotel}