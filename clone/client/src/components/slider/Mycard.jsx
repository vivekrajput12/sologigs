import React from 'react'
import "./Mycard.scss"
import { Link } from 'react-router-dom'
export default function Mycard({item}) {
  return (
    <Link to="/gigs?cat=design">
    <div className='mycard'>
      <img src={item} alt="" />
      <span className='desc'>{item.desc}</span>
      <span className='title'>{item.title}</span>

    </div>
    </Link>
  )
}
