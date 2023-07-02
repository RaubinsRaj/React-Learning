import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import ResCard from "./ResCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //const [resList1, setResList1] = useState(resList);
  const [resList1, setResList1] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

//   useEffect(() => {
//     console.log("Use effect Called");
//   }, []);

  useEffect(()=>{
   fetchData();
},[]);

  const fetchData = async () => {
   const data= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");

   const json= await data.json();
   console.log(json);
   setResList1(json?.data?.cards[2]?.data?.data?.cards);
   setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  //Conditional rendering
//  if(resList1.length===0){
//    return <Shimmer />
//  }

  return resList1.length===0 ? (<Shimmer /> ) :  (
    <div className="body">
      <div className="filter">
         <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
         <button onClick={
            ()=> {
               console.log(resList1);
               const searchRes=resList1.filter(
                  (res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase())
               );
               //setResList1(searchRes);
               setFilterRestaurant(searchRes);
            }
         }>search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList1.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filteredList);
            //setResList1(()=> {console.log("inside usestate");});
            setResList1(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
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
        {filterRestaurant.map((res) => (
         <Link key={res.data.id} to={"/restaurant/"+res.data.id} ><ResCard key={res.data.id} resData={res} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
