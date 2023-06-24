import React from "react";
import { ReactDOM } from "react";
import resList from "../utils/mockData"
import { CDN_URL } from "../utils/Constants";

const ResCard =(props) => {
    // const {resName,cuisine, rating, eta} =props;
    const {resData} =props;
 
    return (
       <div className="res-card">
          <img
            className="res-logo"
            alt="res-logo" 
            src={CDN_URL+resData.data.cloudinaryImageId }
            />
          <h3>{resData.data.name}</h3>
          <h4>{resData.data.cuisines.join(", ")}</h4>
          <h4>{resData.data.avgRating}*</h4>
          <h4>{resData.data.costForTwo/100} For Two</h4>
          <h4>{resData.data.deliveryTime} minutes</h4>
       </div>
    )
 }
 
 export default ResCard;