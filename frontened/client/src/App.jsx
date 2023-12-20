import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss"
import Navbar from './components/navbar/Navbar'
import {Cloudinary} from "@cloudinary/url-gen";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom";
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Mygigs from './pages/mygigs/Mygigs';
import Login from './pages/login/Login';
import Messages from './pages/messi/Messages';
import Mymessage from './pages/mymessage/Mymessage';
import Add from './pages/add/Add';
import Orders from './pages/orders/Orders';
import Register from './pages/register/Register';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Pay from './pages/pay/Pay';
import Success from './pages/success/Success';
import Home2 from './pages/home2/Home2';
import Adver from './pages/adver/Adver';
import Advertise from './pages/advertise/Advertise';
import Myadv from './pages/myadv/Myadv';
import Adv_navbar from './components/adv_navbar/Adv_navbar';

function App() {
  
  const queryClient = new QueryClient();
  const cld = new Cloudinary({cloud: {cloudName: 'ddznbonzf'}});
  const Layout = ()=>{
    const location = useLocation();
    const specialPaths = ['/adhome', '/myadv', '/advertise/' , '/newadv','/advorders' , '/advertise' ,'/adds','/messi'];

    return(
      
      <div className='app'>
      <QueryClientProvider client={queryClient}>
     
      {specialPaths.includes(location.pathname) ? <Adv_navbar/> : <Navbar />}


          <Outlet key={location.pathname} />
          <Footer />
    </QueryClientProvider>
          
      </div>);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/adhome",
          element:<Home2 />
        },
        {
          path:"/gigs",
          element: <Gigs/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/mygigs",
          element:<Mygigs/>
        },
        {
          path:"/messi",
          element:<Messages />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/mymessage/:id",
          element:<Mymessage />
        },
        
        {
          path:"/orders",
          element:<Orders />
        },
        {
          path:"/register",
          element:<Register />
        },
        {
          path:"/add",
          element:<Add />
        },
        {
          path:"/pay/:id",
          element:<Pay />
        },
        {
          path:"/success",
          element:<Success />
        },
        {
          path:"/adds",
          element:<Adver />
        },
        {
          path:"/advertise/:id",
          element:<Advertise />
        },
        {
          path:"/myadv",
          element:<Myadv />
        },
        {
          path:"/newadv",
          element:<Add />
        },
        {
          path:"/advpay/:id",
          element:<Pay />
        },
        {
          path:"/advorders",
          element:<Orders />
        },
      ]
    },
  ]);
  return (
    <>
    
    <RouterProvider router={router} />
     </>
  )
}

export default App
