import { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Eye, EyeSlash } from "phosphor-react";
import { Input } from "components/Input";

export function FormLogin() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <VStack as="form" gap="30px">
      <FormControl maxW={400}>
        <FormLabel px="4">E-mail</FormLabel>
        <Input />
      </FormControl>
      <FormControl maxW={400}>
        <FormLabel px="4">Senha</FormLabel>
        <InputGroup>
          <Input type={show ? "text" : "password"} />
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
