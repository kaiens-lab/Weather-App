import React from "react";
import "./Panel.css";

const WeatherPanel = ({ fetchWeatherData, weatherData, error }) => {
  const [cityInput, setCityInput] = React.useState("");
  const cities = ["Taipei", "New York", "California", "Tokyo"];

  const handleCityClick = (city) => {
    fetchWeatherData(city);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim() === "") {
      setCityInput("");
    } else {
      fetchWeatherData(cityInput);
      setCityInput("");
    }
  };

  return (
    <div className="panel">
      <form id="locationInput" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="search"
          placeholder="Search Location..."
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button type="submit" className="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}{" "}
      <ul className="cities">
        {cities.map((city) => (
          <li key={city} className="city" onClick={() => handleCityClick(city)}>
            {city}
          </li>
        ))}
      </ul>
      {weatherData && (
        <ul className="details">
          <h4>Weather Details</h4>
          <li>
            <span>Cloudy</span>
            <span className="cloud">{weatherData.current.cloud}%</span>
          </li>
          <li>
            <span>Humidity</span>
            <span className="humidity">{weatherData.current.humidity}%</span>
          </li>
          <li>
            <span>Wind</span>
            <span className="wind">{weatherData.current.wind_kph} km/h</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default WeatherPanel;
