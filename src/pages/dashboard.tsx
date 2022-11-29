import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import { Card } from "components/Card";
import { cards } from "mocks/card";

export default function Dashboard() {
  return (
    <Box as="main">
      <Head>
        <title>Loomi | Dashboard</title>
      </Head>
      <Flex gap="10">
        {cards.map((card) => (
          <Card
            key={card.heading.title}
            heading={card.heading}
            body={card.body}
            footer={card.footer}
          />
        ))}
      </Flex>
    </Box>
  );
}
