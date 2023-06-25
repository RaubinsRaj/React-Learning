import React from "react";
import { ReactDOM } from "react";
import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";

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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
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