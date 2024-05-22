import React from "react";
import "../styles/Header.css";

class Header extends React.Component{
    render(){
        return(
           <div className="header">
        <div className="group2">
               <img src="./Group 2.png" alt="not found" />
        </div>
            <pre className="text4">
                <span className="text5"><b>About us</b></span>Our projects      Clients
            </pre>
        </div>
        )
    }
}
export default Header