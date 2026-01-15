import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { MenuItemInfo } from "../utils/Types";

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

      <div>
        {itemCards.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-1 border-gray-300 text-left flex bg-blue-50 rounded-lg hover:bg-blue-100 shadow-md "
          >
            <div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-20 h-auto inline-block mr-4 rounded-lg "
              />
              <button className="ml-2 bg-white-500 text-black px-2  rounded hover:bg-gray-200 border-2 border-black my-1 py-1 flex justify-center items-center">
                Add+
              </button>
            </div>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
