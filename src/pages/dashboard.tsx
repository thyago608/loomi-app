import Head from "next/head";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Card } from "components/Card";
import { cards } from "mocks/card";
import { GraphForMonth } from "components/Dashboard/GraphForMonth";
import { GraphRealProfit } from "components/Dashboard/GraphRealProfit";
import { GraphTransactionsPerCustomer } from "components/Dashboard/GraphTransactionsPerCustomer";
import { GraphGender } from "components/Dashboard/GraphGender";
import { GraphForAge } from "components/Dashboard/GraphForAge";
import { ProductsTable } from "components/Dashboard/ProductsTable";

export default function Dashboard() {
  return (
    <Box
      as="main"
      backgroundImage="url('/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      pt="50px"
      px="100px"
      h="100vh">
      <Head>
        <title>Loomi | Dashboard</title>
      </Head>
      <VStack gap="10" as="section" align="flex-start">
        <Heading
          color="#4E5D66"
          fontFamily="Ubuntu"
          fontSize="2xl"
          ml="50px">
          Início
        </Heading>
        {/* <SimpleGrid
          w="100%"
          flex="none"
          columns={6}
          gap="10px"
          justifyItems="center"
          minChildWidth="220px">
          {cards.map((card) => (
            <Card
              key={card.heading.title}
              heading={card.heading}
              body={card.body}
              footer={card.footer}
            />
          ))}
        </SimpleGrid> */}
        {/* <GraphForMonth /> */}
        {/* <GraphRealProfit /> */}

        {/* <GraphTransactionsPerCustomer /> */}
        {/* <GraphGender /> */}
        {/* <GraphForAge /> */}
        <ProductsTable />
      </VStack>
    </Box>
  );
}
