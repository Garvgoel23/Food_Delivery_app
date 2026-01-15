export interface RestaurantInfo {
  id: string;
  name: string;
  cuisines: string[];
  cloudinaryImageId: string;
  avgRating: number;
  sla: {
    deliveryTime: number;
  };
  promoted: boolean;
}

export interface Restaurant {
  info: RestaurantInfo;
}
export interface MenuItemInfo {
  id: string;
  name: string;
  price: number;
  description: string;
  defaultPrice: number;
  imageId: string;
}

export interface ItemInfo {
  id: string;
  name: string;
  price?: number;
  defaultPrice?: number;
}

export interface ItemCard {
  card: {
    info: ItemInfo;
  };
}

export interface CategoryCard {
  card: {
    card: {
      title: string;
      itemCards: ItemCard[];
    };
  };
}

export interface RestaurantCategoryProps {
  data: CategoryCard;
  showItems: boolean;
  changeIndex: () => void;
}
