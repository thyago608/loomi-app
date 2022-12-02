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
import { Carrousel } from "components/Dashboard/Carousel";
import { MagnifyingGlass } from "phosphor-react";
import { GraphForMonth } from "components/Dashboard/Graphs/GraphForMonth";
import { GraphRealProfit } from "components/Dashboard/Graphs/GraphRealProfit";
import { GraphTransactionsPerCustomer } from "components/Dashboard/Graphs/GraphTransactionsPerCustomer";
import { GraphGender } from "components/Dashboard/Graphs/GraphGender";
import { GraphForAge } from "components/Dashboard/Graphs/GraphForAge";
import { ProductsTable } from "components/Dashboard/ProductsTable";

export default function Dashboard() {
  const [isLargerThan1440] = useMediaQuery(
    "(min-width: 1440px)"
  );

  return (
    <Box
      as="main"
      maxWidth={1600}
      mx="auto"
      my={20}
      pl="200px">
      <Head>
        <title>Loomi | Dashboard</title>
      </Head>
      <VStack gap={8} as="section" align="flex-start">
        <Box as="header" pl={8}>
          <Heading color="#4E5D66" fontSize="2xl">
            Início
          </Heading>
        </Box>
        {isLargerThan1440 ? (
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
          gap="10px"
          justifyItems="center"
          overflowX="auto">
          <GraphForMonth />
          <GraphRealProfit />
          <GraphRealProfit />
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
        {isLargerThan1440 ? (
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
            <GraphForAge />
            <GraphGender />
            <GraphTransactionsPerCustomer />
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
