import { useEffect, useState } from "react";
import logo1 from "../../img/logo1.png";
import {Link} from "react-router-dom";


const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("login");
  console.log("Header rendered");
  useEffect(()=>{
    console.log("useEffect withdependency array changes");
  },[{btnNameReact}])
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo1} />
        </div>
        <div className="nav-items">
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
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