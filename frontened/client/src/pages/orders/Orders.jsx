import React, { useEffect, useState } from 'react'
import "./Orders.scss"
const url = "http://localhost:8800/api/orders";
const url2 = "http://localhost:8800/api/orders";
import newRequest from "../../utils/newRequest.js"
import { useLocation, useNavigate } from 'react-router-dom';
export default function Orders() {
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const[orderdata , setorder] = useState([]);
    const location = useLocation();
      useEffect(() => {
        const loadOrders = async () => {
          try {
            const ordersUrl = location.pathname === "/advorders" ? `${url}/advorders` : url;
            const resp = await fetch(ordersUrl, { credentials: 'include' });
    
            if (resp.ok) {
              const jsonresp = await resp.json();
              setorder(jsonresp);
            }
          } catch (err) {
            console.log(err);
          }
        };
    
        loadOrders();
      }, [location.pathname]);
  

  const handleContact = async (order)=>{
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try{
      // console.log("res ke upper bhai")

      const res = await newRequest.get(`/conversation/single/${id}`);
      // console.log("res ke neeche bhai");
      // console.log("GET response:", res);
      navigate(`/mymessage/${res.data.id}`);
  }catch(err){
    console.log("entered catch")
     if(err.response.status === 404){
    console.log("entered err status")
      const res = await newRequest.post(`/conversation/` , {to: currentUser.isSeller ? buyerId : sellerId});
      navigate(`/mymessage/${res.data.id}`)
     }
  }
  }
  return (
    <div className="orders" data-aos="fade-up">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table data-aos="fade-right">
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
                  <img className="message" src="./img/message.png" alt="" onClick={() => handleContact(order)}/>
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
