import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { Card } from "components/Card";
import { cards } from "mocks/card";
import { Carrousel } from "components/Carousel";
import { MagnifyingGlass } from "phosphor-react";
import { Graph } from "components/Graph";
import {
  graphRealProfitOptions,
  graphRealProfitSeries,
  GraphTransactionsPerCustomerOptions,
  GraphTransactionsPerCustomerSeries,
  graphForAgeOptions,
  graphForAgeSeries,
  graphForMonthOptions,
  graphForMonthSeries,
  graphGenderOptions,
  graphGenderSeries,
} from "utils/graphs";
import { ProductsTable } from "components/pages/Dashboard/ProductsTable";

export default function Dashboard() {
  const [isLargerThan1920] = useMediaQuery(
    "(min-width: 1920px)"
  );

  const [isLargerThan1440] = useMediaQuery(
    "(min-width: 1440px)"
  );

  return (
    <Box
      as="main"
      maxWidth={isLargerThan1920 ? 1620 : 1350}
      my={{ base: "120px", "2xl": "90px" }}
      ml={{ base: 0, "2xl": "100px" }}
      px={4}>
      <Head>
        <title>Loomi | Dashboard</title>
      </Head>
      <VStack gap={8} as="section" align="flex-start">
        <Box as="header" pl={8}>
          <Heading color="#4E5D66" fontSize="2xl">
            Início
          </Heading>
        </Box>
        {isLargerThan1920 ? (
          <SimpleGrid
            w="100%"
            columns={6}
            spacingX="30px"
            spacingY="20px">
            {cards.map((card) => (
              <Card
                key={card.heading.title}
                heading={card.heading}
                body={card.body}
                footer={card.footer}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Carrousel>
            {cards.map((card) => (
              <Card
                key={card.heading.title}
                heading={card.heading}
                body={card.body}
                footer={card.footer}
              />
            ))}
          </Carrousel>
        )}
      </VStack>

      <VStack
        mt={10}
        gap={8}
        as="section"
        align="flex-start">
        <Box as="header">
          <Heading color="#5A4CA7" fontSize="2xl" pl={8}>
            Dashboard de vendas
          </Heading>
        </Box>
        <Flex
          w="100%"
          flex="none"
          gap="30px"
          justifyItems="center">
          <Carrousel
            arrows={isLargerThan1440 ? false : true}>
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
      </VStack>

      <VStack
        gap={8}
        as="section"
        align="flex-start"
        mt={10}>
        <Box as="header">
          <Heading color="#5A4CA7" fontSize="2xl" pl={8}>
            Funil de conversão
          </Heading>
        </Box>
        {isLargerThan1920 ? (
          <SimpleGrid
            w="100%"
            columns={6}
            spacingX="30px"
            spacingY="20px">
            {cards.map((card) => (
              <Card
                key={card.heading.title}
                heading={card.heading}
                body={card.body}
                footer={card.footer}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Carrousel>
            {cards.map((card) => (
              <Card
                key={card.heading.title}
                heading={card.heading}
                body={card.body}
                footer={card.footer}
              />
            ))}
          </Carrousel>
        )}
      </VStack>

      <VStack
        mt={10}
        gap={8}
        as="section"
        align="flex-start">
        <Box as="header">
          <Heading color="#5A4CA7" fontSize="2xl" pl={8}>
            Perfil de usuário
          </Heading>
        </Box>
        <Flex
          w="100%"
          flex="none"
          gap="10px"
          justifyItems="center"
          align="center">
          <Carrousel>
            <Graph
              options={graphForAgeOptions}
              series={graphForAgeSeries}
              type="bar"
              width={500}
              height={300}
            />
            <Graph
              options={graphGenderOptions}
              series={graphGenderSeries}
              type="donut"
              width={400}
              height={250}
            />

            <Graph
              options={GraphTransactionsPerCustomerOptions}
              series={GraphTransactionsPerCustomerSeries}
              type="donut"
              width={500}
              height={300}
            />
          </Carrousel>
        </Flex>
      </VStack>

      <VStack
        bg="#FFF"
        py="55px"
        px="40px"
        borderRadius="3xl"
        mt={95}
        gap={8}
        as="section"
        align="flex-start">
        <Flex
          as="header"
          width="100%"
          flexDirection={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}>
          <Heading fontSize="2xl" fontWeight="400">
            Listagem de produtos
          </Heading>
          <InputGroup
            size="md"
            maxW="300px"
            bg="#F3F5F6"
            borderColor="transparent"
            borderRadius="lg">
            <Input
              pr="4.5rem"
              placeholder="Pesquisar produtos"
            />
            <InputRightElement width="4.5rem">
              <Button
                bg="transparent"
                rounded="full"
                h="1.75rem"
                size="sm"
                leftIcon={
                  <MagnifyingGlass
                    size={20}
                    weight="bold"
                    color="#525252"
                  />
                }
                iconSpacing={0}
                title="Pesquisar produto"
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <ProductsTable />
      </VStack>
    </Box>
  );
}
