import { CDN_URL } from "../utils/constants";
import { RestaurantInfo } from "../utils/Types";

interface RestaurantCardProps {
  resData: RestaurantInfo;
}

const RestaurantCard = ({ resData }: RestaurantCardProps) => {
  const { name, cuisines, cloudinaryImageId, avgRating, sla } = resData;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
