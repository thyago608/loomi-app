import { Flex } from "@chakra-ui/react";
import { Carrousel } from "components/Carousel";
import { Graph } from "components/Graph";
import {
  graphForMonthOptions,
  graphForMonthSeries,
  graphRealProfitOptions,
  graphRealProfitSeries,
} from "utils/graphs";

interface DashboardSalesProps {
  isDesktop: boolean;
}

export function DashboardSales({
  isDesktop,
}: DashboardSalesProps) {
  return (
    <Flex
      w="100%"
      flex="none"
      gap="30px"
      justifyItems="center">
      <Carrousel arrows={isDesktop ? false : true}>
        <Graph
          type="bar"
          width={400}
          height={250}
          options={graphForMonthOptions}
          series={graphForMonthSeries}
        />
        <Graph
          type="bar"
          width={350}
          height={250}
          options={graphRealProfitOptions}
          series={graphRealProfitSeries}
        />
        <Graph
          type="bar"
          width={350}
          height={250}
          options={graphRealProfitOptions}
          series={graphRealProfitSeries}
        />
      </Carrousel>
    </Flex>
  );
}
