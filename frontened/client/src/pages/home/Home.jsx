import React from 'react'
import Featured from '../../components/featured/Featured'
import Trustedby from '../../components/trustedby/Trustedby'
import Slider from '../../components/slider/Slider'
import "./Home.scss"
import {cards ,projects} from '../../data'
// import Projectcard from '../../components/slider/Projectcard'
import Projectslider from '../../components/slider/Projectslider'
import { Link } from 'react-router-dom'
import AnimatedText from '../../components/animatedtext/AnimatedText'
export default function Home() {

  return (
    <div className='home'>
      <Featured/>
      <Trustedby/>
      <Slider datas={cards}/>
      <div className='features' >
        <div className='container' data-aos="fade-in">
          <div className='left'>
                <div className='item'>
                <h1>The best part? Everything.</h1>
                    <div className='title'>
                        <img src="./img/check-mark.png" alt="" />
                        Stick to your budget
                        </div>
                        <p> the right service for every price point. No hourly rates, just project-based pricing.</p>
                    </div>
                    <div className='item'>
                    <div className='title'>
                    <img src="./img/check-mark.png" alt="" />
                    Stick to your budget
                    </div>
                    <p> the right service for every price point. No hourly rates, just project-based pricing.</p>
                </div>
                <div className='item'>
                    <div className='title'>
                    <img src="./img/check-mark.png" alt="" />
                    Stick to your budget
                    </div>
                    <p> the right service for every price point. No hourly rates, just project-based pricing.</p>
                </div><div className='item'>
                    <div className='title'>
                    <img src="./img/check-mark.png" alt="" />
                    Stick to your budget
                    </div>
                    <p> the right service for every price point. No hourly rates, just project-based pricing.</p>
                </div>
                </div>
          <div className='right'>
          <video src="./img/video.mp4" controls autoPlay muted loop></video>
          </div>
        </div>
      </div>
      <div className='features2' data-aos="fade-up">
        <div className='container'>
          <div className='left'>
                <div className='item'>
                  <h1>SoloGigs business.</h1>
                  <h1>A solution built for business</h1>
                  <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
                </div>
                <div className='title'>
                  <img src="./img/check-mark2.png" alt="" />
                  Talent matching
                </div>
                <div className='title'>
                  <img src="./img/check-mark2.png" alt="" />
                  Dedicated account management
                </div>
                <div className='title'>
                  <img src="./img/check-mark2.png" alt="" />
                  Team collaboration tools
                </div>
                <div className='title'>
                  <img src="./img/check-mark2.png" alt="" />
                  Business payment solutions
                </div>
                <button>Explore SoloGigs business</button>
          </div>
          <div className='right'>
          <img src="./img/features2.jpeg" alt="" />

          </div>
        </div>
      </div>
      <AnimatedText/>

      <Projectslider datas = {projects} />
      {/*<Link to="http://127.0.0.1:5174/" target="_blank">Go to Other Site</Link>*/}
      <div className='advertiselink'>
        <img src='./img/advertise.jpeg' alt='' className='imgleft' data-aos="fade-right"/>
        <div className='advright'> 
            <span>
            Turn heads, not pages. Advertise your products here – where desire meets visibility<br/>
            And capture attention effortlessly with our prime advertising space...
            </span>
            <Link to={"/adhome"} className='Link'>            
              <button className='btn' data-aos="fade-up">
                Lets Go
              </button>
            </Link>

        </div>
      </div>
    </div>
  )
}
