import React from "react";
import { ReactDOM } from "react";
import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header =() =>{
   const [btnName,setBtnName] = useState("Login");
    return(
       <div className="header">
          <div className="logo-container">
             <img className="logo" src={LOGO_URL}
              alt="food-order" />
          </div>
          <div className="nav-items">
             <ul>
                <li><Link to={"/"}>Home</Link> </li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li>Cart</li>
                <button className="login-btn"
                onClick={()=>{
                  btnName==="Login" ? setBtnName("logOut"): setBtnName("Login")
                }}>{btnName}</button>
                
             </ul>
          </div>
       </div>
    )
 }

 export default Header;