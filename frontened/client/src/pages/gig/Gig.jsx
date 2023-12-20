import React, { useEffect, useState } from 'react'
import "./Gig.scss"
import { imgdata } from '../../data'
import Slider from '../../components/slider/Slider'
import { Link, useParams } from 'react-router-dom';
import Reviews from '../../components/reviews/Reviews';
import ImgSlider from '../../components/slider/ImgSlider';
const url = "http://localhost:8800/api/gigs/single/";
const url2 = "http://localhost:8800/api/users/";

// import imgdata from "../../data"
export default function Gig() {
  const { id } = useParams();
  const [gigdata, setgig] = useState([]);
  const [userdata, setuser] = useState([]);
  
  useEffect(() => {
    try {
      const loadGig = async () => {
        const resp = await fetch(url + `${id}`, { credentials: 'include' });
  
        if (resp.ok) {
          const jsonresp = await resp.json();
          console.log(jsonresp);
          setgig(jsonresp);
        } else {
          console.error('Failed to fetch gig data');
        }
      };
  
      loadGig();
    } catch (err) {
      console.error(err);
    }
  }, [id]); // Include 'id' as a dependency
  
  console.log(gigdata);
  
  useEffect(() => {
    try {
      console.log(url2 + `${gigdata.userId}`);
  
      if (gigdata.userId) { // Check if gigdata.userId is available
        const loadUser = async () => {
          const resp = await fetch(url2 + `${gigdata.userId}`, { credentials: 'include' });
  
          if (resp.ok) {
            const jsonresp = await resp.json();
            console.log(jsonresp);
            setuser(jsonresp);
          } else {
            console.error('Failed to fetch user data');
          }
        };
  
        loadUser();
      }
    } catch (err) {
      console.error(err);
    }
  }, [gigdata]); 
  return (
    <div className='gig'>
        <div className ='container'>
              <div className="left">
                  <span className='breadcrumbs'>SoloGigs &gt; GRAPHIC & DESIGN</span>
                  <h1>{gigdata.title}</h1>
                      <div className="user">
                            <img
                              className="pp"
                              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                              alt=""
                            />
                            <span>{userdata.username}</span>
                            {!isNaN(gigdata.totalStars / gigdata.starNumber) && (
                              <div className="stars">
                             { Array(Math.round(gigdata.totalStars / gigdata.starNumber)).fill().map((item , i)=>(
                                <img src="/img/star.png" alt=""  key = {i}/>
                            ))}
                                
                                <span>{Math.round(gigdata.totalStars / gigdata.starNumber)}</span>
                              </div>
                                )}
                   </div>
              
              {/*<ImgSlider datas={gigdata.images} className = 'slider'/>*/}
              <Slider datas={gigdata} className = 'slider'/>
              <h2>About This Gig</h2>
              <p>
                {gigdata.desc}
                </p>
                <div className="seller">
                  <h2>About The Seller</h2>
                  <div className="user">
                    <img
                      src={userdata.img || "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                      alt=""
                    />
                    <div className="info">
                       <span>{userdata.username}</span>
                       {!isNaN(gigdata.totalStars / gigdata.starNumber) && (
                        <div className="stars">
                       { Array(Math.round(gigdata.totalStars / gigdata.starNumber)).fill().map((item , i)=>(
                          <img src="/img/star.png" alt=""  key = {i}/>
                      ))}
                          
                          <span>{Math.round(gigdata.totalStars / gigdata.starNumber)}</span>
                        </div>
                          )}
                      <button>Contact Me</button>
                    </div>
                  </div>
                  <div className="box">
                    <div className="items">
                      <div className="item">
                        <span className="title">From</span>
                        <span className="desc">{userdata.country}</span>
                      </div>
                      <div className="item">
                        <span className="title">Member since</span>
                        <span className="desc">Aug 2022</span>
                      </div>
                      <div className="item">
                        <span className="title">Avg. response time</span>
                        <span className="desc">4 hours</span>
                      </div>
                      <div className="item">
                        <span className="title">Last delivery</span>
                        <span className="desc">1 day</span>
                      </div>
                      <div className="item">
                        <span className="title">Languages</span>
                        <span className="desc">English</span>
                      </div>
                    </div>
                    <hr />
                    <p>
                      {userdata.desc}
                    </p>
                  </div>
                </div>
                <Reviews gigid = {id}/>
              </div>
              
              <div className="right">
                  <div className="price">
                    <h3>{gigdata.shortTitle}</h3>
                    <h2>${gigdata.price}</h2>
                  </div>
                  <p>
                   {gigdata.shortDesc}
                  </p>
                  <div className="details">
                    <div className="item">
                      <img src="/img/clock.png" alt="" />
                      <span>{gigdata.deliveryTime} days delivery</span>
                    </div>
                    <div className="item">
                      <img src="/img/recycle.png" alt="" />
                      <span>{gigdata.revisionNumber} Revisions</span>
                    </div>
                  </div>
                  <div className="features">
                  {Array.isArray(gigdata.features) && gigdata.features.map((feature) => (
                    <div className="item" key={feature}>
                      <img src="/img/greencheck.png" alt="" />
                      <span>{feature}</span>
                    </div>
                  ))}
                    <div className="item">
                      <img src="/img/greencheck.png" alt="" />
                      <span>Prompt writing</span>
                    </div>
                    <div className="item">
                      <img src="/img/greencheck.png" alt="" />
                      <span>Artwork delivery</span>
                    </div>
                    <div className="item">
                      <img src="/img/greencheck.png" alt="" />
                      <span>Image upscaling</span>
                    </div>
                    <div className="item">
                      <img src="/img/greencheck.png" alt="" />
                      <span>Additional design</span>
                    </div>
                  </div>
                  <Link to = {`/pay/${id}`}>
                  <button>Continue</button>
                  </Link>
            </div>
        
        </div>
    </div>
  );
};
