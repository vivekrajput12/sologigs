import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss"
import Navbar from './components/navbar/Navbar'
import {Cloudinary} from "@cloudinary/url-gen";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
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
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from '@tanstack/react-query'

function App() {
  
  // const queryClient = new QueryClient()
  const cld = new Cloudinary({cloud: {cloudName: 'ddznbonzf'}});
  const Layout = ()=>{
    return(
      <div className='app'>
          <Navbar />
          <Outlet />
          <Footer />
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
        }
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
