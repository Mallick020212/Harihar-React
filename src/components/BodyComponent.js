import  resObject  from "../utils/mockData";
import ResturantcardComponet from "./ResturantcardComponent";
import { useState,useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
//Body Componet
const BodyComponent=()=>{
    const [resturantList, setRestaurantList] = useState([]);
    const [filterList, setfilterList] = useState([]);
    const [searchList, setsearchList] = useState("");

    // useEffect to simulate fetching data from an API
    useEffect(()=>{
        fetchdta();
    },[])
    const fetchdta = async () => {
        const  data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurantData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setRestaurantList(restaurantData);
        setfilterList(restaurantData)
    
        
    }
    // if (resturantList.length === 0) {
    //     return <ShimmerComponent />;
    // }
    return resturantList.length === 0?  <ShimmerComponent />:
    (
        <div className="body" >
             <div className="search-container">
                <h1 className="resturant-heading">Restaurant List</h1>
                <button className="filter-button" onClick={() => {
                    const filteredList = resturantList.filter((restaurant) => restaurant.info.avgRating >= 4.4  );
                    setfilterList(filteredList);
                }
                }>Top Rated Restaurants</button>
                <input type="text" className="search-input" placeholder="Search for food items..." value={searchList} onChange={(e)=>{
                    setsearchList(e.target.value);
                }}/>
                <button className="search-button" onClick={()=>{
                    const filteredList = resturantList.filter((restaurant) => {
                        return restaurant.info.name.includes(searchList);
                    });
                    setfilterList(filteredList);
                }}>Search</button>
             </div>
             <div className="restaurant-list">
                {/* Render the restaurant cards */}
                <div className="restaurant-cards-list">
                    {
                        filterList.map((restaurant) => {
                            return <ResturantcardComponet key={restaurant.info.id} resObject={restaurant}/>
                        })
                    }
                </div>
                
                
                
             </div>
        </div>
    )
}
export default BodyComponent;