import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import App from "./App";

import { changeColorText } from "./App";

test("button has initial color and text and then changes text and color on clicking", () => {
  const { container } = render(<App />);

  const testButton = screen.getByRole("button", { name: "Change to blue" });
  expect(testButton).toHaveStyle({ backgroundColor: "red" });

  // doing the test all at once.
  fireEvent.click(testButton);

  expect(testButton).toHaveTextContent("Change to red");
  expect(testButton).toHaveStyle({ backgroundColor: "blue" });
});

test("initial condition of button and checkbox", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole("checkbox", { name: "Disable Button" });
  expect(checkBox).not.toBeChecked();
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
});

test("initial condition and disabled state and color change", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable Button" });
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("second condition and disabled state and color change", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable Button" });
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

// same thing different tests
describe("a test for changing colorText", () => {
  test("testing the function", () => {
    expect(changeColorText("red")).toBe("red");
  });
});
