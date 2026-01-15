// import RestaurantMenu from "./RestaurantMenu";
// import { useState } from "react";
// import { MenuItemInfo } from "../utils/Types";

// const RestaurantMenu = ({ resdata }: MenuItemInfo) => {
//   const [showItems, setShowItems] = useState(false);

//   const handleClick = () => {
//     setShowItems(!showItems);
//   };

//   return (
//     <div>
//       <div className=" w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 ">
//         <div
//           className="flex justify-between cursor-pointer "
//           onClick={handleClick}
//         >
//           <span className="font-bold text-lg">
//             {data?.title} ({data?.itemCards?.length})
//           </span>
//           <span>🔽</span>
//         </div>
//         {showItems && <MenuItemList items={data?.itemCards || []} />}
//       </div>
//     </div>
//   );
// };

// export default MenuCategory;
/*import { useState } from "react";
//import { useDispatch} from "react-redux";
//import { addItem } from "../utils/cartSlice";
interface ItemInfo {
  id: string;
  name: string;
  price?: number;
  defaultPrice?: number;
}

interface ItemCard {
  card: {
    info: ItemInfo;
  };
}

interface CategoryCard {
  card: {
    card: {
      title: string;
      itemCards: ItemCard[];
    };
  };
}
interface MenuCategoriesProps {
  data: CategoryCard;
  showItems: boolean;
  changeIndex: () => void;
}
const MenuCategories = ({
  data,
  showItems,
  changeIndex,
}: MenuCategoriesProps) => {
  //  const dispatch=useDispatch();
  const handleClick = (item: any) => {
    //dispatch an action to add item to cart
    //dispatch(addItem(item));
  };

  return (
    <div className="w-6/12 m-auto bg-amber-100 rounded-md mb-2   ">
      <div
        className="flex 
                            justify-between 
                            items-center 
                             
                            p-2 
                            border-amber-500 
                            border-2 
                            rounded-md 
                            bg-amber-50
                            hover:bg-amber-100 
                            hover:scale-105 
                            transition-transform 
                            duration-200"
        onClick={changeIndex}
      >
        <h2
          className="text-2xl 
                               font-bold 
                               m-2
                                p-2
                            border-amber-500
                                "
        >
          {data.card.card.title}
        </h2>
        <h2>{showItems ? "ᐱ" : "V"}</h2>
      </div>
      {showItems &&
        data.card.card.itemCards.map((p) => (
          <div
            key={p.card.info.id}
            className="flex
                                            bg-amber-50 
                                            justify-between
                                            items-center 
                                            border-amber-500 
                                            border-2 
                                            m-2 
                                            p-2 
                                            rounded-md 
                                            hover:bg-amber-100 
                                            hover:scale-105 
                                            transition-transform 
                                            duration-200"
          >
            <h4>{p.card.info.name} </h4>
            <h4>
              {" "}
              ₹{p.card.info.price / 100 || p.card.info.defaultPrice / 100}
              <div>
                <button
                  className="border-2 rounded-md p-2 text-sm
                                                     hover:bg-amber-100 
                                            hover:scale-115 
                                            transition-transform 
                                            duration-200"
                  onClick={() => handleClick(p.card.info)}
                >
                  ADD +
                </button>
              </div>
            </h4>
          </div>
        ))}
    </div>
  );
};
export default MenuCategories;
*/
