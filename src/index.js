import { StrictMode } from "react";
import ReactDOM from "react-dom";


import Hello from "./Hello";
import Button from "./Button";
import Buttondiff from "./Buttondiff";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Hello />
    <Button />
    <Buttondiff />
  </StrictMode>,
  rootElement
);
