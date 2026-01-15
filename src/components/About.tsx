//import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is a food delivery web application</h2>
      <UserClass />
      {/* <div>
        LoggedIn User
        <UserContext.Consumer>
          {(data) => <span className="font-bold"> {data.LoggedInUser}</span>}
        </UserContext.Consumer>
      </div> */}
    </div>
  );
};

export default About;
