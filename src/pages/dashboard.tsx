import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { ProductsTable } from "components/pages/Dashboard/ProductsTable";
import { InitialSection } from "components/pages/Dashboard/InitalSection";
import { DashboardSales } from "components/pages/Dashboard/DashboardSales";
import { ListsConversionsCards } from "components/pages/Dashboard/ListsConversionsCards";
import { UserProfile } from "components/pages/Dashboard/UserProfile";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

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
      <VStack
        mt={10}
        as="section"
        align="flex-start"
        gap={8}>
        <Box as="header">
          <Heading color="#5A4CA7" fontSize="2xl" pl={8}>
            Funil de conversão
          </Heading>
        </Box>
        <InitialSection isDesktop={isLargerThan1920} />
      </VStack>

      <VStack
        mt={10}
        as="section"
        align="flex-start"
        gap={8}>
        <Box as="header">
          <Heading color="#5A4CA7" fontSize="2xl" pl={8}>
            Dashboard de vendas
          </Heading>
        </Box>
        <DashboardSales isDesktop={isLargerThan1440} />
      </VStack>

      <VStack
        mt={10}
        as="section"
        align="flex-start"
        gap={8}>
        <Box as="header">
          <Heading color="#5A4CA7" fontSize="2xl" pl={8}>
            Funil de conversão
          </Heading>
        </Box>
        <ListsConversionsCards
          isDesktop={isLargerThan1920}
        />
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
          <UserProfile />
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

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const { "loomiapp.token": token } = parseCookies(ctx);

    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  };
