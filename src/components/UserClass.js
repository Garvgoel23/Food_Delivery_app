import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>{this.props.name}</h2>
        <h3>Delhi</h3>
        <h4>@garvgoel13</h4>
      </div>
    );
  }
}
export default UserClass;
