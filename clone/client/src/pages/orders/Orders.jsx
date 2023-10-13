import React, { useEffect, useState } from 'react'
import "./Orders.scss"
const url = "http://localhost:8800/api/orders";

export default function Orders() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const[orderdata , setorder] = useState([]);
  useEffect(()=>{
      try {
          let loadorder = async function(){
            let resp = await fetch(url , {credentials: 'include'});

            if(resp.ok){
              let jsonresp = await resp.json();
              console.log(jsonresp);
              setorder(jsonresp);
            }
            console.log("resp" , resp);
          }
          loadorder();
      } catch(err){
        console.log(err);
      }
  },[]);
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Contact</th>
          </tr>
          {
            orderdata.map(
              (order)=>(
                <tr key={order._id}>
                <td>
                  <img
                    className="image"
                    src= {order.img}
                    // https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600
                    alt=""
                  />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>Maria Anders</td>
                <td>
                  <img className="message" src="./img/message.png" alt="" />
                </td>
              </tr>
              )
            )
            }
          
        </table>
      </div>
    </div>
  )
}
