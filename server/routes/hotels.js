const express=require("express")
const { createHotel, getAllHotel, getOneHotel, deleteHotel, updateHotel } = require("../controllers/hotel")
const Hotel = require("../models/hotel")
const router=express.Router()


router.post('/',createHotel)

router.put('/:id',updateHotel)

router.delete('/:id',deleteHotel)

router.get('/:id',getOneHotel)

router.get('/',getAllHotel)

module.exports=router