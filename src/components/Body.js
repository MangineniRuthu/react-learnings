import {useEffect, useState ,useContext} from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { MENU_URL } from "../utilities/constants";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext"




const Body = () => {
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  const [listOfRestaurants,setListOfRestaurants]=useState([]);
  const[searchText,setSearchText]=useState("");
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
  const{loggedInUser,setUserInfo}=useContext(UserContext);
  

  useEffect(()=>{fetchData();},[])

  const fetchData = async () =>{
    const response = await fetch(MENU_URL);
    const json = await response.json(response);
    console.log(json?.recipes?.mealType);  
    
    setListOfRestaurants(json?.recipes);
    setFilteredRestaurants(json?.recipes);
    
  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like your offline!! Please try to connect Again</h1>

    return listOfRestaurants.length === 0?( <Shimmer/>):(
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black shadow-md " value={searchText}
            onChange={(e)=>{
             setSearchText(e.target.value);
            }}
            />
            <button className="px-4 m-4 py-2 bg-zinc-600  text-white rounded-md " onClick={()=>{
              
              const filteredSearchList=listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
              console.log(filteredRestaurants)
              setFilteredRestaurants(filteredSearchList);
            }}

          >Search</button>
          </div>
          <div className="m-4 p-4 flex items-center" >
            <button className="px-4 py-2 bg-zinc-600  text-white rounded-md" 
              onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                  (res) => res.rating > 4.5);
                  setListOfRestaurants(filteredList);
              }}>
                Top Rated Restaurant
            </button>
            <div className="p-3">
              <label className="font-bold">UserName:</label>
            <input className="border border-black"  value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)}/>
            </div>

            
          </div>
          
          
        </div>
        <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (   
          <Link  className="link" to={"/restaurants/" + restaurant.id} key={restaurant.id}>
          {restaurant.rating >4.6?
          (<RestaurantCardPromoted resData={restaurant}/>): (<RestaurantCard resData={restaurant} />)};
          
          </Link>
        ))}
      </div>
      </div>
    );
  };

  export default Body;