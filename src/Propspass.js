import React from "react";

function Hello() {
  return <div> Hii </div>;
}

export default function Propspass({ persons }) {
  return (
    <div>
      {persons.map((person, index) => {
        return <Hello who={person} key={index} />;
      })}
    </div>
  );
}
