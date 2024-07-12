import resList from "../utilities/mockData";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
import {useContext} from "react";
import UserContext from "../utilities/UserContext"

const RestaurantCard = (props) => {
    const {resData}=props;
    const {
        name,
        image,
        cuisine,
        rating ,mealType}=resData;
    const {loggedInUser}=useContext(UserContext)
    
  return (
    <div className="p-4 m-4 w-[200px] bg-violet-50 border-solid  shadow-lg shadow-black text-brown rounded-sm">
      <img className=" rounded-md" alt="res-img" src={image} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>⁎ {rating}</h4>
      <h4>{mealType.join(",")}</h4>
      <h4>{loggedInUser}</h4>

    </div>
  );
};

export const withPromotedLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black py-1 px-2 text-white rounded-md">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;