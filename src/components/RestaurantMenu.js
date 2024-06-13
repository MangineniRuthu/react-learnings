import React, { useState } from "react";
import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utilities/constants";

const RestaurantMenu=()=>{
    const resId=useParams();
    const [resMenu,setResMenu]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const response = await fetch(MENU_URL);
        const json = await response.json();  
        console.log(json); 
        setResMenu(json?.recipes);
        console.log(json?.recipes);
        
    }
    
    const name =resMenu[resId.resId-1]?.name;
    const cuisine=resMenu[resId.resId-1]?.cuisine;
    const rating=resMenu[resId.resId-1]?.rating;
    const ingredients=resMenu[resId.resId-1]?.ingredients;

    if(resMenu === null)
        return(
        <Shimmer/>
    );
    return(
        <div>
            <h1>{name}</h1>
            <h2>{cuisine}</h2>
            <h2>{rating}</h2>
            <ul>
            {ingredients && ingredients.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    );
}


export default RestaurantMenu;
