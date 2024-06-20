import { useEffect, useState } from "react";
import logo1 from "../../img/logo1.png";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import Groceries from "./Groceries";


const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("login");
  console.log("Header rendered");
  useEffect(()=>{
    console.log("useEffect withdependency array changes");
  },[{btnNameReact}])

  const onlineStatus=useOnlineStatus();
    return (
      <div className="flex">
        <div className="m-4 p-4">
          <img className="logo" src={logo1} />
        </div>
        <div className="flex">
          <ul className="flex-wrap">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/groceries">Groceries</Link>
            </li>
            <button className="login"
            onClick={()=>{
              btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login");
            }}
            >
              {btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;