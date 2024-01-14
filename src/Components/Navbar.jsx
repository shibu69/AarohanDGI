import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from "../Components/Images/logo.png";



const Navbar = () => {
     
    const[click,setclick] =useState(true);
    const handleClick =()=>setclick(!click);

    const [color,setcolor] = useState(false);
    const changeColor =()=>{
      if(window.scrollY>=100){
        setcolor(true);
      }
      else{
        setcolor(false);
      }
    }

    window.addEventListener("scroll",changeColor);

  return (
    <>
      <div className={color ? "nav nav-bg":"nav"}>
        <div className="header">
        <Link to="/">
          <img src={logo} alt="Aarohan" />
        </Link>
        </div>

       <div className="navmenu">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        </div>

        <div className="hamburger" onClick={handleClick}>

            {click ? <FaBars size={20} style={{color:"white"}}  />:<FaTimes size={20} style={{color:"white"}}  /> }
            
        </div>
        </div>
    </>
  );
};

export default Navbar;
