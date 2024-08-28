import React from "react";
import Temp from "../Temp/Temp";

function Weather({ weatherData }) {
  return (
    <div className="container">
      {/* 其他組件 */}
      <Temp temp={weatherData?.current.temp_c} />
      {/* 其他組件 */}
    </div>
  );
}

export default Weather;
