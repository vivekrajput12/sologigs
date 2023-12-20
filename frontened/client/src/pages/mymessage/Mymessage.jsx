import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Mymessage.scss"
import newRequest from '../../utils/newRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
const url = "http://localhost:8800/api/messages/";

export default function Mymessage() {
  const {id} = useParams(); 
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messi">Messages</Link> &gt; John Doe &gt;
        </span>
        {isLoading ? "loading" : error ? "error" : <div className="messages">
        {data.map(m=>(
          <div className= {m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
          <img
            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <p>
           {m.desc}
          </p>
        </div>
        ))}
          
         
        </div>}
        <hr />
       <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="write a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

  // const[messagedata , setmessage] = useState([]);
  // useEffect(()=>{
  //     try {
  //         let loadmessage = async function(){
  //           let resp = await fetch(url + `${id}`, {credentials: 'include'});

  //           if(resp.ok){
  //             let jsonresp = await resp.json();
  //             console.log(jsonresp);
  //             setmessage(jsonresp);
  //           }
  //           console.log("resp" , resp);
  //         }
  //         loadmessage();
  //     } catch(err){
  //       console.log(err);
  //     }
  // },[]);



// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import "./Mymessage.scss";

// const url = "http://localhost:8800/api/messages/";

// export default function Mymessage() {
//   const { id } = useParams();
//   const [messagedata, setmessage] = useState([]);
//   const [newMessage, setNewMessage] = useState(""); // New message input state

//   useEffect(() => {
//     const loadMessages = async () => {
//       try {
//         const resp = await fetch(url + `${id}`, { credentials: 'include' });

//         if (resp.ok) {
//           const jsonresp = await resp.json();
//           setmessage(jsonresp);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     loadMessages();
//   }, [id]);

//   const sendMessage = async () => {
//     try {
//       const resp = await fetch(url + `${id}`, {
//         method: 'POST',
//         body: JSON.stringify({ message: newMessage }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//       });

//       if (resp.ok) {
//         // If the message is sent successfully, you can update the state with the new message
//         const jsonresp = await resp.json();
//         setmessage([...messagedata, jsonresp]);
//         setNewMessage(""); // Clear the message input field
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="message">
//       <div className="container">
//         <span className="breadcrumbs">
//           <Link to="/messi">Messages</Link> &gt; John Doe &gt;
//         </span>
//         <div className="messages">
//           {messagedata.map(m => (
//             <div className="item" key={m._id}>
//               <img
//                 src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <p>{m.message}</p>
//             </div>
//           ))}
//         </div>
//         <hr />
//         <div className="write">
//           <textarea
//             type="text"
//             placeholder="Write a message"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//           />
//           <button onClick={sendMessage}>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }
