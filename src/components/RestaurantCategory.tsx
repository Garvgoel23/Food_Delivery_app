import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import {
  RestaurantCategoryProps,
  ItemInfo,
  ItemCard,
  CategoryCard,
} from "../utils/Types";

const RestaurantCategory = ({
  data,
  showItems,
  changeIndex,
}: RestaurantCategoryProps) => {
  const dispatch = useDispatch();
  const handleAddItem = (item: ItemInfo) => {
    console.log("Item added to cart:", item);
    // Here you can dispatch an action to add the item to the Redux store
    dispatch(addItem(item));
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 rounded-lg shadow-md">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={changeIndex}
      >
        <span className="font-bold text-lg">
          {data.card.card.title} ({data.card.card.itemCards.length})
        </span>
        <span className="text-xl">{showItems ? "🔼" : "🔽"}</span>
      </div>

      {showItems &&
        data.card.card.itemCards.map((item) => {
          const { id, name, price, defaultPrice } = item.card.info;

          return (
            <div
              key={id}
              className="flex justify-between items-center px-4 py-3 border-t bg-white"
            >
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-sm text-gray-600">
                  ₹{(price ?? defaultPrice ?? 0) / 100}
                </p>
              </div>

              <button
                className="border px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100"
                onClick={() => handleAddItem(item.card.info)}
              >
                ADD +
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantCategory;
