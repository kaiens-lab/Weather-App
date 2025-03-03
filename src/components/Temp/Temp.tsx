import React from "react";
import "./Temp.css";

type TemperatureProps = {
  temp: number;
};

const Temperature: React.FC<TemperatureProps> = ({ temp }) => {
  return <h1 className="temp">{temp}&#176;</h1>;
};
export default Temperature;
