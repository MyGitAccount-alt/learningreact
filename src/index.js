import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Hello from "./Hello";
import Button from "./Button";
import Buttondiff from "./Buttondiff";
import ToggleButton from "./ToggleButton";
import TabButton from "./TabButton";
import Banner from "./Banner";
import Tooltip from "./Tooltip";

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
  </StrictMode>,
  rootElement
);
