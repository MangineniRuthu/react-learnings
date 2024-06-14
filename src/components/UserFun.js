import {useState} from "react"
const UserFun=({name})=>{
    const [count,setCount]=useState(0);
    return (
        <div className="user-card">
          <h2>Count={count}</h2>
          <button onClick={()=>{
            setCount(count+1);
          }}>Count Increse</button>
          <h2>Name:{name}</h2>  
          <h3>Location:India</h3>
        </div>
    );
};

export default UserFun;