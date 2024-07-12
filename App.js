import React,{lazy,Suspense} from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import { createBrowserRouter,Outlet,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utilities/UserContext";
import {useState,useEffect} from "react";
// import Groceries from "./src/components/Groceries";



const Groceries=lazy(() => import("./src/components/Groceries"));
const About= lazy(()=>import("./src/components/About"));
const AppLayout = () => {
  const [userInfo,setUserInfo]=useState();
  useEffect(()=>{
    const data={
      name:"Ruthu M",
    }
    setUserInfo(data.name)
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    <div className="app">
      <UserContext.Provider value={{loggedInUser:"Krupa M"}}>
        <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
    },
      {
          path:"/about",
          element:(<Suspense fallback={<h1>Loading ....</h1>}><About/></Suspense>),
      }
      ,{
        path:"/contact",
        element:<Contact/>,
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>,
    },
    {
      path:"/groceries",
      element:(<Suspense fallback={<h1>Loading ....</h1>}><Groceries/></Suspense>),
    },
    ],
    errorElement:<Error/>
  },
  

]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
