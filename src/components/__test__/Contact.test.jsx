import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it } from "@jest/globals";

describe("Contact Component Test Case", () => {
  it("Contact component renders correctly", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  it("Contact component renders button correctly", () => {
    render(<Contact />);

    //const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });
  it("Contact component renders input correctly", () => {
    render(<Contact />);

    //const button = screen.getByRole("button");
    const input = screen.getByPlaceholderText("Enter your name");

    expect(input).toBeInTheDocument();
  });

  // it and test are one and the same thing
  it("should load 2 input boxes", () => {
    render(<Contact />);
    const inputboxes = screen.getAllByRole("textbox");

    expect(inputboxes.length).not.toBe(2);
  });
});
