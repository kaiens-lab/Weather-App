import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CityInfo from "./CityInfo";

const mockProps = {
  localtime: "2025-01-01 12:00",
  cityName: "New York",
  conditionText: "Sunny",
  conditionIcon: "https://example.com/icon.png",
  isDay: true,
  day: "Sunday",
};

test("renders CityInfo component", () => {
  render(<CityInfo {...mockProps} />);
  // screen.debug();

  expect(screen.getByText("New York")).toBeInTheDocument();
  expect(screen.getByText("Wednesday 1, 1 2025")).toBeInTheDocument();
  expect(screen.getByText("Sunny")).toBeInTheDocument();
  expect(screen.getByTestId("icon-component")).toBeInTheDocument();
});
