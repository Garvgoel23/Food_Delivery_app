import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/constants";

interface MenuItemInfo {
  id: string;
  name: string;
  price: number;
  description: string;
  defaultPrice: number;
  imageId: string;
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
  console.log("Menu Rendered", itemCards);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>

      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwo / 100}
      </p>

      <h2 className="font-bold">Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="p-2 m-2 border-b-1 border-gray-300 text-left flex bg-blue-50 rounded-lg hover:bg-blue-100 shadow-md"
          >
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-20 h-20 inline-block mr-4 rounded-lg "
            />
            <div className="py-2">
              <span className="">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs ">{item.card.info.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
