import React from "react";
import "./Grid.scss";

const Grid = (props) => {
  return <div className={"Grid-Wrapper"}>{props.children}</div>;
};

export default Grid;