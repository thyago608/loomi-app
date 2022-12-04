import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import {
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import { FieldErrorsImpl } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldErrorsImpl;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, error = {}, ...rest }, ref) => {
  const isInvalid = !!error[name];

  return (
    <FormControl isInvalid={isInvalid}>
      {!!label && (
        <FormLabel htmlFor={name} fontSize="md">
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
        {...rest}
      />
      {isInvalid && (
        <FormErrorMessage>
          <>{error[name]?.message}</>
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
