import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import { RESTAURANT_API_URL, RESTURANT_IMAGE_URL } from "../utils/constant";

const ResturantmenuComponent = () => {
    const [resturantData, setResturantData] = useState({});
    const [itemList, setItemList] = useState([]);
    const [filterItemList, setFilterItemList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const { id } = useParams();

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const response = await fetch(RESTAURANT_API_URL + id);
        const data = await response.json();

        const restaurantInfo = data?.data?.cards[2]?.card?.card?.info;
        const itemCards =
            data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards || [];

        setResturantData(restaurantInfo);
        setItemList(itemCards);
        setFilterItemList(itemCards);
    };

    const handleSearch = () => {
        const filtered = itemList.filter((item) =>
            item?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterItemList(filtered);
    };

    const filterVeg = () => {
        const filtered = itemList.filter((item) => item?.card?.info?.isVeg === 1);
        setFilterItemList(filtered);
    };

    const filterNonVeg = () => {
        const filtered = itemList.filter((item) => item?.card?.info?.isVeg !== 1);
        setFilterItemList(filtered);
    };

    return (
        <div className="resturant-menu-container">
            <h1 className="resturant-name">{resturantData?.name}</h1>

            <div className="resturant-card">
                <div className="resturant-details">
                    <p>Rating: {resturantData?.avgRating}</p>
                    <p>Delivery Time: {resturantData?.sla?.deliveryTime} mins</p>
                    <p>Cost for two: ₹{resturantData?.costForTwo / 100}</p>
                </div>
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
                <input
                    type="text"
                    placeholder="Search for dishes or cuisines"
                    className="search-input1"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search-button1" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="item-type-list-container">
                <button className="item-type-button" onClick={filterVeg}>
                    Veg
                </button>
                <button className="item-type-button" onClick={filterNonVeg}>
                    Non Veg
                </button>
                <button className="item-type-button">Bestseller</button>
                <button className="item-type-button">Guiltfree</button>
            </div>

            <h1 className="resturant-menu">Menu List</h1>
            {filterItemList.length === 0 ? (
                <ShimmerComponent />
            ) : (
                filterItemList.map((item) => (
                    <div className="menu-item-card" key={item?.card?.info?.id}>
                        <div className="menu-item-details">
                            <div className="menu-item-text">
                                <p className="item-type">
                                    {item?.card.info?.isVeg ? "Veg" : "Non-Veg"}
                                </p>
                                <h2 className="menu-item-name">
                                    {item?.card?.info?.name}
                                </h2>
                                <p className="menu-item-price">
                                    ₹
                                    {(item?.card?.info?.price ||
                                        item?.card?.info?.defaultPrice) / 100}
                                </p>
                                <p className="menu-item-price">
                                    {"★" +
                                        item?.card?.info?.ratings?.aggregatedRating?.rating +
                                        " (" +
                                        item?.card?.info?.ratings?.aggregatedRating
                                            ?.ratingCountV2 +
                                        ")"}
                                </p>
                                <p className="menu-item-description">
                                    {item?.card?.info?.description}
                                </p>
                            </div>
                            {item?.card?.info?.imageId && (
                                <img
                                    className="menu-item-img"
                                    src={RESTURANT_IMAGE_URL + item.card.info.imageId}
                                    alt={item?.card?.info?.name}
                                />
                            )}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ResturantmenuComponent;
