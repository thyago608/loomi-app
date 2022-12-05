import { Flex } from "@chakra-ui/react";
import { Carrousel } from "components/Carousel";
import { Graph } from "components/Graph";
import { useUsersResume } from "hooks/useUsersResume";
import {
  chartGenderOptions,
  ChartTransactionsPerCustomerOptions,
} from "utils/Charts";

export function UserProfile() {
  const {
    transactionsPerAgeOptions,
    transactionsPerAgeSeries,
    genderSessionsSeries,
    transactionsPerClientSeries,
  } = useUsersResume();

  return (
    <Carrousel>
      <Flex bg="#FFF" h={315} align="center" px={2} borderRadius="lg">
        <Graph
          options={transactionsPerAgeOptions}
          series={transactionsPerAgeSeries}
          type="bar"
          width={400}
          height={250}
        />
      </Flex>
      <Flex bg="#FFF" h={315} align="center" px={2} borderRadius="lg">
        <Graph
          options={chartGenderOptions}
          series={genderSessionsSeries}
          type="donut"
          width={400}
          height={250}
        />
      </Flex>

      <Flex bg="#FFF" h={315} align="center" px={2} borderRadius="lg">
        <Graph
          options={ChartTransactionsPerCustomerOptions}
          series={transactionsPerClientSeries}
          type="donut"
          width={400}
          height={250}
        />
      </Flex>
    </Carrousel>
  );
}
