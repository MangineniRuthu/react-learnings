import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { MENU_URL } from "../utilities/constants";
import useOnlineStatus from "../utilities/useOnlineStatus";


const Body = () => {
  const [listOfRestaurants,setlistOfRestaurants]=useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  const[searchText,setSearchText]=useState("");

  useEffect(()=>{fetchData();},[])

  const fetchData = async () =>{
    const response = await fetch(MENU_URL);
    const json = await response.json(response);
    
    console.log(json);  
    
    setlistOfRestaurants(json?.recipes);
    setFilteredRestaurants(json?.recipes);
    
  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like your offline!! Please try to connect Again</h1>

    return listOfRestaurants.length === 0?( <Shimmer/>):(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText}
            onChange={(e)=>{
             setSearchText(e.target.value);
            }}
            />
            <button className="search-btn" onClick={()=>{
              
              const filteredSearchList=listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
              console.log(filteredRestaurants)
              setFilteredRestaurants(filteredSearchList);
            }}

          >Search</button>
          </div>
          <button className="filter-btn" 
          onClick={()=>{
            const filteredList = listOfRestaurants.filter(
              (res) => res.rating > 4.5);
              setlistOfRestaurants(filteredList);
          }}>
            Top Rated Restaurant</button>
        </div>
        <div className="res-container">
        {filteredRestaurants.map((restaurant) => (   
          <Link  className="link" to={"/restaurants/" + restaurant.id} key={restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
      </div>
    );
  };

  export default Body;