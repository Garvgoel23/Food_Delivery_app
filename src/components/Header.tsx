import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState<string>("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  return (
    <div className="flex justify-between bg-blue-200 shadow-lg mb-2 px-2 ">
      <div className="logo-conatainer">
        <img className="w-50 rounded-b-full" src={LOGO_URL} alt="App Logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online status: {onlineStatus ? "🟢" : "🔴"}</li>

          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-4">Cart</li>
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
          <li className="px-4 font-bold ">User: {data.LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
