import React, { useState, useEffect } from "react";
import Brand from "./components/Brand/Brand";
import Temperature from "./components/Temp/Temp.jsx";
import CityInfo from "./components/CityInfo/CityInfo.jsx";
import "./styles/App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData("London");
  }, []);

  const fetchWeatherData = (city) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=74166b5031014ee1b39122710242608&q=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };

  return (
    <div className="weather-app">
      <Brand />
      <Temperature temp={weatherData?.current?.temp_c} />
      <CityInfo
        localtime={weatherData?.location?.localtime}
        cityName={weatherData?.location?.name}
      />
    </div>
  );
}

export default App;
