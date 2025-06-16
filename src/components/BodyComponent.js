import  resObject  from "../utils/mockData";
import ResturantcardComponet from "./ResturantcardComponent";
import { useState } from "react";
//Body Componet
const BodyComponent=()=>{
    const [resturantList, setRestaurantList] = useState(resObject);
    return(
        <div className="body" >
             <div className="search-container">
                <button className="filter-button" onClick={() => {
                    const filteredList = resObject.filter((restaurant) => restaurant.card.card.info.avgRating >= 4.1);
                    setRestaurantList(filteredList);
                }
                }>Top Rated Restaurants</button>
                <input type="text" className="search-input" placeholder="Search for food items..."/>
                <button className="search-button">Search</button>
             </div>
             <div className="restaurant-list">
                <h1 className="resturant-heading">Restaurant List</h1>
                {/* Render the restaurant cards */}
                <div className="restaurant-cards-list">
                    {
                        resturantList.map((restaurant) => {
                            return <ResturantcardComponet key={restaurant.card.card.info.id} resObject={restaurant}/>
                        })
                    }
                </div>
                
                
                
             </div>
        </div>
    )
}
export default BodyComponent;