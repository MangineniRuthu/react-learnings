
import { MENU_URL } from "../utilities/constants";
import { useEffect,useState } from "react";
const useRestaurantMenu=()=>{
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
    return resMenu;
}

export default useRestaurantMenu;