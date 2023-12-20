import React from 'react'
import "./Home2.scss"
import Banner from '../../components/banner/Banner'
import AdvSlider from '../../components/adslider/AdvSlider'
import {category ,projects} from '../../data'
import Adv_navbar from "../../components/adv_navbar/Adv_navbar"
export default function Home2() {
  return (
    <div className='home2'>
    <div className='topmost'>
          <img src="https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg" alt="" data-aos="fade-left"/>
          <span className='text2' data-aos="fade-right">
          Unlock a world of sleek transactions – the perfect hub to buy or sell new and pre-loved items. Your wait is over; indulge in a sexier way to trade.
          </span>
          
      </div>
      <div className='top'>
      <span className='uppertext'>
          <span className='text' data-aos="fade-right">
            Unveil the allure of your brand on this canvas of possibilities. Let your product be the star of the show, a tantalizing tease that leaves a lasting impression. 
          </span>
          <span className='lefttext' data-aos="fade-left">
            This poster isn't just a space—it's a seductive invitation for your business to take center stage, where desire meets exposure.
          </span>
          <span className='text'data-aos="fade-right">
             Don't just advertise; ignite passion and let your product become the fantasy that everyone wants to indulge in. Your brand, our canvas—let the provocative promotion begin.
          </span>
      </span>
          <img src="https://images.pexels.com/photos/1860704/pexels-photo-1860704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" data-aos="fade-left"/>
      </div>
      <Banner/>
      <AdvSlider datas={category}/>
    </div>
  )
}
