import { screen, render, logRoles, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm.jsx";
import userEvent from "@testing-library/user-event";

test("Initial test", () => {
  render(<SummaryForm />);

  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
  const Button = screen.getByRole("button", {
    name: /submit/i,
  });
  expect(Button).toBeDisabled();
});

test("Changes made", async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();
  const checkBox = screen.getByRole("checkbox");

  const Button = screen.getByRole("button", {
    name: /submit/i,
  });
  await user.click(checkBox);
  expect(Button).toBeEnabled();
  await user.click(checkBox);

  expect(Button).toBeDisabled();
});

test("popover doesnot exist", () => {
  render(<SummaryForm />);
  const noPopover = screen.queryByText(/we won't be delivering/i);
  expect(noPopover).not.toBeInTheDocument();
});

test("popover on hover", async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();
  const termsText = screen.getByText(/terms and conditions/i);
  await user.hover(termsText);
  const noPopover = screen.getByText(/we won't be/i);
  expect(noPopover).toBeInTheDocument();
  await user.unhover(termsText);
  expect(noPopover).not.toBeInTheDocument();
});
