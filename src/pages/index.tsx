import Head from "next/head";
import { Flex, VStack, Box } from "@chakra-ui/react";
import { Logo } from "./Home/components/Logo";
import { FormLogin } from "./Home/components/FormLogin";

export default function Home() {
  return (
    <Box
      backgroundImage="url('/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="100vh">
      <Head>
        <title>Loomi | Home</title>
      </Head>
      <Flex
        as="main"
        w={894}
        h="100vh"
        mx="auto"
        background="#FFF"
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
