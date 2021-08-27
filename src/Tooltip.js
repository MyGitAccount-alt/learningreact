import React from "react";
import "./styles.css";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import MaterialTooltip from "@material-ui/core/Tooltip";

const Container = styled.div`
  background-color: lightblue;
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 2px 20px lightgray;
`;

const ReactStyledTooltip = styled(ReactTooltip)`
  background-color: white !important;
  color: black !important;
  &:after {
    border-top-color: white !important;
  }
`;
export default function Tooltip() {
  return (
    <div>
      <Container data-tip data-for="happyFace">
        React-tooltip-container
      </Container>
      <ReactTooltip id="happyFace">
        <span>Show happy face</span>
      </ReactTooltip>
      <Container data-tip data-for="sadFace">
        React-tooltip-styled
      </Container>
      <ReactStyledTooltip id="sadFace" effect="solid">
        <span>Show sad face</span>
      </ReactStyledTooltip>
      <MaterialTooltip title="Tooltip-text">
        <Container>Material UI default</Container>
      </MaterialTooltip>
    </div>
  );
}
