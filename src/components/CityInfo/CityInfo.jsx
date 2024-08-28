import React, { useEffect, useState } from "react";
import "./CityInfo.css";

function CityInfo({ localtime, cityName }) {
  // 确保在函数参数中正确接收了 cityName
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (localtime) {
      const y = parseInt(localtime.substr(0, 4));
      const d = parseInt(localtime.substr(5, 2));
      const m = parseInt(localtime.substr(8, 2));
      const timeStr = localtime.substr(11);

      const dayOfTheWeek = (day, month, year) => {
        const weekday = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        return weekday[new Date(`${day}/${month}/${year}`).getDay()];
      };

      setDate(`${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}`);
      setTime(timeStr);
    }
  }, [localtime]);

  return (
    <div className="city-info">
      <div className="city-name">{cityName}</div>
      <div className="city-time">
        <div className="time">{time} - </div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
}

export default CityInfo;
