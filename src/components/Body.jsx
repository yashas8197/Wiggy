import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(resList);
  const [filteredRestuarant, setFilteredRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");

  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearchText(value);
    const filteredRestaurants = restaurantsList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredRestaurant(filteredRestaurants);
  };

  const filterTopRestaurants = () => {
    const filterRestuarants = restaurantsList.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.5;
    });
    setFilteredRestaurant(filterRestuarants);
  };
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary"
          onClick={() => filterTopRestaurants()}
        >
          Top Rated Restaurants
        </button>
        <div className="my-2 my-lg-0 d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={onChangeSearch}
          />
        </div>
      </div>

      <div className="row">
        {filteredRestuarant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
