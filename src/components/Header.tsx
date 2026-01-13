import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState<string>("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-conatainer">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>

      <div className="nav-item">
        <ul>
          <li>Online status: {onlineStatus ? "🟢" : "🔴"}</li>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>Cart</li>

          <button
            className="login"
            onClick={() => {
              setBtnNameReact((prev) =>
                prev === "Login" ? "Logout" : "Login"
              );
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
