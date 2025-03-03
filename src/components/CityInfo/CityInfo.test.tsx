import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CityInfo from "./CityInfo";

const mockProps = {
  localtime: "2025-01-01 12:00",
  cityName: "New York",
  conditionText: "Sunny",
  conditionIcon: "https://example.com/icon.png",
  conditionCode: 100,
  isDay: 1,
};

test("renders CityInfo component", () => {
  render(<CityInfo {...mockProps} />);
  // screen.debug();

  expect(screen.getByText("New York")).toBeInTheDocument();
  expect(screen.getByText("Wednesday 1, 1 2025")).toBeInTheDocument();
  expect(screen.getByTestId("icon-component")).toBeInTheDocument();
});
