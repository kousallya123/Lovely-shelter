import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Foooter/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Preloader from '../../Components/Preloader/Preloader'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

function Home() {
    const navigate=useNavigate()
    const [destination,setDestination]=useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'

        }
    ])
    const [options, setOptions] = useState({
        adult: 1,
        childern: 0,
        room: 1
    })
    const handleOption=(name,operation,e)=>{
        e.preventDefault()
        setOptions(prev=>{return{
            ...prev,[name]: operation==="i" ? options[name]+1:options[name]-1,
        }})
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        navigate('/search',{state:{destination,date,options}})
    }
    return (
        <div>
            <Preloader />
            <Navbar />

            <div class="slider-area ">
                <div class="slider-active dot-style">
                    <div class="single-slider  hero-overly slider-height d-flex align-items-center" style={{ backgroundImage: "url(" + "assets/img/hero/h1_hero.jpg" + ")" }}>
                        <div class="container">
                            <div class="row justify-content-center text-center">
                                <div class="col-xl-9">
                                    <div class="h1-slider-caption">
                                        <h1 data-animation="fadeInUp" data-delay=".4s">top hotel in the city</h1>
                                        <h3 data-animation="fadeInDown" data-delay=".4s">Hotel & Resourt</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="booking-area">
                <div class="container">
                    <div class="row ">
                        <div class="col-12">
                            <form action="">
                                <div class="booking-wrap d-flex justify-content-between align-items-center">
                                    <div class="single-select-box mb-30">
                                        <div class="boking-tittle">
                                            <span>Location</span>
                                        </div>
                                        <div class="boking-datepicker">
                                            <input type="text" value={destination} className='border border-gray-400 max-width-50'onChange={(e)=>setDestination(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="boking-tittle">
                                        <span onClick={() => setOpenDate(!openDate)} className="cursor-pointer" >Check in date</span>
                                        <span onClick={() => setOpenDate(!openDate)} className="cursor-pointer">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                                            date[0].endDate,
                                            "MM/dd/yyyy"
                                        )}`}</span>
                                    </div>
                                    <div class="single-select-box mb-30 absolute">
                                        <div class="boking-datepicker">
                                            {openDate &&
                                                <DateRange
                                                    editableDateInputs={true}
                                                    onChange={(item) => setDate([item.selection])}
                                                    moveRangeOnFirstSelection={false}
                                                    ranges={date}
                                                    minDate={new Date()}
                                                    className="relative top-52 left-52" />
                                            }
                                        </div>
                                    </div>
                                    <div class="single-select-box mb-30">
                                        <div class="boking-tittle">
                                            <span>{`Adult :${options.adult}`}</span>
                                        </div>
                                        <div class="select-this">
                                            <form action="#"className='text-center'>
                                                <div class=" top-50 bg-white text-gray-500 rounded-lg shadow-gray-500 flex items-center text-center">
                                                    <span className=''>Adult</span>
                                                    <button disabled={options.adult<=1} onClick={(e) => handleOption("adult", "d",e)} className='border border-gray-700 w-6 h-6 text-center  hover:bg-amber-400 hover:text-white items-center m-1 disabled:cursor-not-allowed'>-</button>
                                                    <span className=''>{options.adult}</span>
                                                    <button onClick={(e) => handleOption("adult", "i",e)} className='border border-gray-700 w-6 h-6 text-center  hover:bg-amber-400 hover:text-white  items-center m-1'>+</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="single-select-box mb-30">
                                        <div class="boking-tittle">
                                            <span>{`Childern :${options.childern}`}</span>
                                        </div>
                                        <div class="select-this">
                                            <form action="#">
                                                <div class="select-itms">
                                                    <div class=" top-50 bg-white text-gray-500 rounded-lg shadow-gray-500 flex items-center text-center">
                                                        <span className=''>Childern</span>
                                                        <button  disabled={options.childern<=0} onClick={(e) => handleOption("childern", "d",e)} className='border border-gray-700 w-6 h-6 text-center  hover:bg-amber-400 hover:text-white  items-center m-1  disabled:cursor-not-allowed' >-</button>
                                                        <span className=''>{options.childern}</span>
                                                        <button onClick={(e) => handleOption("childern", "i",e)} className='border border-gray-700 w-6 h-6 text-center  hover:bg-amber-400 hover:text-white items-center m-1'>+</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="single-select-box mb-30">
                                        <div class="boking-tittle">
                                            <span>{`Room :${options.room}`}</span>
                                        </div>
                                        <div class="select-this">
                                            <form action="#">
                                                <div class="select-itms">
                                                    <div class=" top-50 bg-white text-gray-500 rounded-lg shadow-gray-500 flex items-center text-center">
                                                        <span className=''>Room</span>
                                                        <button disabled={options.room<=1}onClick={(e) => handleOption("room", "d",e)} className='border border-gray-700 w-6 h-6 text-center  hover:bg-amber-400 hover:text-white  items-center m-1 disabled:cursor-not-allowed'>-</button>
                                                        <span className=''>{options.room}</span>
                                                        <button onClick={(e) => handleOption("room", "i",e)} className='border border-gray-700 w-6 h-6 text-center  hover:bg-amber-400 hover:text-white  items-center m-1'>+</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="single-select-box pt-45 mb-30">
                                        <button class="btn select-btn bg-amber-400 text-white" onClick={(e)=>handleSearch(e)}>Search</button>
                                    </div>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <section class="make-customer-area customar-padding fix">
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-xl-5 col-lg-6">
                            <div class="customer-img mb-120">
                                <img src="assets/img/customer/customar1.png" class="customar-img1" alt="" />
                                <img src="assets/img/customer/customar2.png" class="customar-img2" alt="" />
                                <div class="service-experience heartbeat">
                                    <h3>25 Years of Service<br />Experience</h3>
                                </div>
                            </div>
                        </div>
                        <div class=" col-xl-4 col-lg-4">
                            <div class="customer-caption">
                                <span>About our company</span>
                                <h2>Make the customer the hero of your story</h2>
                                <div class="caption-details">
                                    <p class="pera-dtails">Lorem ipsum dolor sit amet, consectetur adipisic- ing elit, sed do eiusmod tempor inc. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
                                    <a href="#" class="btn more-btn1 bg-amber-400 text-white">Learn More <i class="ti-angle-right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="room-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-8">
                            <div class="font-back-tittle mb-45">
                                <div class="archivment-front">
                                    <h3>Our Rooms</h3>
                                </div>
                                <h3 class="archivment-back">Our Rooms</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="single-room mb-50">
                                <div class="room-img">
                                    <a href="rooms.html"><img src="assets/img/rooms/room1.jpg" alt="" /></a>
                                </div>
                                <div class="room-caption">
                                    <h3><a href="rooms.html">Classic Double Bed</a></h3>
                                    <div class="per-night">
                                        <span><u>$</u>150 <span>/ par night</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="single-room mb-50">
                                <div class="room-img">
                                    <a href="rooms.html"><img src="assets/img/rooms/room2.jpg" alt="" /></a>
                                </div>
                                <div class="room-caption">
                                    <h3><a href="rooms.html">Classic Double Bed</a></h3>
                                    <div class="per-night">
                                        <span><u>$</u>150 <span>/ par night</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="single-room mb-50">
                                <div class="room-img">
                                    <a href="rooms.html"> <img src="assets/img/rooms/room3.jpg" alt="" /></a>
                                </div>
                                <div class="room-caption">
                                    <h3><a href="rooms.html">Classic Double Bed</a></h3>
                                    <div class="per-night">
                                        <span><u>$</u>150 <span>/ par night</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="single-room mb-50">
                                <div class="room-img">
                                    <a href="rooms.html"><img src="assets/img/rooms/room4.jpg" alt="" /></a>
                                </div>
                                <div class="room-caption">
                                    <h3><a href="rooms.html">Classic Double Bed</a></h3>
                                    <div class="per-night">
                                        <span><u>$</u>150 <span>/ par night</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="single-room mb-50">
                                <div class="room-img">
                                    <a href="rooms.html"><img src="assets/img/rooms/room5.jpg" alt="" /></a>
                                </div>
                                <div class="room-caption">
                                    <h3><a href="rooms.html">Classic Double Bed</a></h3>
                                    <div class="per-night">
                                        <span><u>$</u>150 <span>/ par night</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="single-room mb-50">
                                <div class="room-img">
                                    <a href="rooms.html"> <img src="assets/img/rooms/room6.jpg" alt="" /></a>
                                </div>
                                <div class="room-caption">
                                    <h3><a href="rooms.html">Classic Double Bed</a></h3>
                                    <div class="per-night">
                                        <span><u>$</u>150 <span>/ par night</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center text-center">
                        <div class="room-btn pt-70">
                            <a href="#" class="btn view-btn1 bg-amber-400 text-white">View more  <i class="ti-angle-right"></i> </a>
                        </div>
                    </div>
                </div>

            </section>
            <div class="dining-area dining-padding-top">
                <div class="single-dining-area left-img">
                    <div class="container">
                        <div class="row justify-content-end">
                            <div class="col-lg-8 col-md-8">
                                <div class="dining-caption">
                                    <span>Our resturent</span>
                                    <h3>Dining & Drinks</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
                                    <a href="#" class="btn border-btn bg-amber-400 text-white">Learn More <i class="ti-angle-right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single-dining-area right-img">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-lg-8 col-md-8">
                                <div class="dining-caption text-right">
                                    <span>Our Pool</span>
                                    <h3>Swimming Pool</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
                                    <a href="#" class="btn border-btn bg-amber-400 text-white">Learn More  <i class="ti-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-area testimonial-padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-9 col-lg-9 col-md-9">
                            <div class="h1-testimonial-active">
                                <div class="single-testimonial pt-65">
                                    <div class="font-back-tittle mb-105">
                                        <div class="archivment-front">
                                            <img src="assets/img/logo/testimonial.png" alt="" />
                                        </div>
                                        <h3 class="archivment-back">Testimonial</h3>
                                    </div>
                                    <div class="testimonial-caption text-center">
                                        <p>Yorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                                        </p>
                                        <div class="testimonial-ratting">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="rattiong-caption">
                                            <span>Clifford Frazier, <span>Regular Client</span> </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-area blog-padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-8">
                            <div class="font-back-tittle mb-50">
                                <div class="archivment-front">
                                    <h3>Our Blog</h3>
                                </div>
                                <h3 class="archivment-back">Recent News</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single-blog mb-30">
                                <div class="blog-img">
                                    <a href="single-blog.html"><img src="assets/img/our_blog/blog-img1.jpg" alt="" /></a>
                                </div>
                                <div class="blog-caption">
                                    <div class="blog-cap-top d-flex justify-content-between mb-40">
                                        <span>news</span>
                                        <ul><li>by<a href="#"> Jhon Guru</a></li></ul>
                                    </div>
                                    <div class="blog-cap-mid">
                                        <p><a href="single-blog.html">5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</a></p>
                                    </div>
                                    <div class="blog-cap-bottom d-flex justify-content-between">
                                        <span>Feb 28, 2020</span>
                                        <span><img src="assets/img/our_blog/blog-comments-icon.jpg" alt="" />3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single-blog mb-30">
                                <div class="blog-img">
                                    <a href="single-blog.html"> <img src="assets/img/our_blog/blog-img2.jpg" alt="" /></a>
                                </div>
                                <div class="blog-caption">
                                    <div class="blog-cap-top d-flex justify-content-between mb-40">
                                        <span>news</span>
                                        <ul><li>by<a href="#"> Jhon Guru</a></li></ul>
                                    </div>
                                    <div class="blog-cap-mid">
                                        <p><a href="single-blog.html">5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</a></p>
                                    </div>
                                    <div class="blog-cap-bottom d-flex justify-content-between">
                                        <span>Feb 28, 2020</span>
                                        <span><img src="assets/img/our_blog/blog-comments-icon.jpg" alt="" />3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single-blog mb-30">
                                <div class="blog-img">
                                    <a href="single-blog.html"><img src="assets/img/our_blog/blog-img3.jpg" alt="" /></a>
                                </div>
                                <div class="blog-caption">
                                    <div class="blog-cap-top d-flex justify-content-between mb-40">
                                        <span>news</span>
                                        <ul><li>by<a href="#"> Jhon Guru</a></li></ul>
                                    </div>
                                    <div class="blog-cap-mid">
                                        <p><a href="single-blog.html">5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</a></p>
                                    </div>
                                    <div class="blog-cap-bottom d-flex justify-content-between">
                                        <span>Feb 28, 2020</span>
                                        <span><img src="assets/img/our_blog/blog-comments-icon.jpg" alt="" />3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gallery-area fix">
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="gallery-active owl-carousel">
                                <div class="gallery-img">
                                    <a href="#"><img src="assets/img/gallery/gallery1.jpg" alt="" /></a>
                                </div>
                                <div class="gallery-img">
                                    <a href="#"><img src="assets/img/gallery/gallery2.jpg" alt="" /></a>
                                </div>
                                <div class="gallery-img">
                                    <a href="#"><img src="assets/img/gallery/gallery3.jpg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
