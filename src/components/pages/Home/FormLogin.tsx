import { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Eye, EyeSlash } from "phosphor-react";

export function FormLogin() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { register, handleSubmit } = useForm();

  function handleSignIn() {}

  return (
    <VStack
      as="form"
      gap="30px"
      onSubmit={handleSubmit(handleSignIn)}>
      <FormControl maxW={400}>
        <FormLabel px="4">E-mail</FormLabel>
        <Input {...register("email")} />
      </FormControl>
      <FormControl maxW={400}>
        <FormLabel px="4">Senha</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            {...register("password")}
          />
          <InputRightElement width="3.5rem">
            <Button size="sm" onClick={handleClick}>
              {show ? (
                <Eye size={25} color="#4E5D66" />
              ) : (
                <EyeSlash size={25} color="#4E5D66" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        type="submit"
        fontFamily="Ubuntu"
        fontSize="xl"
        bg="#5A4CA7"
        color="#FFF"
        fontWeight="normal"
        h="35px"
        _hover={{
          bg: "#3e1ef5",
        }}>
        Entrar
      </Button>
    </VStack>
  );
}
