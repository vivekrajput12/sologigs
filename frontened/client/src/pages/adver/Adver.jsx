// import React, { useEffect, useRef, useState } from 'react'
// import "./Gigs.scss"
// import {gigs} from "../../data"
// import Gigcart from '../../components/gigcart/Gigcart'
// import { useQuery } from '@tanstack/react-query'
// import axios from 'axios'
// import newRequest from '../../utils/newRequest'
// const url = "http://localhost:8800/api/gigs";
// export default function Gigs() {
//   const [open , setopen] = useState(false)
//   const [sort , setsort] = useState("sales")
//   const minref = useRef();
//   const maxref = useRef();
//   // const { isLoading, error, data } = useQuery({
//   //   queryKey: ['repoData'],
//   //   queryFn: () =>
//   //           newRequest("/gigs")
//   // })
//   // console.log(data)
//   const resort = (type)=>{
//     setsort(type);
//     setopen(false); 
//   }


//   const[gigsdata , setgigs] = useState([]);
//   useEffect(()=>{
//       try {
//           let loadgig = async function(){
//             let resp = await fetch(url , {credentials: 'include'});

//             if(resp.ok){
//               let jsonresp = await resp.json();
//               console.log(jsonresp);
//               setgigs(jsonresp);
//             }
//             console.log("resp" , resp);
//           }
//           loadgig();
//       } catch(err){
//         console.log(err);
//       }
//   },[]);
//   return (
//     <div className='gigs'>
//           <div className='container'>
//               <span className='breadcrumbs'>SoloGigs &gt; GRAPHIC & DESIGN</span>
//               <h1>AI Artist</h1>
//               <p>Explore the boundaries of art and technology with SoloGigs AI Artists</p>
//               <div className="menu">
//                     <div className="left">
//                           <span>Budget</span>
//                           <input type="text" placeholder='min'/>
//                           <input type="text" placeholder='max'/>
//                           <button>Apply</button>
//                     </div>
//                     <div className="right">
//                           <span className='SortBy'>SortBy</span>
//                           <span className='SortType'>{sort === "sales" ? "Best Selling":"Newest"}</span>
//                           <img src="./img/down.png" alt="" onClick={()=>{setopen(!open)}}/>
//                           {open && (
//                             <div className='rightmenu'>
//                             {sort === "sales" 
//                                ?
//                                 (<span onClick={()=>resort("createdAt")}>Newest</span>)
//                                : 
//                                (<span onClick={()=>resort("sales")}>Best Selling</span>)
//                             }
//                             </div>
                            
//                           )}
//                     </div>
//               </div>
//               <div className='cards'>
//                             {gigsdata.map(gig=>(
//                               <Gigcart key={gig.id} item={gig}/>
//                             ))}
//               </div>
//           </div>
//     </div>
//   )
// }
import React, { useEffect, useRef, useState } from "react";
import "./Adver.scss";
// import GigCart from "../../components/gigcart/GigCart";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";
import Gigcart from "../../components/gigcart/Gigcart";
import {adver} from "../../data"
import Adcart from "../../components/adcart/Adcart";
function Adver() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["adds"],
    queryFn: () =>
      newRequest
        .get(
          `/adv${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  console.log(data);

  // const reSort = (type) => {
  //   setSort(type);
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   refetch();
  // }, [sort]);

  // const apply = () => {
  //   refetch();
  // };

  return (
    <div className="adver">
      <div className="container">
        <span className="breadcrumbs">Liverr &gt; Graphics & Design &gt;</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button >Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {data && data.map((gig) => <Adcart key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Adver;