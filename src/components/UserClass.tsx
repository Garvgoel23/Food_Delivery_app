import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Garv",
        Location: "Delhi",
      },
    };
  }
  async componentDidMount() {
    // API CALLS are made inside this
    const data = await fetch("https://api.github.com/users/Garvgoel23");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  // componentWillUnmount() {}
  render() {
    return (
      <div className="user-card">
        <h2>{this.state.userInfo.name}</h2>
        <h3>{this.state.userInfo.location}</h3>
        <h4>@garvgoel13</h4>
      </div>
    );
  }
}
export default UserClass;
