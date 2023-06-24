import React, { useState } from "react";
import { ReactDOM } from "react";
import ResCard from "./ResCard";
import resList from "../utils/mockData";

const Body = () => {
   const [resList1,setResList1] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        onClick={()=> {
         const filteredList= resList1.filter((res)=>res.data.avgRating>4);
         console.log(filteredList);
         //setResList1(()=> {console.log("inside usestate");});
         setResList1(filteredList);
        }}
        >Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {/* <ResCard resData={resList[0]} />
              <ResCard resData={resList[1]} /> */}
        {/* <ResCard 
                 resName="KFC" 
                 cuisine="Burger, FastFood"
                 rating="4.1*"
                 eta="35 minutes"
                 /> */}
        {resList1.map((res) => (
          <ResCard key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
