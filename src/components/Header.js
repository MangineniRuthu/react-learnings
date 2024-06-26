import { useEffect, useState } from "react";
import logo1 from "../../img/logo1.png";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import Groceries from "./Groceries";


const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("Login");
  console.log("Header rendered");
  useEffect(()=>{
    console.log("useEffect withdependency array changes");
  },[{btnNameReact}])

  const onlineStatus=useOnlineStatus();
    return (
      <div className="flex justify-between bg-gray shadow-lg">
        <div className="logo-container">
          <img className="w-[100]" src={logo1} />
        </div>
        <div className="nav-items">
          <ul className="flex p-4 m-4">
            <li className="p-3">  
            <Link to="/">Home</Link>
            </li>
            <li className="p-3">Online Status:{onlineStatus?"✅":"🔴"}</li>
            <li className="p-3">
              <Link to="/about" class="font-bold ">About Us</Link>
            </li>
            <li className="p-3">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="p-3">
            <Link to="/cart">Cart</Link>
            </li>
            <li className="p-3">
              <Link to="/groceries">Groceries</Link>
            </li>
            <button className="shadow-zinc-400 bg-zinc-600 rounded-lg w-[100] text-neutral-50"
            onClick={()=>{
              btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
            }}
            >
              {btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;