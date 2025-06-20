// Resturantcard Componet
import { CDN_URL } from "../utils/constant";    
const ResturantcardComponet=(props)=>{
    const {resObject}=props;   
   

     
    return(
        <div className="restaurant-card">
            <div className="restaurant-image">
                <img src={CDN_URL+resObject?.info?.cloudinaryImageId} alt="Restaurant"/>
            </div>
            <div className="restaurant-details">
                <h2 className="restaurant-name">{resObject?.info?.name}</h2>
                <p className="restaurant-cuisine">{resObject?.info?.cuisines.join(',')}</p>
                <p className="restaurant-rating">{resObject?.info?.avgRating}</p>
                <p className="restaurant-duration">{resObject?.info.sla.slaString}</p>
            </div>
        </div>
    )
}
export default ResturantcardComponet;