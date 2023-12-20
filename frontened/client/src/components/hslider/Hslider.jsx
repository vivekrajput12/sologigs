import React from 'react'
import Hcart from './Hcart'
import "./Hslider.scss"
export default function Hslider({datas}) {
  return (
    <div className='hslider'>
      {datas && datas.map((single)=>(<Hcart items = {single} key={single.id}/>))}
    </div>
  )
}
