import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormLogin } from "./FormLogin";

describe("Component FormLogin", () => {
  it("should render correctly", () => {
    render(<FormLogin />);

    const form = screen.getByRole("form");
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    const passwordInput = screen.getByLabelText(/senha/i);
    const buttonSignIn = screen.getByRole("button", {
      name: "Entrar",
    });

    expect(form).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(buttonSignIn).toBeInTheDocument();
    expect(buttonSignIn).toBeVisible();
  });

  it("should be inputs empty", () => {
    render(<FormLogin />);

    const form = screen.getByRole("form");

    expect(form).toBeInTheDocument();
    expect(form).toHaveFormValues({
      email: "",
      password: "",
    });
  });
});
