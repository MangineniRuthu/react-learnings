const ItemList=({items})=>{
    return(
        <div>
                <div key={items.id} className="text-left flex">
                    <div className="w-10/12">      
                        <span className="font-semibold">{items.name}</span>
                        <span className="m-2">- {items.cuisine}</span>  
                        <p className="text-xs">{items.instructions}</p>
                    </div>
                    <div className="w-2/12">
                        <div className="absolute">
                            <button className=" bg-black text-white rounded-lg p-2 shadow-lg">Add +</button>
                        </div>
                        <img className=" rounded-md" src={items.image} />
                    </div>
                </div>
        </div>
    )
};

export default ItemList;