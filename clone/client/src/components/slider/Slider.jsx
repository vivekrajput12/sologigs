import React, { useRef } from 'react';
import "./Slider.css";
import Mycard from './Mycard';
// import { cards } from '../../data';

export default function Slider({datas}) {
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

  return (
    <div className='slider'>
      <button className='pre-btn' onClick={prefun}>&lt;</button>
      <button className='next-btn' onClick={nextfun}>&gt;</button>
      <div className='product-container' ref={boxRef}>
        {datas && datas.map(card => (
          <Mycard item={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
