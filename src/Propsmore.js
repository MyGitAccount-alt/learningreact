import React from "react";

const Welcome = (props) => {
  return <h1> Hello {props.name} </h1>;
};

const Propsmore = () => {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Pooja" />
    </div>
  );
};

export default Propsmore;
