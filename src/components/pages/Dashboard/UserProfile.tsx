import { Flex } from "@chakra-ui/react";
import { Carrousel } from "components/Carousel";
import { Graph } from "components/Graph";
import { useUsersResume } from "hooks/useUsersResume";
import {
  graphGenderOptions,
  GraphTransactionsPerCustomerOptions,
  GraphTransactionsPerCustomerSeries,
} from "utils/graphs";

export function UserProfile() {
  const {
    transactionsPerAgeOptions,
    transactionsPerAgeSeries,
    genderSessionsSeries,
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
          options={graphGenderOptions}
          series={genderSessionsSeries}
          type="donut"
          width={400}
          height={250}
        />
      </Flex>

      <Flex bg="#FFF" h={315} align="center" px={2} borderRadius="lg">
        <Graph
          options={GraphTransactionsPerCustomerOptions}
          series={GraphTransactionsPerCustomerSeries}
          type="donut"
          width={400}
          height={250}
        />
      </Flex>
    </Carrousel>
  );
}
