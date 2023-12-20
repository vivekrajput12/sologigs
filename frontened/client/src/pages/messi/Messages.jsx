// import React from 'react'
// import "./Messages.scss"
// export default function Messages() {
//   const currentUser = {
//     id: 1,
//     username: "Anna",
//     isSeller: true,
//   };

//   const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
//   maxime cum corporis esse aspernatur laborum dolorum? Animi
//   molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
//   nobis praesentium placeat.`;

//   return (
//     <div className="messages">
//       <div className="container">
//         <div className="title">
//           <h1>Messages</h1>
//         </div>
//         <table>
//           <tr>
//             <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
//             <th>Last Message</th>
//             <th>Date</th>
//             <th>Action</th>
//           </tr>
//           <tr className="active">
//             <td>Charley Sharp</td>
//             <td>
//               <Link to="/message/123" className="link">
//                 {message.substring(0, 100)}...
//               </Link>
//             </td>
//             <td>1 hour ago</td>
//             <td>
//               <button>Mark as Read</button>
//             </td>
//           </tr>
//           <tr className="active">
//             <td>John Doe</td>

//             <td>
//               <Link to="/message/123" className="link">
//                 {message.substring(0, 100)}...
//               </Link>
//             </td>
//             <td>2 hours ago</td>
//             <td>
//               <button>Mark as Read</button>
//             </td>
//           </tr>
//           <tr>
//             <td>Elinor Good</td>
//             <td>
//               <Link to="/message/123" className="link">
//                 {message.substring(0, 100)}...
//               </Link>
//             </td>
//             <td>1 day ago</td>
//           </tr>
//           <tr>
//             <td>Garner David </td>
//             <td>
//               <Link to="/message/123" className="link">
//                 {message.substring(0, 100)}...
//               </Link>
//             </td>
//             <td>2 days ago</td>
//           </tr>
//           <tr>
//             <td>Troy Oliver</td>
//             <td>{message.substring(0, 100)}</td>
//             <td>1 week ago</td>
//           </tr>
//         </table>
//       </div>
//     </div>
//   );
// };
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./Messages.scss";
import moment from "moment";
const url = "http://localhost:8800/api/conversation";
export default function Messages() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const[msgdata , setmsg] = useState([]);
  useEffect(()=>{
      try {
          let loadmsg = async function(){
            let resp = await fetch(url , {credentials: 'include'});

            if(resp.ok){
              let jsonresp = await resp.json();
              console.log(jsonresp);
              setmsg(jsonresp);
            }
            console.log("resp" , resp);
          }
          loadmsg();
      } catch(err){
        console.log(err);
      }
  },[]);
  const handleRead = ()=>{
    const a = document.getElementsByClassName("active");
  a[0].style.backgroundColor = "white";
  }
  console.log(msgdata)
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table data-aos="fade-right">
          <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {
            msgdata.map(c=>(
              <tr className={((currentUser.isSeller && !c.readByseller) || (!currentUser.isSeller && !c.readByBuyer)) && "active"} key = {c.id}>
            <td>{currentUser.isSeller? c.buyerId : c.sellerId}</td>
            <td>
              <Link to={`/mymessage/${c.id}`} className="link">
                {c?.lastMessage?.substring(0, 100)}...
              </Link>
            </td>
            <td>{moment(c.updatedAt).fromNow()}</td>
            <td>{
              ((currentUser.isSeller && !c.readByseller) || (!currentUser.isSeller && !c.readByBuyer)) &&
              (<button onClick={handleRead}>Mark as Read</button>)
            }</td>
          </tr>
            ))
          }
          
                  </table>
      </div>
    </div>
  )
}
