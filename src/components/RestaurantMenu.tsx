import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams<{ resId: string }>();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState<number | null>(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.cards?.[2]?.card?.card?.info ?? {};

  const categories =
    resInfo?.cards
      ?.find((c: any) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c: any) => c?.card?.card?.itemCards
      ) ?? [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - ₹{costForTwo / 100}
      </p>

      <div className="mt-6">
        {categories.map((category: any, index: number) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category}
            showItems={index === showIndex}
            changeIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
