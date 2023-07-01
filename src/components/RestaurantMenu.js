import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=354531&submitAction=ENTER"
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
      {itemCards.map(e=> <li key={e.card?.info?.id}> {e?.card?.info?.name}</li>)}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
        <li>{itemCards[3].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
