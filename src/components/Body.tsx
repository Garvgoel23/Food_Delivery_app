import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { Restaurant } from "../utils/Types";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  console.log("Body Rendered", listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants: Restaurant[] =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are offline, check your internet connection</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex justify-center items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg
          "
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      {/* const {(LoggedInUser, setUserInfo)} = useContext(UserContext);
      <div className="flex justify-center items-center">
        <label>UserName</label>
        <input
          className="border-black  border p-1"
          value={LoggedInUser}
          onChange={(e) => setUserInfo(e.target.value)}
        ></input>
      </div> */}
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
            {/* <RestaurantCard resData={restaurant.info} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
