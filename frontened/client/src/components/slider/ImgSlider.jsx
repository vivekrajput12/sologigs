import React, { useRef } from 'react';
import "./ImgSlider.css";
import Cmgcard from './Cmgcard';
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
  console.log("imgslider se",datas);
  // const cdatas = Array.isArray(datas.images) ? datas.images : [datas.images];
  return (
    <div className='Imgslider'>
      <button className='pre-btn' onClick={prefun}>&lt;</button>
      <button className='next-btn' onClick={nextfun}>&gt;</button>
      <div className='product-c' ref={boxRef}>
      {datas.images && datas.images.map(item => {
        console.log("Image URL:", item); // Add this line to check the URL
        return <Cmgcard item={item} key={datas._id} />;
      })}
      </div>
    </div>
  );
}
