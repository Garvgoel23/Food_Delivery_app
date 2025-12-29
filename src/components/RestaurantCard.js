/**import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { sourceIconImageId,cloudinaryImageId } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{props.resName} </h3>
      <h4>{props.cuisine}</h4>
      <h4>5 star</h4>
      <h4>30mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="Biryani, north indian"
        />
        <RestaurantCard resName="PizzaHut" cuisine="Burger,Pizza, Fries" />
      </div>
    </div>
  );
};
export default RestaurantCard;**/
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, sla } = resData.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
