// import React from 'react'
// import "./Mycard.scss"
// import { Link } from 'react-router-dom'
// export default function Mycard({item}) {
//   return (
//     <Link to="/gigs?cat=design">
//     <div className='mycard'>
//       <img src={item.img} alt="" />

//       <span className='desc'>{item.desc}</span>
//       <span className='title'>{item.title}</span>

//     </div>
//     </Link>
//   )
// }
// import React from 'react'
// import "./Mycard.scss"
// import { Link } from 'react-router-dom'
// export default function Mycard({item}) {
//   return (
//     <Link to="/gigs?cat=design">
//     <div className='mycard'>
//     {item.images && item.images.length > 0 ? (
//       <div className='mycard'>
//         <img src={item.images} alt="" />
//       </div>
//     ):
//       (<div className='mycard'>
//       <img src={item.img} alt="" />
//       <span className='desc'>{item.desc}</span>
//       <span className='title'>{item.title}</span>
//     </div>)
//       }

//     </div>
//     </Link>
//   )
// }

// import React from 'react';
// import "./AdvMycard.scss";
// import { Link } from 'react-router-dom';

// export default function AdvMycard({ item }) {
//   console.log("AdvMycard is rendering");
//   console.log("title here " , item.title)
//   return (
//     <Link to={`/adds?cat=${item.cat}`}>
//       <div className='mycard'>
//         {item.images && item.images.length > 0 ? (
//           item.images.map((image, index) => (
//             <img key={index} src={image} alt={`Image ${index}`} />
//           ))
//         ) : (
//           <>
//             <img src={item.img} alt="" />
//             <span className='title'>{item.title}</span>
//             <span className='desc'>{item.desc}</span>
//           </>
//         )}
//       </div>
//     </Link>
//   );
// }

import React from 'react';
import "./AdvMycard.scss";
import { Link } from 'react-router-dom';

export default function AdvMycard({ item }) {
  console.log("AdvMycard is rendering");
  console.log("title here " , item.title);
  return (
    <Link to={`/adds?cat=${item.cat}`}>
      <div className='mycard' data-aos="fade-in">
        
            <img src={item.img} alt="" />
            <span className='title'>{item.title}</span>
            <span className='desc'>{item.desc}</span> 
  
      </div>
    </Link>
  );
}

