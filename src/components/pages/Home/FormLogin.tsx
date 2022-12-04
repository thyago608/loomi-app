import { useState } from "react";
import {
  VStack,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Input } from "components/InputBase";
import { useForm } from "react-hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import { useAuth } from "hooks/useAuth";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userValidationSchema = zod.object({
  email: zod
    .string()
    .email("Por favor, insira um email válido"),
  password: zod.string(),
});

type UserFormData = zod.infer<typeof userValidationSchema>;

export function FormLogin() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { signIn } = useAuth();

  const userLoginForm = useForm<UserFormData>({
    resolver: zodResolver(userValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, register, watch, formState } =
    userLoginForm;
  const password = watch("password");
  const isSubmitDisabled = !password;

  async function handleSignIn(data: UserFormData) {
    const { email, password } = data;

    try {
      await signIn({
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <VStack
      as="form"
      gap="30px"
      onSubmit={handleSubmit(handleSignIn)}>
      <InputGroup maxW={400}>
        <Input
          {...register("email")}
          label="Email"
          error={formState.errors}
        />
      </InputGroup>
      <InputGroup maxW={400}>
        <Input
          type={show ? "text" : "password"}
          label="Senha"
          {...register("password")}
          error={formState.errors}
        />
        <InputRightElement width="3.5rem" top="35px">
          <Button
            size="sm"
            onClick={handleClick}
            disabled={isSubmitDisabled}>
            {show ? (
              <Eye size={25} color="#4E5D66" />
            ) : (
              <EyeSlash size={25} color="#4E5D66" />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button
        type="submit"
        fontFamily="Ubuntu"
        fontSize="xl"
        bg="#5A4CA7"
        color="#FFF"
        fontWeight="normal"
        h="35px"
        disabled={isSubmitDisabled}
        _hover={{
          bg: "#5A4CA7",
        }}>
        Entrar
      </Button>
    </VStack>
  );
}
