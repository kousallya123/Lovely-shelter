import React from 'react'

function SerachItem() {
  return (
    <div>          <div class="single-room mb-50 flex">
                  <div class="room-img">
                    <a href="/single"><img src="assets/img/rooms/room4.jpg" alt="" /></a>
                  </div>
                  <div class="room-caption">
                    <div className='flex justify-between'>
                    <h3><a href="rooms.html">Classic Double Bed</a></h3>
                    <h2>Excellent</h2>
                    <button>8.9</button>
                    </div>
                    <h4>500km from center</h4>
                    <button>Free airport tax</button>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default SerachItem
