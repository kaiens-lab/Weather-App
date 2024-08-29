import React, { useState, useEffect } from "react";
import Brand from "./components/Brand/Brand";
import Temperature from "./components/Temp/Temp.jsx";
import CityInfo from "./components/CityInfo/CityInfo.jsx";
import WeatherPanel from "./components/Panel/Panel.jsx";
import Weather from "./components/Weather/Weather.jsx";
import "./styles/App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData("London");
  }, []);

  const fetchWeatherData = (city) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=74166b5031014ee1b39122710242608&q=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert("City not found! Please try again."); // 弹出提示框
          setError("City not found!");
        } else {
          setError(null);
          setWeatherData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError("An error occurred while fetching the weather data.");
      });
  };

  return (
    <div className="container">
      <Weather weatherData={weatherData} />
      <div className="weather-app-content">
        <Brand />
        {weatherData ? (
          <>
            <Temperature temp={weatherData.current?.temp_c} />
            <CityInfo
              localtime={weatherData.location?.localtime}
              cityName={weatherData.location?.name}
              conditionText={weatherData.current?.condition?.text}
              conditionIcon={weatherData.current?.condition?.icon}
              conditionCode={weatherData.current?.condition?.code}
              isDay={weatherData.current?.is_day}
            />
          </>
        ) : (
          !error && <p>Loading...</p>
        )}
        <WeatherPanel
          fetchWeatherData={fetchWeatherData}
          weatherData={weatherData}
        />
      </div>
    </div>
  );
}

export default App;
