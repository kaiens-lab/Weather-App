import React, { useState, useEffect } from "react";
import Brand from "./components/Brand/Brand";
import Temperature from "./components/Temp/Temp.jsx";
import CityInfo from "./components/CityInfo/CityInfo.jsx";
import WeatherPanel from "./components/Panel/Panel.jsx";
import Weather from "./components/Weather/Weather.jsx";
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
    <div className="container">
      {/* Include the Weather component for handling the background and button color */}
      <Weather weatherData={weatherData} />
      <div className="weather-app-content">
        <Brand />
        <Temperature temp={weatherData?.current?.temp_c} />
        <CityInfo
          localtime={weatherData?.location?.localtime}
          cityName={weatherData?.location?.name}
          conditionIcon={weatherData?.current?.condition?.icon}
          conditionText={weatherData?.current?.condition?.text}
        />
        <WeatherPanel
          fetchWeatherData={fetchWeatherData}
          weatherData={weatherData}
        />
      </div>
    </div>
  );
}

export default App;
