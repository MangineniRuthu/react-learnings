import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,setShowIndex})=>{
    const handleClick=()=>{
        // setShowItems(!showItems);
        setShowIndex();
    }
    
    return (
        <div>
            <div className="shadow-lg w-12/12 bg-gray-50 mx-auto my-5 p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                    <span className="font-bold text-lg">{data.name}({data.servings})</span>
                    <span>⬇️</span>
                </div>  
                <div>
                   {showItems && <ItemList items={data}/>} 
                </div>
                 
            </div>
        </div>
    );
}

export default RestaurantCategory;