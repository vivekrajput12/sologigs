// import React, { useEffect, useState } from "react";
// import "./Pay.scss";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import newRequest from "../../utils/newRequest";
// import { useLocation, useParams } from "react-router-dom";
// import CheckoutForm from "../../components/checkoutform/CheckoutForm";
// import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
// const stripePromise = loadStripe("pk_test_51O7je5SIDwPuJBeCBgXJFed1o175ug7eLd7W48WV66vY8BxTqcp9Z7MRQrHHah4GZjCW7LokBt5B3JWjtwTkIcA600bc9sSf7F");

// export default function Pay() {
//     const [clientSecret, setClientSecret] = useState("");

//     const { id } = useParams();
//     console.log("id" , id);
//     const location = useLocation();
//     let variable;
//     let dynamic_url ;
//     if(location.pathname.startsWith('/advpay/')){
//         variable = "create-payment-advintent";
//         dynamic_url = "orders/advorders";
//     }else{
//       variable = "create-payment-intent";
//       dynamic_url = "orders";
//     }
// useEffect(() => {
//   const makeRequest = async () => {
//     try {
//       console.log("trying");
//       const res = await newRequest.post(
//         `/orders/${variable}/${id}`
//       );
//       console.log("tried");
//       setClientSecret(res.data.clientSecret);
//     } catch (err) {
//       console.log("oops");
//       console.log(err);
//     }
//   };
//   makeRequest();
// }, [id]);
  
//     const appearance = {
//       theme: 'stripe',
//     };
//     const options = {
//       clientSecret,
//       appearance,
//     };
  
//     return <div className="pay">
//       {clientSecret && (
//           <Elements options={options} stripe={stripePromise}>
//             <CheckoutForm item={dynamic_url}/>
//           </Elements>
//         )}
//     </div>;
// }
// import React, { useEffect, useState } from "react";
// import "./Pay.scss";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import newRequest from "../../utils/newRequest";
// import { useLocation, useParams } from "react-router-dom";
// import CheckoutForm from "../../components/checkoutform/CheckoutForm";

// const stripePromise = loadStripe("pk_test_51O7je5SIDwPuJBeCBgXJFed1o175ug7eLd7W48WV66vY8BxTqcp9Z7MRQrHHah4GZjCW7LokBt5B3JWjtwTkIcA600bc9sSf7F");

// export default function Pay() {
//   const [clientSecret, setClientSecret] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
//   const location = useLocation();
//   const isAdvPay = location.pathname.startsWith('/advpay/');
//   const endpoint = isAdvPay ? 'create-payment-advintent' : 'create-payment-intent';

//   useEffect(() => {
//     if (loading) {
//       const fetchClientSecret = async () => {
//         try {
//           console.log("Trying to fetch clientSecret");
//           const res = await newRequest.post(`/orders/${endpoint}/${id}`);
//           console.log("ClientSecret fetched successfully");
//           setClientSecret(res.data.clientSecret);
//         } catch (err) {
//           console.log("Error fetching clientSecret:", err);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchClientSecret();
//     }
//   }, [loading, id, endpoint]);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   console.log("Rendering Pay component");

//   return (
//     <div className="pay">
//       {!loading && clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm item={isAdvPay ? "orders/advorders" : "orders"} />
//         </Elements>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useLocation, useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutform/CheckoutForm";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51O7je5SIDwPuJBeCBgXJFed1o175ug7eLd7W48WV66vY8BxTqcp9Z7MRQrHHah4GZjCW7LokBt5B3JWjtwTkIcA600bc9sSf7F");

export default function Pay() {
    const [clientSecret, setClientSecret] = useState("");

    const { id } = useParams();
    console.log("id" , id);
    const location = useLocation();
    let variable;
    let dynamic_url ;
    if(location.pathname.startsWith('/advpay/')){
        variable = "create-payment-advintent";
        dynamic_url = "orders/advorders";
    }else{
      variable = "create-payment-intent";
      dynamic_url = "orders";
    }
useEffect(() => {
  const makeRequest = async () => {
    try {
      console.log("trying");
      const res = await newRequest.post(
        `/orders/${variable}/${id}`
      );
      console.log("tried");
      setClientSecret(res.data.clientSecret);
    } catch (err) {
      console.log("oops");
      console.log(err);
    }
  };
  makeRequest();
}, [id]);
  
    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };
  
    return <div className="pay">
      {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm item={dynamic_url}/>
          </Elements>
        )}
    </div>;
      }