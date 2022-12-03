import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1440px",
  "3xl": "1920px",
};

export const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      body: {
        color: "#333333",
        backgroundImage: "url('/background.svg')",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backdropFilter: "brightness(0.96)",
      },
    },
  },
  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  },
});
