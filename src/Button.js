import React from "react";
import styled from "styled-components";

const Buttonprop = styled.button`
  background-color: green;
  color: white;
`;
function clickme() {
  alert("Did you really click me!");
}

function hoverfun() {
  alert("Did you double click me");
}

export default function Button() {
  return (
    <div className="Button">
      <Buttonprop onClick={clickme}>Click Me </Buttonprop>
      <Buttonprop onDoubleClick={hoverfun}> Hi </Buttonprop>
    </div>
  );
}
