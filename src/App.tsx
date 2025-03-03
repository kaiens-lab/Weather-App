import React, { useState, useEffect, useCallback } from "react";
import { WeatherData } from "./types";
import Brand from "./components/Brand/Brand";
import Temperature from "./components/Temp/Temp";
import CityInfo from "./components/CityInfo/CityInfo";
import WeatherPanel from "./components/WeatherPanel/WeatherPanel";
import StyleUpdater from "./components/StyleUpdater/StyleUpdater";
import "./styles/App.css";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = useCallback((city: string): void => {
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
  }, []);

  useEffect(() => {
    fetchWeatherData("Taipei");
  }, [fetchWeatherData]);

  return (
    <div className="container">
      {weatherData && <StyleUpdater weatherData={weatherData} />}
      <div className="weather-app-content">
        <Brand />
        {weatherData ? (
          <>
            <div className="info-wrapper">
              <Temperature temp={weatherData.current?.temp_c} />
              <CityInfo
                localtime={weatherData.location?.localtime}
                cityName={weatherData.location?.name}
                conditionText={weatherData.current?.condition?.text}
                conditionIcon={weatherData.current?.condition?.icon}
                conditionCode={weatherData.current?.condition?.code}
                isDay={weatherData.current?.is_day}
              />
            </div>
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
