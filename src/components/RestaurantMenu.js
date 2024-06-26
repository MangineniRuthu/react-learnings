import React, { useState } from "react";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu=()=>{
    const resId=useParams();
    const resMenu=useRestaurantMenu();
  
    
    const name =resMenu[resId.resId-1]?.name;
    const cuisine=resMenu[resId.resId-1]?.cuisine;
    const rating=resMenu[resId.resId-1]?.rating;
    const ingredients=resMenu[resId.resId-1]?.ingredients;

    if(resMenu === null)
        return(
        <Shimmer/>
    );
    return(
        <div className="p-10 m-10  w-[500px] bg-violet-50 border-solid  shadow-lg shadow-black text-brown rounded-sm">
            <h1 className="p-4 m-4 bg-red-950 text-white text-center shadow-md shadow-black rounded-sm">ITEM DETAILS</h1>
            <h1 className="p-4 m-4 bg-black text-center  text-white shadow-md shadow-black rounded-sm">{name}</h1>
            <h2 className="p-4 m-4 bg-black text-white text-center shadow-md shadow-black rounded-sm">{cuisine}</h2>
            <h2 className="p-4 m-4  bg-black text-white text-center shadow-md shadow-black rounded-sm">⁎ {rating}</h2>
            <ul className="p-4 m-4  bg-black text-white text-center shadow-md shadow-black rounded-sm">
            {ingredients && ingredients.map((item, index) => (  
                <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    );
}


export default RestaurantMenu;
