import React from "react";
import "./styledrop.css";

function handleButtonClick() {
  const [state, setState] = (state) => {
    return {
      open: !state.open
    };
  };
}

const state = {
  open: false
};

const Dropdown = () => {
  return (
    <div className="container">
      <button type="button" class="button" onClick={handleButtonClick}>
        ☰
      </button>
      {state.open && (
        <div className="Dropdown">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
