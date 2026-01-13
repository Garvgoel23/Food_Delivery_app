export interface RestaurantInfo {
  id: string;
  name: string;
  cuisines: string[];
  cloudinaryImageId: string;
  avgRating: number;
  sla: {
    deliveryTime: number;
  };
}

export interface Restaurant {
  info: RestaurantInfo;
}
