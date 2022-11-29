import { CardProps } from "components/Card";

export const cards: CardProps[] = [
  {
    heading: {
      title: "Ticket médio últimas 24h",
      subtitle: 15,
      type: "porcentage",
    },
    body: {
      content: "em relação à ontem",
      type: "base",
    },
    footer: {
      type: "money",
      amount: 9.292,
    },
  },

  {
    heading: {
      title: "Ticket médio mensal",
      subtitle: 15,
      type: "porcentage",
    },
    body: {
      content: "em relação à julho",
      type: "base",
    },
    footer: {
      type: "money",
      amount: 129.292,
    },
  },
  {
    heading: {
      title: "Produtos em manutenção",
      subtitle: 5,
      type: "day",
    },
    footer: {
      type: "others",
      amount: 8,
      label: "produtos",
    },
  },
  {
    heading: {
      title: "Acabando o estoque",
      subtitle: 5,
      type: "day",
    },
    body: {
      content: "repor o quanto antes",
      type: "danger",
    },
    footer: {
      type: "others",
      amount: 10,
      label: "produtos",
    },
  },
  {
    heading: {
      title: "Pedidos realizados no mês",
      subtitle: 15,
      type: "porcentage",
    },
    body: {
      content: "em relação à julho",
      type: "base",
    },
    footer: {
      type: "others",
      amount: 10,
      label: "pedidos",
    },
  },
  {
    heading: {
      title: "Produtos vendidos no mês",
      subtitle: 15,
      type: "porcentage",
    },
    body: {
      content: "em relação à julho",
      type: "base",
    },
    footer: {
      type: "others",
      amount: 23,
      label: "produtos",
    },
  },
];
