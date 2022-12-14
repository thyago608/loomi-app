import { useQueries } from "@tanstack/react-query";
import { ITicket } from "types/Ticket";
import { api } from "services/api";
import { convertValueToReal } from "utils/convertValueToReal";
import { ICard } from "types/Card";

type TiketType = "month" | "day";

type DemandsMonth = "orders" | "sells";

interface Alert {
  type: string;
  value: number;
  since: string;
}

async function fetchTicketInformation(type: TiketType): Promise<ITicket> {
  const response = await api.get<ITicket>(`/avg-ticket-${type}`);

  return response.data;
}

async function fetchAlertInformation(): Promise<Alert[]> {
  const response = await api.get("/alerts");

  return response.data;
}

async function fetchDemandsMonth(type: DemandsMonth): Promise<ITicket> {
  const response = await api.get(`/${type}-month`);

  return response.data;
}

export function useCardData() {
  const queryResults = useQueries({
    queries: [
      {
        queryKey: ["ticket.day"],
        queryFn: () => fetchTicketInformation("day"),
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
      {
        queryKey: ["ticket.month"],
        queryFn: () => fetchTicketInformation("month"),
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
      {
        queryKey: ["alerts"],
        queryFn: fetchAlertInformation,
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
      {
        queryKey: ["orders.month"],
        queryFn: () => fetchDemandsMonth("orders"),
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
      {
        queryKey: ["sells.month"],
        queryFn: () => fetchDemandsMonth("sells"),
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
    ],
  });
  let cards: ICard[] = [];

  const isLoading = queryResults.some((query) => query.isLoading);
  const isError = queryResults.some((query) => query.isError);

  const [
    ticketDayQuery,
    ticketMonthQuery,
    alertsQuery,
    ordersMonthQuery,
    sellsMonthQuery,
  ] = queryResults;

  cards = [
    {
      variant: "primary",
      type: "money",
      title: "Ticket m??dio ??ltimas 24h",
      subtitleAmount: Number(ticketDayQuery.data?.growth),
      bodyLabel: "em rela????o a ontem",
      footerLabel: "",
      footerAmount: convertValueToReal(Number(ticketDayQuery.data?.value)),
    },
    {
      variant: "primary",
      type: "money",
      title: "Ticket m??dio mensal",
      subtitleAmount: Number(ticketMonthQuery.data?.growth),
      bodyLabel: "em rela????o a julho",
      footerLabel: "",
      footerAmount: convertValueToReal(Number(ticketMonthQuery.data?.value)),
    },
    {
      variant: "secondary",
      type: "others",
      title: String(alertsQuery.data?.[0].type),
      subtitleAmount: 5,
      footerLabel: "produtos",
      footerAmount: String(alertsQuery.data?.[0].value),
    },
    {
      variant: "secondary",
      type: "others",
      title: String(alertsQuery.data?.[1].type),
      subtitleAmount: 5,
      footerLabel: "produtos",
      footerAmount: String(alertsQuery.data?.[1].value),
    },
    {
      variant: "primary",
      type: "others",
      title: "Pedidos realizados no m??s",
      subtitleAmount: Number(ordersMonthQuery.data?.growth),
      bodyLabel: "em rela????o a julho",
      footerLabel: "pedidos",
      footerAmount: String(ordersMonthQuery.data?.value),
    },
    {
      variant: "primary",
      type: "others",
      title: "Pedidos vendidos no m??s",
      subtitleAmount: Number(sellsMonthQuery.data?.growth),
      bodyLabel: "em rela????o a julho",
      footerLabel: "produtos",
      footerAmount: String(sellsMonthQuery.data?.value),
    },
  ];

  return {
    isError,
    isLoading,
    cards,
  };
}
