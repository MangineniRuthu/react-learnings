import React from "react";
import UserFun from "./UserFun";
import UserClas from "./UserClas";

class About extends React.Component{
    constructor(){
        super();
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("Parent CDM called");
    }
    render(){
        console.log("parent render");
        return(
            <div className=" shadow-lg  text-center font-semibold  p-4 m-4">
                <h1 className=" text-red-900 font-extrabold text-xl">Welcome AboutUs Page</h1>
                <UserFun name="Ruthu Mangineni (Functional)"/>
                <UserClas name={"Ruthu Mangineni (Class)"}location={"India"}/>
            </div>
            
        )

    }
   
}

export default About;