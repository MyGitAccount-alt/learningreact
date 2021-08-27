import React from "react";

//Single Props (1st way)

function SingleProps(props) {
  return <div> Hello {props.name} </div>;
}

//Single Props (2nd Way)

const Singlepropssec = (props) => {
  return <div> Welcome {props.name}</div>;
};

//Single props (3rd way)

const FunctionProp = (props) => {
  return <div> Hi {props.name} </div>;
};

//Multiple Props

const MultiProps = ({ greet, who }) => {
  return (
    <div>
      {" "}
      {greet} {who}{" "}
    </div>
  );
};

//Single props (using class component)

class Classcomp extends React.Component {
  render() {
    return <div> Hello {this.props.name} </div>;
  }
}

const Propex = () => {
  return (
    <div>
      <h1>
        {" "}
        <SingleProps name="Samy" />{" "}
      </h1>
      <h1>
        {" "}
        <Singlepropssec name="Pooja" />{" "}
      </h1>
      <h1>
        {" "}
        <FunctionProp name="Guys" />{" "}
      </h1>
      <h1>
        {" "}
        <MultiProps greet="Hi" who="Ranbir" />{" "}
      </h1>
      <h1>
        {" "}
        <MultiProps greet="Hi" who="Ranbir" />{" "}
      </h1>
      <h1>
        {" "}
        <Classcomp greet="Hi" who="Ranbir" />{" "}
      </h1>
    </div>
  );
};
export default Propex;
