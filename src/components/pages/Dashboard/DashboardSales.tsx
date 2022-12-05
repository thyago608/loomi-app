import { Box, Flex, Select, Stack } from "@chakra-ui/react";
import { Carrousel } from "components/Carousel";
import { Graph } from "components/Graph";
import { useSellsMonth } from "hooks/useSellsMonth";
import {
  graphForMonthOptions,
  graphForMonthSeries,
  graphRealProfitOptions,
  graphRealProfitSeries,
} from "utils/graphs";

interface DashboardSalesProps {
  isDesktop: boolean;
}

export function DashboardSales({ isDesktop }: DashboardSalesProps) {
  const queryResults = useSellsMonth();
  const isLoading = queryResults.some((query) => query.isLoading);

  const [sellsPerMonthQuery, ordersPerMonthQuery] = queryResults;
  const [series] = graphForMonthSeries;

  if (isLoading) {
    return <p>loading...</p>;
  }

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

  return (
    <Flex w="100%" flex="none" gap="30px" justifyItems="center">
      <Carrousel arrows={isDesktop ? false : true}>
        <Box p={4} pb={0} bg="#FFF" borderRadius="lg" position="relative">
          <Stack
            spacing={3}
            w="140px"
            h="80px"
            position="absolute"
            top="12px"
            right="12px"
            zIndex={1}>
            <Select variant="filled" placeholder="Ano" color="#afa9a9">
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </Select>
          </Stack>
          <Graph
            type="bar"
            width={400}
            height={250}
            options={graphForMonthOptions}
            series={sellsPerMonthSeries}
          />
        </Box>
        <Box p={4} pb={0} bg="#FFF" borderRadius="lg">
          <Graph
            type="bar"
            width={400}
            height={250}
            options={graphRealProfitOptions}
            series={ordersPerMonthSeries}
          />
        </Box>
      </Carrousel>
    </Flex>
  );
}
