import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Login Page", () => {
  it("Should have heading text", () => {
    render(<Home />);
    const mytext = screen.getByText("Welcome to my app");
    expect(mytext).toBeInTheDocument();
  });
});
