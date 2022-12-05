import { useQueries } from "@tanstack/react-query";
import { api } from "services/api";
import { ISellsMonth } from "types/SellsMonth";
import { graphForMonthSeries, graphRealProfitSeries } from "utils/graphs";

async function fetchSellsPerMonth(): Promise<ISellsMonth[]> {
  const response = await api.get("/sells-per-month");
  return response.data;
}

async function fetchOrdersPerMonth(): Promise<ISellsMonth[]> {
  const response = await api.get("/orders-per-month");
  return response.data;
}

export function useSellsMonth() {
  const queryResults = useQueries({
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

  const isLoading = queryResults.some((query) => query.isLoading);
  const [sellsPerMonthQuery, ordersPerMonthQuery] = queryResults;
  const [series] = graphForMonthSeries;

  const sellsPerMonthSeries = sellsPerMonthQuery.data
    ? [
        {
          data: series.data.map((item, index) => ({
            ...item,
            y: sellsPerMonthQuery?.data[index]?.value,
          })),
        },
      ]
    : [];

  const ordersPerMonthSeries = ordersPerMonthQuery.data
    ? graphRealProfitSeries.map((item, index) => {
        if (index === 0) {
          return {
            ...item,
            data: ordersPerMonthQuery.data.map((item) => item.value * 2),
          };
        }

        return {
          ...item,
          data: ordersPerMonthQuery.data.map((item) => item.value),
        };
      })
    : [];

  return {
    isLoading,
    sellsPerMonthSeries,
    ordersPerMonthSeries,
  };
}