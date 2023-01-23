import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SerachItem from '../../Components/SearchItem/SerachItem'

function Search() {
    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [openDate, setOpenDate] = useState(false)
    return (
        <div>
            <Navbar />
            <div className='flex'>
            <div class="col-lg-4 ">
                <div class="blog_right_sidebar fixed">
                    <aside class="single_sidebar_widget search_widget ">
                        <form action="#">
                            <span className='p-2'>Destination</span>
                            <div class="form-group p-2">

                                <div class="input-group mb-3">

                                    <input type="text" class="form-control" placeholder={destination} />
                                    <div class="input-group-append">
                                        <button class="btn" type="button"><i class="ti-search"></i></button>
                                    </div>
                                </div>
                            </div>

                        </form>
                        {/* </aside>

                        <aside class="single_sidebar_widget post_category_widget"> */}
                        <form action="#">
                            <span className='p-2' onClick={() => setOpenDate(!openDate)}>Check in date</span>
                            <div class="form-group p-2">

                                <div class="input-group mb-3 ">

                                    <input type="text" class="form-control" placeholder={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                                        date[0].endDate,
                                        "MM/dd/yyyy"
                                    )}`}
                                        onClick={() => setOpenDate(!openDate)} />
                                    {openDate &&
                                        <DateRange
                                            onChange={(item) => setDate([item.selection])}
                                            minDate={new Date()}
                                            ranges={date}
                                            className="relative" />}

                                </div>
                            </div>

                        </form>
                        <span className='p-2'>Options</span>
                        <div className='p-4'>
                            <div className='flex justify-between'>
                                <p className='ml-2'>Min Price(per night)</p>
                                <input type="number" className='h-6 w-6 border border-#f3eeff text-center'></input>
                            </div>
                            <div className='flex justify-between'>
                                <p className='ml-2'>Max Price(per night)</p>
                                <input type="number" className='h-6 w-6 border border-#f3eeff text-center'></input>
                            </div>
                            <div className='flex justify-between'>
                                <p className='ml-2'>Adult</p>
                                <input type="number" className='h-6 w-6 border border-#f3eeff text-center' placeholder={options.adult}></input>
                            </div>
                            <div className='flex justify-between'>
                                <p className='ml-2'>Childern</p>
                                <input type="number" className='h-6 w-6 border border-#f3eeff text-center'placeholder={options.childern}></input>
                            </div>
                            <div className='flex justify-between'>
                                <p className='ml-2'>Room</p>
                                <input type="number" className='h-6 w-6 border border-#f3eeff text-center'placeholder={options.room}></input>
                            </div>
                        </div>
                        <button class="button text-purple-400 rounded-0 primary-bg w-100 btn_1 boxed-btn"
                            type="submit">Search</button>
                    </aside>
                </div>
            </div>
            <div>
                <SerachItem/>
                <SerachItem/>
                <SerachItem/>
                <SerachItem/>
                <SerachItem/>
                <SerachItem/>
            </div>
            </div>
        </div>
    )
}

export default Search
