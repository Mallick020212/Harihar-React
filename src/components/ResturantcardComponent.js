// Resturantcard Componet
const ResturantcardComponet=(props)=>{
    const {resObject}=props;
    console.log(resObject.card.card.info);
    
    return(
        <div className="restaurant-card">
            <div className="restaurant-image">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resObject.card.card.info.cloudinaryImageId} alt="Restaurant"/>
            </div>
            <div className="restaurant-details">
                <h2 className="restaurant-name">{resObject.card.card.info.name}</h2>
                <p className="restaurant-cuisine">{resObject.card.card.info.cuisines.join(',')}</p>
                <p className="restaurant-rating">{resObject.card.card.info.avgRating}</p>
                <p className="restaurant-duration">{resObject.card.card.info.sla.slaString}</p>
            </div>
        </div>
    )
}
export default ResturantcardComponet;