import React from 'react'
import Featured from '../../components/featured/Featured'
import Trustedby from '../../components/trustedby/Trustedby'
import Slider from '../../components/slider/Slider'
import "./Home.scss"
import {cards ,projects} from '../../data'
// import Projectcard from '../../components/slider/Projectcard'
import Projectslider from '../../components/slider/Projectslider'
export default function Home() {
  
  return (
    <div className='home'>
      <Featured/>
      <Trustedby/>
      <Slider datas={cards}/>
      <div className='features'>
        <div className='container'>
          <div className='left'>
                <div className='item'>
                <h1>The best part? Everything.</h1>
                    <div className='title'>
                        <img src="./img/check.png" alt="" />
                        Stick to your budget
                        </div>
                        <p> the right service for every price point. No hourly rates, just project-based pricing.</p>
                    </div>
                    <div className='item'>
                    <div className='title'>
                    <img src="./img/check.png" alt="" />
                    Stick to your budget
                    </div>
                    <p> the right service for every price point. No hourly rates, just project-based pricing.</p>
                </div>
                <div className='item'>
                    <div className='title'>
                    <img src="./img/check.png" alt="" />
                    Stick to your budget
                    </div>
                    <p> the right service for every price point. No hourly rates, just project-based pricing.</p>
                </div><div className='item'>
                    <div className='title'>
                    <img src="./img/check.png" alt="" />
                    Stick to your budget
                    </div>
                    <p> the right service for every price point. No hourly rates, just project-based pricing.</p>
                </div>
                </div>
          <div className='right'>
          <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className='features2'>
        <div className='container'>
          <div className='left'>
                <div className='item'>
                  <h1>SoloGigs business.</h1>
                  <h1>A solution built for business</h1>
                  <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
                </div>
                <div className='title'>
                  <img src="./img/check.png" alt="" />
                  Talent matching
                </div>
                <div className='title'>
                  <img src="./img/check.png" alt="" />
                  Dedicated account management
                </div>
                <div className='title'>
                  <img src="./img/check.png" alt="" />
                  Team collaboration tools
                </div>
                <div className='title'>
                  <img src="./img/check.png" alt="" />
                  Business payment solutions
                </div>
                <button>Explore SoloGigs business</button>
          </div>
          <div className='right'>
          <img src="./img/features2.jpeg" alt="" />

          </div>
        </div>
      </div>

      <Projectslider datas = {projects}/>
    </div>
  )
}
