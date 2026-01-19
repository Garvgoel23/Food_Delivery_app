import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
test("Contact component renders correctly", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
test("Contact component renders button correctly", () => {
  render(<Contact />);

  //const button = screen.getByRole("button");
  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});
test("Contact component renders button correctly", () => {
  render(<Contact />);

  //const button = screen.getByRole("button");
  const input = screen.getByPlaceholderText("Enter your name");

  expect(input).toBeInTheDocument();
});
