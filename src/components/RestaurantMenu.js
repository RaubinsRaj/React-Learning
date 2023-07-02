import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/Constants";

RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL+resId
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

 const { name, cuisines,avgRating, costForTwoMessage } = 
 resInfo?.cards[0]?.card?.card?.info || {};

 const {itemCards} = 
 resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||{};
  return (resInfo === null) ?( <Shimmer />) : (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(",")} - {costForTwoMessage}  <b>{avgRating} *</b></p>
      <h3>Menu</h3> 
      <ul>
      {itemCards.map(e=> <li key={e.card?.info?.id}> 
      {e.card.info.name} - Rs {e.card.info.price/100 || e.card.info.defaultPrice/100}
      </li>)}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
        <li>{itemCards[3].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
