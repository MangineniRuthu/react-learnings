import React, { useState } from "react";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{
    const resId=useParams();
    const resMenu=useRestaurantMenu();
    const [showIndex,setShowIndex]=useState(null);
  
    
    const name =resMenu[resId.resId-1]?.name;
    const cuisine=resMenu[resId.resId-1]?.cuisine;
    const rating=resMenu[resId.resId-1]?.rating;
    const ingredients=resMenu[resId.resId-1]?.ingredients;

    if(resMenu === null)
        return(
        <Shimmer/>
    );
    return(
        <div className="text-center w-8/12 shadow-lg bg-gray-100 mx-auto my-5 p-4">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisine} ⁎ {rating}</h2>
            {resMenu.map((res,index)=>(
                <RestaurantCategory key={res.id} data={res}
                showItems = {index === showIndex ? true : false}
                setShowIndex = {() => setShowIndex(index)}
                />
                
            ))}
        </div>
    );
}


export default RestaurantMenu;
