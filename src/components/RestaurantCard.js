const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/37e31a5f-6dc1-4ef2-8a9f-67d075111a4e_16865.JPG"
      />
      <h3>{props.resName} </h3>
      <h4>{props.cuisine}</h4>
      <h4>5 star</h4>
      <h4>30mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="Biryani, north indian"
        />
        <RestaurantCard resName="PizzaHut" cuisine="Burger,Pizza, Fries" />
      </div>
    </div>
  );
};
export default RestaurantCard;
