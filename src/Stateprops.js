import React, { useState } from "react";

function Stateprops() {
  const [count, SetCount] = useState(0);

  const DoubleIncreaseHandler = () => {
    SetCount(count + 1);
    SetCount(count + 1);
  };

  return (
    <>
      <button onClick={DoubleIncreaseHandler}>Double Increase</button>
      <div>Count : {count}</div>
    </>
  );
}

export default Stateprops;
