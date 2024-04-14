import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
