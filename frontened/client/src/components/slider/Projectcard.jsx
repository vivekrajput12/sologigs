import React from 'react'
import "./projectcard.scss"
export default function Projectcard({item}) {
  return (

    <div className='projectcard' data-aos="fade-in">
      <img src={item.img} alt="" />
      <div className='info'>
      <img src = {item.pp} alt="" />
        <div className='text'> 
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
        </div>
      </div>

    </div>
    
  )
}
