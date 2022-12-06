import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ICard } from "types/Card";
import { Card } from ".";

const cardPrimaryMoneyMock: ICard = {
  variant: "primary",
  type: "money",
  title: "Ticket médio últimas 24h",
  subtitleAmount: 15,
  footerLabel: "",
  footerAmount: "R$ 9.992,00",
};

const cardPrimaryOthersMock: ICard = {
  variant: "primary",
  type: "others",
  title: "Pedidos realizados no mês",
  subtitleAmount: 15,
  footerLabel: "pedidos",
  footerAmount: "10",
};

const cardSecondaryMock: ICard = {
  variant: "secondary",
  type: "others",
  title: "Produtos em manutenção",
  subtitleAmount: 5,
  footerLabel: "8",
  footerAmount: "produtos",
};

describe("Component Card", () => {
  it("should render correctly primary card of money", () => {
    render(<Card {...cardPrimaryMoneyMock} />);

    const title = screen.getByRole("heading", {
      name: /ticket médio últimas 24h/i,
    });

    const subtitle = screen.getByText(/15 %/i);
    const footer = screen.getByText(/r\$ 9\.992,00/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it("should render correctly primary card of others", () => {
    render(<Card {...cardPrimaryOthersMock} />);

    const title = screen.getByRole("heading", {
      name: /pedidos realizados no mês/i,
    });

    const subtitle = screen.getByText(/15 %/i);
    const footer = screen.getByText(/10/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it("should render correctly card secondary", () => {
    render(<Card {...cardSecondaryMock} />);

    const title = screen.getByRole("heading", {
      name: /produtos em manutenção/i,
    });

    const subtitle = screen.getByText(/há 5 dias/i);
    const footer = screen.getByText(/8/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
