import React, { useState, useEffect } from "react";
import Brand from "./components/Brand/Brand";
import Temperature from "./components/Temp/Temp.jsx";
import CityInfo from "./components/CityInfo/CityInfo.jsx";
import WeatherPanel from "./components/WeatherPanel/WeatherPanel.jsx";
import StyleUpdater from "./components/StyleUpdater/StyleUpdater.jsx";
import "./styles/App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData("Taipei");
  }, []);

  const fetchWeatherData = (city) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError("City not found! Please try again.");
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
      <StyleUpdater weatherData={weatherData} />
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
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
