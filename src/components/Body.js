import RestaurantCard from "./RestaurantCard";
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
