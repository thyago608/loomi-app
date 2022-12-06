import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from ".";

describe("Component Input", () => {
  it("should render correctly with label", () => {
    render(<Input name="name" label="name" />);

    const label = screen.getByText(/name/i);
    const input = screen.getByRole("textbox", {
      name: /name/i,
    });

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("should render correctly with not label", async () => {
    render(<Input name="name" />);
    const label = screen.queryByText(/name/i);

    expect(label).not.toBeInTheDocument();
  });
});
