import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "components/Header";
import { useRouter } from "next/router";
import { theme } from "styles/theme";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const { asPath } = useRouter();

  return (
    <ChakraProvider theme={theme}>
      {asPath !== "/" && <Header />}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
