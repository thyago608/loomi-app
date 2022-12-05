import { Box, Flex, Select, Stack } from "@chakra-ui/react";
import { Carrousel } from "components/Carousel";
import { Graph } from "components/Graph";
import { useSellsMonth } from "hooks/useSellsMonth";
import { chartRealProfitOptions, chartForMonthOptions } from "utils/Charts";

interface DashboardSalesProps {
  isDesktop: boolean;
}

export function DashboardSales({ isDesktop }: DashboardSalesProps) {
  const { isLoading, ordersPerMonthSeries, sellsPerMonthSeries } =
    useSellsMonth();

  if (isLoading) {
    return <p>loading...</p>;
  }

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
            options={chartForMonthOptions}
            series={sellsPerMonthSeries}
          />
        </Box>
        <Box p={4} pb={0} bg="#FFF" borderRadius="lg">
          <Graph
            type="bar"
            width={400}
            height={250}
            options={chartRealProfitOptions}
            series={ordersPerMonthSeries}
          />
        </Box>
        <Box p={4} pb={0} bg="#FFF" borderRadius="lg">
          <Graph
            type="bar"
            width={400}
            height={250}
            options={chartRealProfitOptions}
            series={ordersPerMonthSeries}
          />
        </Box>
      </Carrousel>
    </Flex>
  );
}
