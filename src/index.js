import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Hello from "./Hello";
import Button from "./Button";
import Buttondiff from "./Buttondiff";
import ToggleButton from "./ToggleButton";
import TabButton from "./TabButton";
import Banner from "./Banner";
import Tooltip from "./Tooltip";
import Propex from "./Propex";
import Propspass from "./Propspass";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Hello />
    <Button />
    <Buttondiff />
    <ToggleButton />
    <TabButton />
    <Banner />
    <Tooltip />
    <Propex name="Pooja" />
    <Propspass persons={["Joker", "Batman"]} />
  </StrictMode>,
  rootElement
);
