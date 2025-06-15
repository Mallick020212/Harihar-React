import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import BodyComponent from "./components/BodyComponent";
    

//applyouComponet is the main componet of the app
const ApplayouComponent=()=>{
     return (
        <div className="app">
             <HeaderComponent/>
             <div className="body-main">
                   <BodyComponent/>
             </div>
             
             <FooterComponent/>
        </div>
     )
};
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<ApplayouComponent/>);