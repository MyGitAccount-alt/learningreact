import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: green;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
const types = ["Cash", "Credit", "Bitcoin"];

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      {types.map((type) => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}

export default function ToggleButton() {
  return (
    <div>
      <ToggleGroup />
    </div>
  );
}
