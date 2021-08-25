import React, { useState } from "react";
import styled from "styled-components";

const theme = {
  yellow: {
    default: "yellow",
    hover: "blue"
  },
  pink: {
    default: "pink",
    hover: "green"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: black;
  padding: 5px 15px;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "yellow"
};

function clickme() {
  alert("Did you really clicked me!");
}

const types = ["Cash", "Credit Card", "Bitcoin"];
function ToggleGroup() {
  const [active, SetActive] = useState(types[0]);
  return;
  <div>
    {types.map((type) => (
      <Button>{types}</Button>
    ))}
  </div>;
}

export default function App() {
  return (
    <>
      <div>
        <Button onClick={clickme}>Click me</Button>
      </div>
      <div>
        <Button theme="pink" onClick={clickme}>
          Pink theme
        </Button>
      </div>
      <div>
        <Button disabled onClick={clickme}>
          Disabled
        </Button>
      </div>
      <a href="https://react.school" target="_blank">
        <Button> Link </Button>
      </a>
    </>
  );
}
