import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(resList);
  const [filteredRestuarant, setFilteredRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");

  const onClickSearch = (e) => {
    e.preventDefault();
    const filteredRestaurants = restaurantsList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    if (filteredRestaurants !== "") {
      setFilteredRestaurant(filteredRestaurants);
    } else {
      setFilteredRestaurant(resList);
    }
  };

  const filterTopRestaurants = () => {
    const filterRestuarants = restaurantsList.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.5;
    });
    setRestaurantsList(filterRestuarants);
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
        <form className="form-inline my-2 my-lg-0 d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={onClickSearch}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
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
