import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export function Logo() {
  return (
    <Box>
      <Image
        src="/loomi-logo.svg"
        width={200}
        height={200}
        alt="loomi"
      />
      <Text
        fontFamily="Nunito Sans"
        fontSize="2xl"
        mt="30px">
        Entrar na plataforma
      </Text>
    </Box>
  );
}
