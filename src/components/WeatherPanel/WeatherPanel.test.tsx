import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import WeatherPanel from "./WeatherPanel";
import { WeatherData } from "../../types";

//Test: default state
test("renders WeatherPanel with default elements", () => {
  render(
    <WeatherPanel fetchWeatherData={jest.fn()} weatherData={null} error="" />
  );

  expect(screen.getByPlaceholderText("Search Location...")).toBeInTheDocument();
  expect(screen.getByText("Taipei")).toBeInTheDocument();
  expect(screen.getByText("New York")).toBeInTheDocument();
  expect(screen.getByText("California")).toBeInTheDocument();
  expect(screen.getByText("Tokyo")).toBeInTheDocument();
});

//Test: the function of click city
test("call fetchWeatherData when click the city", () => {
  const mockFetchWeatherData = jest.fn();
  render(
    <WeatherPanel
      fetchWeatherData={mockFetchWeatherData}
      weatherData={null}
      error=""
    />
  );

  fireEvent.click(screen.getByText("Taipei"));
  expect(mockFetchWeatherData).toHaveBeenCalledWith("Taipei");
});

//Test: the function of typing input
test("updates input value when typing", () => {
  render(
    <WeatherPanel fetchWeatherData={jest.fn()} weatherData={null} error="" />
  );

  const input = screen.getByPlaceholderText("Search Location...");
  fireEvent.change(input, { target: { value: "London" } });

  expect(input).toHaveValue("London");
});

//Test: the function of subit form
test("calls fetchWeatherData when submitting form", () => {
  const mockFetchWeatherData = jest.fn();
  render(
    <WeatherPanel
      fetchWeatherData={mockFetchWeatherData}
      weatherData={null}
      error=""
    />
  );

  const input = screen.getByPlaceholderText("Search Location...");
  fireEvent.change(input, { target: { value: "London" } });
  fireEvent.submit(screen.getByTestId("search-form"));
  expect(mockFetchWeatherData).toHaveBeenCalledWith("London");
});

//Test: display weather detail
test("displays weather details when weatherData is available", () => {
  const mockWeatherData: WeatherData = {
    location: {
      name: "Test City",
      localtime: "2025-03-03 12:00",
    },
    current: {
      cloud: 50,
      humidity: 80,
      wind_kph: 10,
      temp_c: 25,
      condition: { text: "Cloudy", icon: "", code: 1003 },
      is_day: 1,
    },
  };
  render(
    <WeatherPanel
      fetchWeatherData={jest.fn()}
      weatherData={mockWeatherData}
      error=""
    />
  );

  expect(screen.getByText("Cloudy")).toBeInTheDocument();
  expect(screen.getByText("50%")).toBeInTheDocument();
  expect(screen.getByText("Humidity")).toBeInTheDocument();
  expect(screen.getByText("80%")).toBeInTheDocument();
  expect(screen.getByText("Wind")).toBeInTheDocument();
  expect(screen.getByText("10 km/h")).toBeInTheDocument();
});
