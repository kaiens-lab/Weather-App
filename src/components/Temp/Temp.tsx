import React from "react";
import "./Temp.css";

function Temperature({ temp }) {
  return <h1 className="temp">{temp}&#176;</h1>;
}

export default Temperature;
