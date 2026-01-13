import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

interface MenuItemInfo {
  id: string;
  name: string;
  price: number;
}

interface ItemCard {
  card: {
    info: MenuItemInfo;
  };
}

interface RestaurantInfo {
  name: string;
  cuisines: string[];
  costForTwo: string;
}

const RestaurantMenu = () => {
  const { resId } = useParams<{ resId: string }>();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.cards?.[2]?.card?.card?.info ?? {};

  const itemCards: ItemCard[] =
    resInfo?.cards
      ?.find((c: any) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (c: any) => c?.card?.card?.itemCards
      )?.card?.card?.itemCards ?? [];

  return (
    <div className="menu">
      <h1>{name}</h1>

      <p>
        {cuisines?.join(", ")} - {costForTwo}
      </p>

      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
