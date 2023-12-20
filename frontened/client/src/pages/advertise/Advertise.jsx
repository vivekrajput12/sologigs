import React, { useEffect, useState } from 'react'
import "./Advertise.scss"
import wally from './white.jpg'
import wally1 from './wall.jpg'
import Slider from '../../components/slider/Slider'
import ImgSlider from '../../components/slider/ImgSlider'
import { cards , adcards , realtedPhone} from '../../data'
import Reviews from '../../components/reviews/Reviews'
import { Link, useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import Hslider from '../../components/hslider/Hslider'
const url = "http://localhost:8800/api/adv/";
const url2 = "http://localhost:8800/api/users/";
export default function Advertise() {
  // const {id} = useParams();
  // const queryClient = useQueryClient()
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["ads"],
  //   queryFn: () =>
  //     newRequest.get(`/adv/${id}`).then((res) => {
  //       return res.data;
  //     }),
  // });
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [userdata, setuser] = useState([]);
  
  useEffect(() => {
    try {
      const loadGig = async () => {
        const resp = await fetch(url + `${id}`, { credentials: 'include' });
  
        if (resp.ok) {
          const jsonresp = await resp.json();
          console.log(jsonresp);
          setdata(jsonresp);
        } else {
          console.error('Failed to fetch gig data');
        }
      };
  
      loadGig();
    } catch (err) {
      console.error(err);
    }
  }, [id]); // Include 'id' as a dependency
  
  console.log(data);
  
  useEffect(() => {
    try {
      console.log(url2 + `${data.userId}`);
  
      if (data.userId) { // Check if gigdata.userId is available
        const loadUser = async () => {
          const resp = await fetch(url2 + `${data.userId}`, { credentials: 'include' });
  
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
  }, [data]); 
  console.log("userdata bhai" , userdata);
  console.log(data);
  return (
    <div className='advertise'>
        {/*<img src={wally1} className='wallyimg'/>*/}
        <div className='rest'>
        <Link to="/adhome" className='Ablink'>Advertisement &gt; </Link>
        <p>{data.title}</p>
        <ImgSlider datas={data}/>
        <span className='about'>About This Product</span>
        <div className='desc'>
       {data.desc}
        </div>
        <div className='buy'>
                <div className='shortdesc'>
                    <span className='title'>{data.title}</span>
                    <span>{data.shortTitle}</span>
                </div>
                <div className='feature'>
                    {data.features && data.features.map((feature)=>(<span>{feature}</span>))}
                    
                </div>
                <Link to= {`/advpay/${id}`}>
                <button>Buy Now</button>
                </Link>
        </div>
        <div className="seller" >
                  <h2>About The Seller</h2>
                  <div className="user">
                    <img
                      src= {data.image || "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                      className='userimg' alt=""
                    />
                    <div className="info">
                       <span>{userdata.username}</span>
                       
                         {/* !isNaN(gigdata.totalStars / gigdata.starNumber) && (
                        <div className="stars">
                       { Array(Math.round(gigdata.totalStars / gigdata.starNumber)).fill().map((item , i)=>(
                          <img src="/img/star.png" alt=""  key = {i}/>
                      ))}
                          
                          <span>{Math.round(gigdata.totalStars / gigdata.starNumber)}</span>
                        </div>
                          ) */} 
                      <button>Contact Me</button>
                    </div>
                  </div>
                  <div className="box" >
                    <div className="items">
                      <div className="item">
                        <span className="title">From</span>
                        <span className="desc">India</span>
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
                <div className='reviews'>
                <Reviews gigid={id}/>
                </div>
                <div className='related-products'>
                <span className='spany'>Explore an enticing array of products tailored to captivate your interest –</span> 
                <br/>
                <span className='spany2'>A curated selection of items that effortlessly blend allure with sophistication.
                </span>
                      <Hslider datas={realtedPhone}/>
                </div>
    </div>
    </div>
  )
}
