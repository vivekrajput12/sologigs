import React, { useEffect, useState } from 'react'
import "./Reviews.scss"
import SingleReview from '../review/singleReview'
const url = "http://localhost:8800/api/review/";
const url2 = "http://localhost:8800/api/review";

// export default function Reviews({gigid}) {
//     const [reviewdata, setreview] = useState([]);
//     useEffect(() => {
//       try {
//         const loadrev = async () => {
//           const resp = await fetch(url + `${gigid}`, { credentials: 'include' });
    
//           if (resp.ok) {
//             const jsonresp = await resp.json();
//             console.log(jsonresp);
//             setreview(jsonresp);
//           } else {
//             console.error('Failed to fetch gig data');
//           }
//         };
    
//         loadrev();
//       } catch (err) {
//         console.error(err);
//       }
//     }, []);

//     const handleSubmit = (e)=>{
//       e.preventDefault();
//       const desc = e.target[0].value;
//       const star = e.target[1].value;
//     }
//   return (
//     <div className="reviews">
//                   <h2>Reviews</h2>
//                   {reviewdata.map((rev) => <SingleReview key={rev._id} review={rev} />)}
//                   <div className='add'>
//                       <h3>Add Review</h3>
//                       <form onSubmit={handleSubmit}>
//                           <input type='text' placeholder='write your veiws..'/>
//                           <select>
//                               <option value={1}>1</option>
//                               <option value={2}>2</option>
//                               <option value={3}>3</option>
//                               <option value={4}>4</option>
//                               <option value={5}>5</option>
//                           </select>
//                           <button>send</button>
//                       </form>
//                   </div>
                  
//     </div>
//   )
// }

export default function Reviews({ gigid }) {
  const [reviewdata, setReviewData] = useState([]);
  const [formData, setFormData] = useState({
    desc: '',
    star: 1,
  });

  useEffect(() => {
    try {
      const loadReviews = async () => {
        const resp = await fetch(url + `${gigid}`, { credentials: 'include' });

        if (resp.ok) {
          const jsonresp = await resp.json();
          console.log(jsonresp);
          setReviewData(jsonresp);
        } else {
          console.error('Failed to fetch gig data');
        }
      };

      loadReviews();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const desc = formData.desc;
    const star = formData.star;

    // Perform any further actions you need with the form data
    try {
      const response = await fetch(url2, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ desc, star, gigid }),
      });

      if (response.ok) {
        // Handle success
        // You might want to update the reviewdata state with the new review here
        console.error('review submitted');

      } else {
        // Handle error
        console.error('Failed to submit review');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {reviewdata.map((rev) => (
        <SingleReview key={rev._id} review={rev} />
      ))}
      <div className="add">
        <h3>Add Review</h3>
        <form className = "addForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="desc"
            placeholder="write your views.."
            value={formData.desc}
            onChange={handleChange}
          />
          <select
            name="star"
            value={formData.star}
            onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}