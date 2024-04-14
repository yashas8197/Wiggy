const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData.info;
  return (
    <div className="col-md-3 my-3">
      <div className="card" style={{ width: "15rem" }}>
        <img
          style={{ width: "15rem" }}
          className="card-img-top img-fluid"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="restaurantImg"
        />
        <div className="card-body">
          <p className="card-text">
            <strong>{name}</strong>
            <p>{avgRating}</p>
            {cuisines.join(", ")}
            <p>{costForTwo}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
