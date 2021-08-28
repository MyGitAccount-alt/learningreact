import React from "react";

class Toggle extends React.Component {
  handleClick = () => {
    console.log("Click happened");
  };
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default Toggle;
