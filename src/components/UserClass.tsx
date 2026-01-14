import React from "react";

interface UserInfo {
  name: string;
  location: string;
}

interface UserState {
  userInfo: UserInfo;
}

class UserClass extends React.Component<{}, UserState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      userInfo: {
        name: "Garv",
        location: "Delhi",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Garvgoel23");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card m-4 p-4 border border-solid border-black w-60">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>@garvgoel13</h4>
      </div>
    );
  }
}

export default UserClass;
