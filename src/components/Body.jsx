import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(resList);

  const filterTopRestaurants = () => {
    const filterRestuarants = restaurantsList.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.5;
    });
    setRestaurantsList(filterRestuarants);
  };
  return (
    <div className="container my-4">
      <div>
        <button
          className="btn btn-primary"
          onClick={() => filterTopRestaurants()}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="row">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
