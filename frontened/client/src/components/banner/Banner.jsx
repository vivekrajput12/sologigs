import React from 'react'
import "./Banner.scss"
// import myImage from './banner.jpg'
export default function Banner() {
  return (
    <div className='banner' data-aos="fade-up">
        <div className='imgi'>
              <img src='https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="My Image" className='img'/>
              <div className='heading' data-aos="fade-right">
                  <h3>UPTO 30% OFF</h3>
                  <h2>EXCLUSIVE</h2>
                  <h1>AUTOMOBILE ITEMS</h1>
                  <button>Shop Now</button>
              </div>
              <div className="arrowbtn">
              <button>&gt;</button>
              <button>&lt;</button>
              

              </div>
        </div>
    </div>
  )
}
