import Head from "next/head";
import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  useMediaQuery,
  VStack,
  Stack,
  Select,
  Divider,
  Input as ChakraInput,
} from "@chakra-ui/react";
import { Input } from "components/Input";
import { Plus } from "phosphor-react";

export default function AddProduct() {
  const [isLargerThan1920] = useMediaQuery(
    "(min-width: 1920px)"
  );

  const [isLargerThan1440] = useMediaQuery(
    "(min-width: 1440px)"
  );

  return (
    <Box
      as="main"
      maxWidth={isLargerThan1920 ? 1620 : 1350}
      my={{ base: "120px", "2xl": "40px" }}
      ml={{ base: 0, "2xl": "110px" }}
      px={4}>
      <Head>
        <title>Loomi | Dashboard</title>
      </Head>
      <VStack as="section" align="flex-start" gap={10}>
        <Box as="header" mb={8}>
          <Heading fontSize="24px" color="#4E5D66">
            Adicionar produto
          </Heading>
        </Box>
        <Box as="form" w="full">
          <Box bg="#FFF" w="full" p={10} borderRadius="2xl">
            <Flex
              w="100%"
              justify="space-between"
              flexDirection={{
                base: "column",
                lg: "row",
              }}
              flexWrap="wrap"
              gap={10}>
              <VStack align="flex-start" gap={5}>
                <Heading
                  fontSize="20px"
                  mb={5}
                  color="#4E5D66">
                  Detalhes
                </Heading>
                <Input
                  h={10}
                  maxW={350}
                  name="name"
                  label="Name"
                />
                <Input
                  h={10}
                  maxW={350}
                  name="id"
                  label="ID"
                />
                <Input
                  h={10}
                  maxW={350}
                  name="cod"
                  label="Código"
                />
                <Input
                  h={10}
                  maxW={350}
                  name="seller"
                  label="Seller"
                />
                <Input
                  h={10}
                  maxW={350}
                  name="deadline"
                  label="Prazo de entrega"
                />
              </VStack>
              <VStack
                align="flex-start"
                gap={5}
                w="100%"
                maxW={300}>
                <Heading
                  fontSize="20px"
                  mb={5}
                  color="#4E5D66">
                  Categorias
                </Heading>
                <Stack spacing={3} w="100%">
                  <Select
                    variant="filled"
                    placeholder="Selecionar categorias"
                    color="#afa9a9">
                    <option value="option1">
                      Option 1
                    </option>
                    <option value="option2">
                      Option 2
                    </option>
                    <option value="option3">
                      Option 3
                    </option>
                  </Select>
                </Stack>
              </VStack>
              <VStack
                align="flex-start"
                gap={5}
                w="100%"
                maxW={300}>
                <Heading
                  fontSize="20px"
                  mb={5}
                  color="#4E5D66">
                  Tags
                </Heading>
                <Select
                  variant="filled"
                  placeholder="Selecionar tags"
                  color="#afa9a9">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </VStack>
            </Flex>

            <VStack align="flex-start" gap={5} mt="65px">
              <Heading
                fontSize="20px"
                mb={5}
                color="#4E5D66">
                Especifações
              </Heading>
              <Input
                maxW={{ base: "80%", "2xl": "90%" }}
                h="40px"
                name="subtitle"
                label="Subtítulo"
              />
              <Input
                name="information"
                label="Informações"
                maxW={{ base: "80%", "2xl": "90%" }}
                h="84px"
              />
              <Input
                name="clear"
                label="Limpeza e cuidados"
                maxW={{ base: "80%", "2xl": "90%" }}
                h="84px"
              />
            </VStack>
          </Box>

          <Box bg="#FFF" w="full" p={10} borderRadius="2xl">
            <Flex justify="space-between">
              <Heading
                fontSize="20px"
                mb={5}
                color="#4E5D66">
                Itens
              </Heading>
              <Button
                leftIcon={<Plus size={15} weight="bold" />}
                bg="transparent"
                _hover={{
                  bg: "transparent",
                }}>
                Adicionar
              </Button>
            </Flex>
            <Flex mt={10} align="center" gap={4}>
              <Text
                flex="none"
                fontSize="md"
                color="#4E5D66">
                Item 01
              </Text>
              <Divider borderColor="#c4c4c4" />
            </Flex>
            <Flex align="center" gap="80px" flexWrap="wrap">
              <VStack mt={8} align="flex-start" gap={5}>
                <Box w="full" maxW="400px">
                  <Input
                    label="Código"
                    height={10}
                    ml={{ base: 0, md: 6 }}
                  />
                </Box>
                <Flex
                  w="full"
                  maxW="400px"
                  gap={{ base: 4, md: "60px" }}
                  justify="space-between"
                  flexDirection={{
                    base: "column",
                    md: "row",
                  }}>
                  <Text
                    as="label"
                    fontSize="md"
                    color="#4E5D66">
                    Cor:
                  </Text>
                  <Stack spacing={3} w="full">
                    <Select
                      variant="filled"
                      placeholder="Selecionar categorias"
                      color="#afa9a9">
                      <option value="option1">
                        Option 1
                      </option>
                      <option value="option2">
                        Option 2
                      </option>
                      <option value="option3">
                        Option 3
                      </option>
                    </Select>
                  </Stack>
                </Flex>
                <Flex
                  align={{
                    base: "flex-start",
                    md: "center",
                  }}
                  flexDirection={{
                    base: "column",
                    md: "row",
                  }}
                  gap={4}>
                  <Text
                    as="label"
                    fontSize="md"
                    color="#4E5D66">
                    Tamanho:
                  </Text>
                  <Input
                    maxW="125px"
                    height={10}
                    label="m x"
                    labelPosition="right"
                  />
                  <Input
                    maxW="125px"
                    height={10}
                    label="m x"
                    labelPosition="right"
                  />
                  <Input
                    maxW="125px"
                    height={10}
                    label="m"
                    labelPosition="right"
                  />
                </Flex>
              </VStack>
              <Flex gap={6} mt="-30px">
                <Text>Images:</Text>
                <Flex
                  w={100}
                  h={100}
                  bg="#C0D7E5"
                  position="relative"
                  align="center"
                  justify="center"
                  _after={{
                    content: "'+'",
                    fontSize: "4xl",
                    position: "absolute",
                    pointerEvents: "none",
                  }}>
                  <ChakraInput
                    type="file"
                    w="full"
                    h="full"
                    opacity={0}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Flex w="full" justify="flex-end" gap={4}>
          <Button
            bg="#c2c8cc"
            maxW="120px"
            h={10}
            fontWeight="normal">
            Cancelar
          </Button>
          <Button
            bg="#C0D7E5"
            maxW="120px"
            h={10}
            fontWeight="normal">
            Criar
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}
