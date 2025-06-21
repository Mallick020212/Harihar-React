//Header Componet
import {LOGO_URL} from "../utils/constant";
import { useState } from "react"; 
import { Link } from "react-router-dom";  
const HeaderComponent=()=>{
      const [btnName,setbtnName] = useState("Login");
    return(
        <div className="header">
             <div className="logo-container">
                <img  className="logo" src={LOGO_URL} alt="logo"/>
             </div>
             <div className="nav-items">
                <ul className="nav-list">
                    <li className="nav-item"><Link  to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                    <li className="nav-item">Cart</li>
                    <li className="nav-item"><button className="login-class" onClick={()=>{
                        btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button></li>
                    
                </ul>

             </div>
        </div>
    );
};

export default HeaderComponent;