import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#333333",
        backgroundImage: "url('/background.svg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
    },
  },
  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  },
});
