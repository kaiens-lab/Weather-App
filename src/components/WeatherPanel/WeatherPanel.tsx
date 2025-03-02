import React from "react";
import "./WeatherPanel.css";

/*------------------------------Panel Component------------------------------*/
//Function: Manages user interactions with weather data:
//lets users pick a city, displays weather info, and handles inputs and errors.

//The data for these parameters comes from App.js.
const WeatherPanel = ({ fetchWeatherData, weatherData, error }) => {
  const [cityInput, setCityInput] = React.useState("");
  const cities = ["Taipei", "New York", "California", "Tokyo"];

  //Handles the event when a user clicks on a city name.
  const handleCityClick = (city) => {
    fetchWeatherData(city);
  };

  //Handles the form submission event.
  const handleFormSubmit = (e) => {
    e.preventDefault(); //Prevents the default form submission behavior.
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
          <i className="fas fa-search"></i> {/*Magnifying glass icon*/}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <ul className="cities">
        {cities.map((city) => (
          <li key={city} className="city" onClick={() => handleCityClick(city)}>
            {city}
          </li>
        ))}
      </ul>
      {/*Weather details information*/}
      {/*Generates an unordered list containing three metrics*/}
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
