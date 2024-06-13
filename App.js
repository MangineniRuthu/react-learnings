import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import { createBrowserRouter,Outlet,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
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
          element:<About/>,
      }
      ,{
        path:"/contact",
        element:<Contact/>,
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>,
    }
    ],
    errorElement:<Error/>
  },
  

]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
