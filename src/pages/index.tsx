import Head from "next/head";
import { Flex, VStack, Box } from "@chakra-ui/react";
import { Logo } from "components/Home/Logo";
import { FormLogin } from "components/Home/FormLogin";

export default function Home() {
  return (
    <Box h="100vh">
      <Head>
        <title>Loomi | Home</title>
      </Head>
      <Flex
        as="main"
        w={894}
        h="100vh"
        mx="auto"
        bg="#FFF"
        justify="center"
        align="center">
        <VStack as="section" gap="50px">
          <Logo />
          <FormLogin />
        </VStack>
      </Flex>
    </Box>
  );
}
