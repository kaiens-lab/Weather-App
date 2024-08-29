import React, { useEffect, useState } from "react";
import "./CityInfo.css";
import Icon from "./Icon";

const CityInfo = ({
  localtime,
  cityName,
  conditionText,
  conditionIcon,
  isDay,
}) => {
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
      <div className="city-detail">
        <div className="city-name">{cityName}</div>
        <div className="city-time">
          <div className="time">{time} - </div>
          <div className="date">{date}</div>
        </div>
      </div>
      <div className="weather-condition">
        <Icon conditionIcon={conditionIcon} isDay={isDay} />{" "}
        {/* 传递 conditionIcon 和 isDay */}
        <p className="condition-text">{conditionText}</p>
      </div>
    </div>
  );
};

export default CityInfo;
