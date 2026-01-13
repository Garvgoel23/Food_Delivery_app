// import { useEffect, useState } from "react";
// import RestaurantCard from "./RestaurantCard";
// import Shimmer from "./Shimmer";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { Link } from "react-router-dom";
// //import { RESTAURANT_API } from "../utils/constants";
// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       " https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();
//     const restaurants =
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants;
//     console.log(restaurants);
//     setListOfRestaurants(restaurants);
//     setFilteredRestaurants(restaurants);
//   };
//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false)
//     return <h1> You are offline check your internet connection</h1>;
//   if (listOfRestaurants.length === 0) return <Shimmer />;

//   return (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             className="search-box"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />

//           <button
//             onClick={() => {
//               const filtered = listOfRestaurants.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurants(filtered);
//             }}
//           >
//             Search
//           </button>
//         </div>

//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filtered = listOfRestaurants.filter(
//               (res) => res.info.avgRating > 4.5
//             );
//             setFilteredRestaurants(filtered);
//           }}
//         >
//           Top Rated Restaurant
//         </button>
//       </div>

//       <div className="res-container">
//         {filteredRestaurants?.map((restaurant) => (
//           <Link
//             key={restaurant.info.id}
//             to={"/restaurants/" + restaurant?.info?.id}
//           >
//             <RestaurantCard resData={restaurant} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

interface RestaurantInfo {
  // id: string;
  // name: string;
  // avgRating: number;
  id: string;
  name: string;
  cuisines: string[];
  cloudinaryImageId: string;
  avgRating: number;
  sla: {
    deliveryTime: number;
  };
}

interface Restaurant {
  info: RestaurantInfo;
}

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );
  const [searchText, setSearchText] = useState("");

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
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
          className="filter-btn"
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

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
