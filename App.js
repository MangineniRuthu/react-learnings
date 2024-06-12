import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header"
import Body from "./src/components/Body"

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
