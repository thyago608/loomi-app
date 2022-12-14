import { useQuery } from "@tanstack/react-query";
import { ApexOptions } from "apexcharts";
import { api } from "services/api";
import { ITransaction } from "types/Transaction";
import { chartForAgeOptions, chartGenderOptions } from "utils/Charts";

interface SessionPerSex {
  male: number;
  female: number;
}

interface ConversionResume {
  "transactions-per-age": ITransaction[];
  "sessions-per-sex": SessionPerSex;
  "transactions-per-client-type": ITransaction[];
}

async function fetchUseResume(): Promise<ConversionResume> {
  const response = await api.get("/users-resume");

  return response.data;
}

export function useUsersResume() {
  const { data, isLoading } = useQuery(["users.resume"], fetchUseResume, {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const sessionsPerSex = data?.["sessions-per-sex"];
  const transactionPerAge = data?.["transactions-per-age"];
  const transactionsPerClientType = data?.["transactions-per-client-type"];

  const transactionsPerAgeCategories = transactionPerAge?.map(
    (item: ITransaction) => item.category
  ) ?? [""];

  const transactionsPerAgeOptions: ApexOptions = {
    ...chartForAgeOptions,
    xaxis: {
      categories: transactionsPerAgeCategories,
    },
  };

  const transactionsPerAgeSeries = [
    {
      data: transactionPerAge?.map((item: ITransaction) => item.value) ?? [0],
    },
  ];

  const genderSessionsSeries =
    chartGenderOptions?.legend?.customLegendItems?.map((item) => {
      if (item === "Masculino") {
        return Number(sessionsPerSex?.male);
      }

      return Number(sessionsPerSex?.female);
    }) ?? [0];

  const transactionsPerClientSeries = transactionsPerClientType
    ?.map((item) => item.value)
    .reverse() ?? [0];

  return {
    transactionsPerAgeOptions,
    transactionsPerAgeSeries,
    genderSessionsSeries,
    transactionsPerClientSeries,
    isLoading,
  };
}
