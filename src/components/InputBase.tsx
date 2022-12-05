import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldErrorsImpl } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldErrorsImpl;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = {}, ...rest },
  ref
) => {
  const isInvalid = !!error[name];

  return (
    <FormControl
      position="relative"
      isInvalid={isInvalid}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ base: "space-between" }}
      alignItems={{ base: "flex-start", md: "center" }}
      gap={4}>
      {!!label && (
        <FormLabel htmlFor={name} fontSize="md" color="#4E5D66">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="#5A4CA7"
        bg="#F3F5F6"
        borderColor="#F3F5F6"
        p="4"
        h="45px"
        fontSize="xl"
        ref={ref}
        maxW={300}
        {...rest}
      />
      {isInvalid && <FormErrorMessage position="absolute" />}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
