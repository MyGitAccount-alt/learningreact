import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: green;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;

  &:disabled {
    color: white;
    opacity: 0.7;
    cursor: default;
  }
`;
const Buttongroup = styled.div`
  display: flex;
`;
const Linkbutton = styled.button`
  background-color: tomato;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
function clickMe() {
  alert("Oops you clicked me!");
}

export default function Buttondiff() {
  return (
    <>
      <div className="Buttondiff">
        <Button onClick={clickMe}> ON CLICK BUTTON </Button>
      </div>
      <div className="Buttondiff">
        <Button disabled onClick={clickMe}>
          {" "}
          DISABLED BUTTON{" "}
        </Button>
      </div>
      <div className="Buttondiff">
        <a href="https://www.w3schools.com" target="_blank">
          <Linkbutton> LINK BUTTON </Linkbutton>
        </a>
      </div>
      <div className="Buttondiff">
        <Buttongroup>
          <Button>Group 1 </Button>
          <Button>Group2 </Button>
        </Buttongroup>
      </div>
    </>
  );
}
