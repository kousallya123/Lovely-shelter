import React from 'react'

function Navbar() {
  return (
    <div> 
   <header>
       <div class="header-area header-sticky">
            <div class="main-header ">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-2">
                            <div class="logo">
                               <a href="/"><img src="assets/img/logo/logo.png" alt=""/></a>
                            </div>
                        </div>
                    <div class="col-xl-8 col-lg-8">
                            <div class="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">                                                                                                                                     
                                        <li className='none'><a href="/">Home</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="services.html">Service</a></li>
                                        <li><a href="blog.html">Blog</a>
                                            <ul class="submenu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="single-blog.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/hotels">Hotels</a>
                                            {/* <ul class="submenu">
                                                <li><a href="rooms.html">Rooms</a></li>
                                                <li><a href="elements.html">Element</a></li>
                                            </ul> */}
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>             
                        <div class="col-xl-2 col-lg-2">
                            <div class="header-btn">
                                <a href="#" class="btn bg-amber-400 text-white d-none d-lg-block">Book Online</a>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </header>
    </div>
  )
}

export default Navbar
