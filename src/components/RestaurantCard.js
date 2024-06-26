import resList from "../utilities/mockData";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
const RestaurantCard = (props) => {
    const {resData}=props;
    const {
        name,
        image,
        cuisine,
        rating ,mealType}=resData;
    
  return (
    <div className="p-4 m-4 w-[270px] bg-violet-50 border-solid  shadow-lg shadow-black text-brown rounded-sm">
      <img className=" rounded-md" alt="res-img" src={image} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>⁎ {rating}</h4>
      <h4>{mealType.join(",")}</h4>

    </div>
  );
};

export default RestaurantCard;