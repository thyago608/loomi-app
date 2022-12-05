import { useQueries } from "@tanstack/react-query";
import { ITicket } from "types/Ticket";
import { api } from "services/api";

type TiketType = "month" | "day";

type DemandsMonth = "orders" | "sells";

interface Alert {
  type: string;
  value: number;
  since: string;
}

async function fetchTicketInformation(
  type: TiketType
): Promise<ITicket> {
  const response = await api.get<ITicket>(
    `/avg-ticket-${type}`
  );

  return response.data;
}

async function fetchAlertInformation(): Promise<Alert[]> {
  const response = await api.get("/alerts");

  return response.data;
}

async function fetchDemandsMonth(
  type: DemandsMonth
): Promise<ITicket> {
  const response = await api.get(`/${type}-month`);

  return response.data;
}

export function useCardData() {
  return useQueries({
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
}
