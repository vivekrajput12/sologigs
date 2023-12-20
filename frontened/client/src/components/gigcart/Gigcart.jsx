import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Gigcart.scss"
const url = "http://localhost:8800/api/users/";

export default function Gigcart({item}) {

        const[usersdata , setusers] = useState([]);
        useEffect(()=>{
            try {
                let loadgig = async function(){
                  let resp = await fetch(`http://localhost:8800/api/users/${item.userId}`, {credentials: 'include'});
      
                  if(resp.ok){
                    let jsonresp = await resp.json();
                    console.log(jsonresp);
                    setusers(jsonresp);
                  }
                  console.log("resp" , resp);
                }
                loadgig();
            } catch(err){
              console.log(err);
            }
        },[]);

  return (
    <Link to = {`/gig/${item._id}`} className='link'>
    <div className='gigcart' data-aos="fade-in">
            <img src={item.cover} alt="" />
            <div className="info">
                    <div className='user'>
                            <img src={usersdata.img || "/img/noavatar.jpg"} alt="" />
                            <span>{usersdata.username}</span>
                    </div>
                     <p>{item.title}</p>
                    <div className="star">
                        <img src="./img/star.png" alt="" />
                        <span>{item.star}</span>
                    </div>

            </div>
            <hr/>
            <div className="details">
                    <img src="./img/heart.png" alt="" />
                    <div className="price">
                            <span>STARTING AT</span>
                            <h2>${item.price}</h2>
                    </div>
            </div>
            
    </div>
    </Link>
  )
}
