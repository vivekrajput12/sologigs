import React, { useEffect, useState } from 'react'
import "./Adv_navbar.scss"
import { Link, json, useLocation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const [active , setactive] = useState(false);
    const [open , setopen] = useState(false);
    const {pathname} = useLocation();
    const isActive = ()=>{ 
        scrollY > 0? setactive(true):setactive(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll" , isActive);
        return ()=>{ 
            window.removeEventListener("scroll" , isActive);
    }
    },[])
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const navigate = useNavigate();
    const handleLogout = async()=>{
        try{
            await axios.post("http://localhost:8800/api/auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/")             
        }catch(err){
            console.log(err);
        }
    };
  return (
    <div className={active || pathname!=="/" ? "navbar active":"navbar"}> 
    <div className='container'>
    <div className='logo'>
    <Link to={"/"} className='link'>
        <span className='text'>
            SoloGigs
        </span>
        </Link>
        <span className='dot'>
            .
        </span>
    </div>
    <div className='links'>
        <span>SoloGigs Business</span>
        <span>Explore</span>
        <span>English</span>
        {!currentUser && <Link className='link' to = "/login">Sign_In</Link>}
        {!currentUser?.isSeller && <span>Become a Seller</span>}
        {!currentUser && <Link className="link" to="/register">
        <button>Join</button>
      </Link>}
        {currentUser && (
            <div className='user' onClick={()=>setopen(!open)}>
                <img src= {currentUser.img || "/img/mman.png"} alt="" />
                <span>{currentUser?.username}</span>
                {open && <div className = 'options'>
                {
                     currentUser?.isSeller && (
                        <>
                        <Link className='link' to = "/myadv">Ads</Link>
                        <Link className='link' to = "/newadv">Add Ads</Link>
                        </>
                    )
                }
                    <Link className='link' to = "/advorders">Orders</Link>
                    <Link className='link' to = "/messi">Messages</Link>
                    <Link className='link' to = "/">Home</Link>
                    <Link className='link' to = "/adhome">Advertise</Link>
                    <Link className='link' onClick={handleLogout}>Logout</Link>

                </div>
            }
            </div>
                )
        }
    </div>
    
    </div>
   
    {(active || pathname !=="/") &&
    <>
        <hr />
        <div className='menu'>
            <Link className='link' to = "/">Graphic & Design</Link>
            <Link className='link' to = "/">Video & Animation</Link>
            <Link className='link' to = "/">Writing & Translation</Link>
            <Link className='link' to = "/">AI Services</Link>
            <Link className='link' to = "/">Digital Marketing</Link>
            <Link className='link' to = "/">Music & Audio</Link>
            <Link className='link' to = "/">Programming & Tech</Link>
            <Link className='link' to = "/">Business</Link>
            <Link className='link' to = "/">Lifestyle</Link>
        </div>
    <hr/>
    </>
    }
     </div>
  )
}
