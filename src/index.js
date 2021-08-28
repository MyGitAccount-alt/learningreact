import { StrictMode } from "react";
import ReactDOM from "react-dom";
import BasicLineChart from "./Demo/Charts/HighChart/BasicLineChart";

// import Hello from "./Hello";
// import Button from "./Button";
// import Buttondiff from "./Buttondiff";
// import ToggleButton from "./ToggleButton";
// import TabButton from "./TabButton";
// import Banner from "./Banner";
// import Tooltip from "./Tooltip";
// import Propspass from "./Propspass";
// import Stateprops from "./Stateprops";
// import Propex from "./Propex";
// import Propsmore from "./Propsmore";
// import Componentextract from "./Componentextract";
// import Imageprops from "./Imageprops";
// import Toggle from "./Toggle";

// const comment = {
//   date: new Date(),
//   text: "I hope you enjoy learning React!",
//   author: {
//     name: "Hello Kitty",
//     avatarUrl: "https://placekitten.com/g/64/64"
//   }
// };
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Hello />
    <Button />
    <Buttondiff />
    <ToggleButton />
    <TabButton />
    <Banner />
    <Tooltip />
    <Propspass persons={["Joker", "Batman"]} />
    <Stateprops />
    <Propex />
    <Propsmore />
    <Componentextract
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />
    <Imageprops />
    <Toggle /> */}
    <BasicLineChart />
  </StrictMode>,
  rootElement
);
