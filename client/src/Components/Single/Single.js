import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { ImExit, ImLocation2 } from 'react-icons/im'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
function Single() {
    const [slideNumber,setSlideNumber]=useState(0)
    const [open,setOpen]=useState(false)
    const photos = [
        {
            src: "http://127.0.0.1:5500/marian-master/assets/img/rooms/room2.jpg"
        },
        {
            src: "http://127.0.0.1:5500/marian-master/assets/img/rooms/room3.jpg"
        },
        {
            src: "http://127.0.0.1:5500/marian-master/assets/img/rooms/room4.jpg"
        },
        {
            src: "http://127.0.0.1:5500/marian-master/assets/img/rooms/room5.jpg"
        },
        {
            src: "http://127.0.0.1:5500/marian-master/assets/img/rooms/room6.jpg"
        },
        {
            src: "http://127.0.0.1:5500/marian-master/assets/img/rooms/room1.jpg"
        } ,{
            src: "http://127.0.0.1:5500/marian-master/assets/img/rooms/room6.jpg"
        }, {
            src: "http://127.0.0.1:5500/marian-master/assets/img/rooms/room6.jpg"
        },

    ]
    const handleOpen=(i,e)=>{
        e.preventDefault()
        setSlideNumber(i)
        setOpen(true)
    }
    const handleMove=(direction)=>{
        let newSlideNumber;
        if(direction==='l'){
            newSlideNumber=slideNumber===0?5:slideNumber-1

        }else{
            newSlideNumber=slideNumber===5?0:slideNumber+1
        }
setSlideNumber(newSlideNumber)
    }
    return (
        <div>
            <Navbar />
            <h1 className='text-3xl'>Hotel Name</h1>
            <div className='flex'>
                <ImLocation2 />
                <span>Hotel address</span>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2>Distance</h2>
                    <span>Book a stay over $ 114 at this property and get a free airport taxi</span>
                </div>
                <button>Book Now</button>
            </div>
             {open&&
             <>
           
              <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm '>
              
              <div className='flex mb-96 cursor-pointer'><ImExit className="text-gray-400" onClick={()=>setOpen(false)}/>
                </div>
                <BsArrowRightCircleFill className="cursor-pointer" onClick={()=>handleMove("r")}/>
                
                <div>
                <div class="p-2">
                        <div class="room-img ">
                            <a href="/single"><img src={photos[slideNumber].src} alt=""/></a>
                        </div>
                    </div>
                  
                </div>
                <BsFillArrowLeftCircleFill className="cursor-pointer" onClick={()=>handleMove("l")}/>
                </div>
                </>
                }
            <div className='grid grid-cols-4'>
                {photos.map((photos,i)=> (
                    <div class="single-room p-2">
                        <div class="room-img ">
                            <a href="/single"><img src={photos.src} alt="" onClick={(e)=>handleOpen(i,e)}/></a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-between'>
                <div className='max-w-[50%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum.
                </div>
                <div>
                    <button>
                        jshkjhd
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Single
