import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Temperature from "./Temp";

test("renders temperature with correct value", () => {
  render(<Temperature temp={25} />);
  //   screen.debug();
  expect(screen.getByText("25°")).toBeInTheDocument();
});
