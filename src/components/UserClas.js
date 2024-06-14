import React from "react";
import { MENU_URL } from "../utilities/constants";

class UserClas extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:2,
            count2:0,
            userInfo:{
                name:"",
                cuisine:"",
            }
        };
        console.log("child constructor");
    }
    async componentDidMount(){
        const fetchData= await fetch(MENU_URL);
        const json =await fetchData.json();
        this.setState({
            userInfo:json, 
        }
      
    );
    console.log(this.state.userInfo);
        
        console.log("child CDM");
    }
    render(){
        console.log("child render");
        const{name,cuisine}=this.state.userInfo;
        const{count,count2}=this.state;
        return(
            <div className="user-card">
            <h2>Count={count}</h2>
            <h2>Count2:{count2}</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    count2:this.state.count+1
                });
            }}>Count Increse</button>
            
            <h2>Name:{name}</h2>  
            <h3>Location:{cuisine}</h3>
          </div>
        );
    }
}

export default UserClas;