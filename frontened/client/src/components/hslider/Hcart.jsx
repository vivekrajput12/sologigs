import React from 'react'
import "./Hcart.scss"
export default function Hcart({items}) {
  return (
    <div className='hcart' >
        <div className='left'>
            <img src={items.image} className='itemimg'/>
        </div>
        <hr/>
        <div className='right'>
            <span>{items.title}</span>
            <span>{items.desc}</span>
            <span>{items.price}</span>
            <div className='star'>
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            </div>
        </div>
    </div>
  )
}
