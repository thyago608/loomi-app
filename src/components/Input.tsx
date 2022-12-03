import {
  Flex,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Text,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  label?: string;
  labelPosition?: "left" | "right";
}

export function Input({
  label = "",
  labelPosition = "left",
  ...rest
}: InputProps) {
  return (
    <Flex
      w="full"
      justify="space-between"
      align={{ base: "flex-start", md: "center" }}
      flexDirection={{
        base: "column",
        md: "row",
      }}
      gap={4}>
      {label && (
        <Text
          as="label"
          fontSize="md"
          flex="none"
          color="#4E5D66"
          htmlFor={rest.name}
          order={labelPosition === "left" ? "0" : "1"}>
          {label}
        </Text>
      )}
      <ChakraInput
        id={rest.name}
        bg="#F3F5F6"
        borderColor="#F3F5F6"
        p="4"
        h="45px"
        fontSize="xl"
        {...rest}
      />
    </Flex>
  );
}
