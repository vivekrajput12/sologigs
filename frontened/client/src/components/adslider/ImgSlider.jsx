import React, { useRef } from 'react';
import "./ImgSlider.css";
import Mycard from './Mycard';
// import { cards } from '../../data';

export default function ImgSlider({datas}) {
  const boxRef = useRef(null);

  const prefun = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width;
    }
  };

  const nextfun = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width;
    }
  };
  const cdatas = Array.isArray(datas) ? datas : [datas];
  return (
    <div className='slider'>
      <button className='pre-btn' onClick={prefun}>&lt;</button>
      <button className='next-btn' onClick={nextfun}>&gt;</button>
      <div className='product-container' ref={boxRef}>
        {cdatas && cdatas.map(card => (
          // <Mycard item={card} key={card.id} />
          <img src={card} alt="" />
        ))}
      </div>
    </div>
  );
}
