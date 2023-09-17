import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import "@testing-library/jest-dom";
import Home from "@/app/page";
import Login from "@/app/components/login";
import userEvent from "@testing-library/user-event";

describe("Intial load of the Login Page", () => {
  beforeEach(() => {
    render(<Login />);
  });
  it("Should have a email textbox", () => {
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
  });
  it("Should have a password textbox", () => {
    const emailInput = screen.getByTestId("password-input");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "password");
  });
  it("Should have a login button", () => {
    const loginButton = screen.getByTestId("login-input");
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveTextContent(/Login/i);
    expect(loginButton).toBeEnabled();
  });
});

describe("Verification of the error message", () => {
  beforeEach(() => {
    render(<Login />);
  });
  it("Should display valid error message", async () => {
    const loginButton = screen.getByTestId("login-input");
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    await userEvent.click(loginButton);

    expect(screen.getByTestId("email-errormessage")).toBeInTheDocument();
    expect(screen.getByTestId("password-errormessage")).toBeInTheDocument();
  });

  it("Should not display error message on valid values", async () => {
    await userEvent.type(screen.getByTestId("email-input"), "test@gmail.com");
    await userEvent.type(screen.getByTestId("password-input"), "test@123");

    const loginButton = screen.getByTestId("login-input");
    await userEvent.click(loginButton);

    expect(screen.queryByTestId("email-errormessage")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("password-errormessage")
    ).not.toBeInTheDocument();
  });
});
