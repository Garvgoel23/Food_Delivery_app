/**import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockdata";
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {}}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {reslist.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
**/
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockdata";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(reslist);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
