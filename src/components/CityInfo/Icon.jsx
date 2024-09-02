import React from "react";

/*--------------------------Icon component--------------------------*/
//Function: Show the correct weather icon based on the weather condition
//and whether it’s day or night.

// 'conditionIcon' and 'isDay' come from App.js
// Passed through CityInfo to Icon
const Icon = ({ conditionIcon, isDay }) => {
  if (!conditionIcon) {
    return null;
  }

  // Extract icon ID from conditionIcon URL
  // Example: "143.png" from "cdn.weatherapi.com/weather/64x64/night/143.png"
  const timeOfDay = isDay ? "day" : "night";
  const iconId = conditionIcon.split("/").pop();

  const iconPath = `/assets/icons/${timeOfDay}/${iconId}`;

  return <img src={iconPath} alt="Weather Icon" className="weather-icon" />;
};

export default Icon;
