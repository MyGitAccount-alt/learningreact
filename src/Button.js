import React from "react";
import styled from "styled-components";

const Buttonprop = styled.button`
  background-color: green;
  color: white;
`;
function clickme() {
  alert("Did you really click me!");
}

export default function Button() {
  return (
    <div className="Button">
      <Buttonprop onClick={clickme}>Click Me </Buttonprop>
    </div>
  );
}
