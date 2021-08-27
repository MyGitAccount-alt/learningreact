import React from "react";

//Single Props (1st way)

// function Propex(props) {
//   return <div> Hello {props.name} </div>;
// }

// export default Propex;

//Single Props (2nd Way)

// export default function Propex(props) {
//   return <div> Hello {props.name}</div>;
// }

//Single props (3rd way)

// const FunctionProp = (props) => {
//   return <div> Hello {props.name} </div>;
// };
// export default FunctionProp;

//Multiple Props

// export default function MultipleProps({ greet, who }) {
//   return (
//     <div>
//       {" "}
//       {greet} {who}{" "}
//     </div>
//   );
// }

//Single props (using class component)

class Propex extends React.Component {
  render() {
    return <div> Hello {this.props.name} </div>;
  }
}

export default Propex;
