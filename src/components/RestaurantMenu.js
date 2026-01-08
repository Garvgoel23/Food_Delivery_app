import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1></h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>drinks</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
