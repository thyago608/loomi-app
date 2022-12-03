import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

export function Input(props: ChakraInputProps) {
  return (
    <ChakraInput
      bg="#F3F5F6"
      borderColor="#F3F5F6"
      p="4"
      h="45px"
      fontSize="xl"
      {...props}
    />
  );
}
