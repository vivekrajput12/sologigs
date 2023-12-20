import React, { useRef } from 'react';
import "./AdvSlider.css";
import AdvMycard from './advMycard';
// import advMycard from './advMycard';
// import { cards } from '../../data';

export default function AdvSlider({datas}) {
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
    <div className='advslider'>
      <button className='pre-btn' onClick={prefun}>&lt;</button>
      <button className='next-btn' onClick={nextfun}>&gt;</button>
      <div className='product-container' ref={boxRef} data-aos="fade-right">
        {cdatas && cdatas.map(card => (
          <AdvMycard item={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
