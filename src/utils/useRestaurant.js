import React, { useState,useEffect } from 'react'
import { MENU_URL } from "../utils/Constants";

const useRestaurant = (resId) => {

const[resInfo,setResInfo] = useState(null);

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

  return resInfo;
}

export default useRestaurant