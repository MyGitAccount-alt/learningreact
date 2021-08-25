import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Hello from "./Hello";
import Button from "./Button";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Hello />
    <Button />
  </StrictMode>,
  rootElement
);
