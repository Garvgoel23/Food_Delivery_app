// import { useEffect, useState } from "react";
// import { MENU_API } from "./constants";

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(MENU_API + resId);
//     const json = await data.json();
//     setResInfo(json.data);
//   };
//   return resInfo;
// };
// export default useRestaurantMenu;

// const [resInfo, setResInfo] = useState(null);

// useEffect(() => {
//   fetchMenu();
// }, []);
// const fetchMenu = async () => {
//   const data = await fetch(MENU_API + resId);
//   const json = await data.json();
//   console.log(json);
//   setResInfo(json?.data);
// };
// console.log(resInfo);
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId: string | undefined) => {
  const [resInfo, setResInfo] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!resId) return;

    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
