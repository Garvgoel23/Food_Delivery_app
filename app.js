import React from "react";
import ReactDOM from "react-dom/client";
/** const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "i am an h1 tag"),
    React.createElement("h2", { key: "h2" }, "i am an h2 tag"),
  ])
);
 const heading = React.createElement(
        "h1",
         {id: "heading", xyz: "abc"}, 
         "Hello world");
         //root.render(parent);


// JSX ---> react element
// class based components - OLD
//functional components - NEW

const Heading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

const fn = () => true;
const fn2 = () => {
  return true;
};
const HeadingComponent = () => <h1> Namaste react functional component</h1>;
// component composition in inter linking 2 or more react components into a single functional component

const HeadingComponent2 = () => {
  <div id="container">
    <h1 className="heading"> Namaste react functional component</h1>;
  </div>;
};*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-conatainer">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
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
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
/**
 * header
 * - LOGO
 * -NAVITEMS
 *
 * body
 * -SEARCH
 * -REATAURANT CONTAINER
 *  -CARDS
 * footer
 * -CC
 * - LINKS
 * -ADDRESS
 * - CONTACT
 
 */
