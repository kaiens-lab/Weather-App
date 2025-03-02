import React, { useEffect, useState } from "react";
import "./CityInfo.css";
import Icon from "./Icon";

type CityInfoProps = {
  localtime: string;
  cityName: string;
  conditionText: string;
  conditionIcon: string;
  isDay: boolean;
  day: string;
};

const CityInfo: React.FC<CityInfoProps> = ({
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
      // The API returns `localtime` in this format: "2025-03-02 12:00"
      const y = parseInt(localtime.substring(0, 4));
      const m = parseInt(localtime.substring(5, 7));
      const d = parseInt(localtime.substring(8, 10));
      const timeStr = localtime.substring(11);

      const dayOfTheWeek = (day: number, month: number, year: number) => {
        const weekday = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        return weekday[new Date(year, month - 1, day).getDay()];
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
        <Icon
          conditionIcon={conditionIcon}
          data-testid="icon-component"
          isDay={isDay}
        />
        <p className="condition-text">{conditionText}</p>
      </div>
    </div>
  );
};

export default CityInfo;
