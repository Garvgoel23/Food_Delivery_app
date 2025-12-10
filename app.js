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
*/

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
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);
root.render(<HeadingComponent />);
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
 *
 *
 *
 *
 *
 *
 */
