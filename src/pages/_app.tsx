import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";
import { useRouter } from "next/router";
import { AuthProvider } from "contexts/AuthContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "services/queryClient";
import { theme } from "styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          {asPath !== "/" && <Header />}
          {asPath !== "/" && <Sidebar />}
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
