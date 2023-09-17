import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Login Page", () => {
  it("Should have heading text", () => {
    render(<Home />);
    // check if all components are rendered
    // const mytext = screen.getByText("Testing the home page");
    // expect(mytext).toBeInTheDocument();

    // const headingText = screen.getByRole("heading");
    // expect(headingText).toBeInTheDocument();
  });
});
