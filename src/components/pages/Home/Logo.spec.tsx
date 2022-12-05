import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Logo } from "./Logo";

describe("Component Logo", () => {
  it("should render correctly", () => {
    render(<Logo />);

    const logo = screen.getByRole("img", {
      name: /loomi/i,
    });

    const text = screen.getByText("Entrar na plataforma");

    expect(logo).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
