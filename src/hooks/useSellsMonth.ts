import { useQueries } from "@tanstack/react-query";
import { api } from "services/api";
import { ISellsMonth } from "types/SellsMonth";

async function fetchSellsPerMonth(): Promise<ISellsMonth[]> {
  const response = await api.get("/sells-per-month");
  return response.data;
}

async function fetchOrdersPerMonth(): Promise<ISellsMonth[]> {
  const response = await api.get("/orders-per-month");
  return response.data;
}

export function useSellsMonth() {
  return useQueries({
    queries: [
      {
        queryKey: ["sellsPerMonth"],
        queryFn: fetchSellsPerMonth,
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
      {
        queryKey: ["ordersPerMonth"],
        queryFn: fetchOrdersPerMonth,
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
    ],
  });
}
