import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import {RESTAURANT_API_URL} from "../utils/constant";
const ResturantmenuComponent = ()=>{
    useEffect(()=>{
     fetchMenuData();
    },[])
    const[resturantName,setresturantName] = useState();
    const {id} = useParams();
    const fetchMenuData= async()=>{
        const response = await
         fetch(RESTAURANT_API_URL+id);
        const data = await response.json();
        console.log(data.data.cards);
        setresturantName(data.data.cards[0].card.card.text);
    }
    return(
        <div className="resturant-menu-container">
            <h1 className="resturant-name">{resturantName}</h1>
            <div className="resturant-card">

            </div>
           <div className="resturant-deals_container">
               <h1 className="deals-heading">Deals for you</h1>
                <div className="resturant-deals">
                    <div className="deal-card">
                        <p>Special discount on your first order!</p>
                    </div>
                    <div className="deal-card">
                        <p>Free delivery on orders above ₹500!</p>
                    </div>
                    <div className="deal-card">
                        <p>20% off on selected items!</p>
                    </div>
                    <div className="deal-card">
                        <p>Buy 1 Get 1 Free on desserts!</p>
                    </div>
                </div>
           </div>
           <div className="search-container1">
               <input type="text" placeholder="Search for dishes or cuisines" className="search-input1" />
               <button className="search-button">Search</button>
           </div>
           <div className="item-type-list-container">
                <button className="item-type-button">Veg</button>
                <button className="item-type-button">Non Veg</button>
                <button className="item-type-button">Bestseller</button>
                <button className="item-type-button">Guiltfree</button>
           </div>
           <h1 className="resturant-menu">Menu List</h1>
            <div className="resturant-card-menu">
            </div>


            
        </div>
    )
}
export default ResturantmenuComponent;