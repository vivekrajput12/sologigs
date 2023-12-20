import React, { useState } from 'react'
import "./Featured.scss"
import { useNavigate } from 'react-router-dom';
export default function Featured() {
  const [input  , setinput] = useState("");
  const navigate = useNavigate();
  const handlesubmit = ()=>{
    // const navigate = useNavigate();
    // console.log(`search=${input}`)
    navigate(`/gigs?search=${input}`);
  }
  return (
    <div className='featured'>
        <div className='container'>
            <div className='left'>
               <h1>Find the perfect <i>freelance</i> service for your bussiness</h1>
                <div className='search'> 
                    <div className='searchInput'>
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='try "building mobile app"' onChange={(e)=>setinput(e.target.value)}/>
                    </div>
                    <button onClick={handlesubmit}>search</button>
                </div>
               <div className='popular'>
                <span>Popular</span>
                <button>Web Design</button>
                <button>Wordpress</button>
                <button>Logo Design</button>
                <button>AI Services</button>

               </div> 
            </div>
            <div className='right'>
              <img src="./img/man.png" alt="" />
            </div>

      </div>
    </div>
  )
}
