import React, { useEffect, useState } from 'react'
import  "./Review.scss"
const url = "http://localhost:8800/api/users/";
export default function SingleReview({review}) {
const [userreview, set] = useState([]);
useEffect(() => {
  try {
    const loadrev = async () => {
      
      const resp = await fetch(url + `${review.userId}`, { credentials: 'include' });

      if (resp.ok) {
        const jsonresp = await resp.json();
        console.log(jsonresp);
        set(jsonresp);
      } else {
        console.error('Failed to fetch gig data');
      }
    };

    loadrev();
  } catch (err) {
    console.error(err);
  }
}, []);
// console.log("review ", review);
// console.log(url + `${review.userId}`);
// console.log("userreview ka data " , userreview);
  return (
    <div className="review">
    <div className="user">
      <img
        className="pp"
        src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="info">
        <span>{userreview.username}</span>
        <div className="country">
          <img
            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
            alt=""
          />
          <span>{userreview.country}</span>
        </div>
      </div>
    </div>
        <div className='star'>
                {Array(review.star).fill().map((item , i)=>(
                <img src="/img/star.png" alt="" key = {i} />

                ))}
                <span>{review.star}</span>
          </div>
    <p>
      {review.desc}
    </p>
    <div className="helpful">
      <span>Helpful?</span>
      <img src="/img/like.png" alt="" />
      <span>Yes</span>
      <img src="/img/dislike.png" alt="" />
      <span>No</span>
    </div>
  </div>
  )
}
