import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from ".";

jest.mock("hooks/useAuth", () => ({
  useAuth: jest.fn().mockReturnValue({
    isAuthenticated: true,
    signIn: jest.fn(),
    user: {
      avatar:
        "https://mir-s3-cdn-cf.behance.net/projects/404/d4ba0348411353.Y3JvcCw3MDYsNTUyLDI3LDA.png",
      name: "Eduardo",
      username: "Edu",
    },
  }),
}));

describe("Component Header", () => {
  it("should render correctly", () => {
    render(<Header />);

    const logo = screen.getByRole("link");
    const username = screen.getByText(/eduardo/i);
    const avatar = screen.getByRole("img", {
      name: /eduardo/i,
    });

    expect(logo).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });

  it("should be possible navigate home page", () => {
    render(<Header />);

    const logo = screen.getByRole("link");
    expect(logo).toHaveAttribute("href", "/");
  });
});
