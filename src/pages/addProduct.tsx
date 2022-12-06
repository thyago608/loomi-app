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
  Link,
  Input as ChakraInput,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Input } from "components/Input";
import { Plus } from "phosphor-react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useProducts } from "hooks/useProducts";
import { useRouter } from "next/router";

const itemsSchema = zod.object({
  code: zod.string(),
  color: zod.string(),
  size: zod.object({
    width: zod.string(),
    height: zod.string(),
  }),
});

const productValidationSchema = zod.object({
  code: zod.string().min(1, "Informe o código"),
  productId: zod.string().min(1, "Informe o ID do produto"),
  seller: zod.string().min(1, "Informe o seller"),
  deliveryDate: zod.string().min(1, "Informe o prazo de entrega"),
  specificationsSubtitle: zod.string().min(1, "Informe o subtítulo"),
  specificationsInfo: zod.string().min(1, "Forneça uma descrição"),
  specificationsCares: zod
    .string()
    .min(1, "Informe quais os cuidados para o produto"),
  categories: zod.string().min(1, "Informe o código do produto"),
  tags: zod.string().min(1, "Informe a tag do produto"),
  id: zod.string().min(1, "Informe o ID do produto"),
  items: itemsSchema,
  name: zod.string().min(1, "Informe o nome do produto"),
});

type ProductFormData = zod.infer<typeof productValidationSchema>;

export default function AddProduct() {
  const [isLargerThan1920] = useMediaQuery("(min-width: 1920px)");
  const { createNewProduct } = useProducts(1);
  const { push } = useRouter();

  const productCreateForm = useForm<ProductFormData>({
    resolver: zodResolver(productValidationSchema),
    defaultValues: {
      code: "",
      categories: "",
      id: "",
      tags: "",
      specificationsCares: "",
      specificationsInfo: "",
      productId: "",
      deliveryDate: "",
      seller: "",
      specificationsSubtitle: "",
      items: {
        code: "",
        color: "",
        size: {
          height: "0",
          width: "0",
        },
      },
    },
  });

  const { handleSubmit, register, formState } = productCreateForm;

  async function handleCreateNewProduct(data: ProductFormData) {
    const { items } = data;

    const product = {
      ...data,
      items: {
        ...items,
        size: {
          width: Number(items.size.width),
          height: Number(items.size.height),
        },
      },
    };

    try {
      await createNewProduct.mutateAsync(product);
      push("/dashboard");
    } catch (e) {
      console.log(e);
      return;
    }
  }

  return (
    <Box
      as="main"
      maxWidth={isLargerThan1920 ? 1620 : 1350}
      mt={{ base: "120px", "2xl": "40px" }}
      ml={{ base: 0, "2xl": "110px" }}
      px={4}
      pb={10}>
      <Head>
        <title>Loomi | Dashboard</title>
      </Head>
      <VStack as="section" align="flex-start" gap={10}>
        <Box as="header" mb={8}>
          <Heading fontSize="24px" color="#4E5D66">
            Adicionar produto
          </Heading>
        </Box>
        <Box as="form" w="full" onSubmit={handleSubmit(handleCreateNewProduct)}>
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
                <Heading fontSize="20px" mb={5} color="#4E5D66">
                  Detalhes
                </Heading>
                <Input
                  h={10}
                  label="Name"
                  {...register("name")}
                  error={formState.errors}
                />
                <Input
                  h={10}
                  label="ID"
                  {...register("productId")}
                  error={formState.errors}
                />
                <Input
                  h={10}
                  label="Código"
                  {...register("code")}
                  error={formState.errors}
                />
                <Input h={10} label="Seller" {...register("seller")} />
                <Input
                  h={10}
                  {...register("deliveryDate")}
                  label="Prazo de entrega"
                  type="date"
                  error={formState.errors}
                />
              </VStack>
              <VStack align="flex-start" gap={5} w="100%" maxW={300}>
                <Heading fontSize="20px" mb={5} color="#4E5D66">
                  Categorias
                </Heading>
                <Stack spacing={3} w="100%">
                  <Select
                    variant="filled"
                    placeholder="Selecionar categorias"
                    {...register("categories")}
                    color="#afa9a9">
                    <option value="category1">category1</option>
                    <option value="category2">category2</option>
                  </Select>
                </Stack>
              </VStack>
              <VStack align="flex-start" gap={5} w="100%" maxW={300}>
                <Heading fontSize="20px" mb={5} color="#4E5D66">
                  Tags
                </Heading>
                <Select
                  variant="filled"
                  placeholder="Selecionar tags"
                  color="#afa9a9"
                  {...register("tags")}>
                  <option value="tag1">tag1</option>
                  <option value="tag2">tag2</option>
                </Select>
              </VStack>
            </Flex>

            <VStack align="flex-start" gap={5} mt="65px">
              <Heading fontSize="20px" mb={5} color="#4E5D66">
                Especifações
              </Heading>
              <Input
                maxW={{ md: "80%", "2xl": "85%" }}
                h="40px"
                label="Subtítulo"
                error={formState.errors}
                {...register("specificationsSubtitle")}
              />
              <Input
                maxW={{ md: "80%", "2xl": "85%" }}
                h="84px"
                label="Informações"
                error={formState.errors}
                {...register("specificationsInfo")}
              />
              <Input
                maxW={{ md: "80%", "2xl": "85%" }}
                h="84px"
                label="Limpeza e cuidados"
                error={formState.errors}
                {...register("specificationsCares")}
              />
            </VStack>
          </Box>

          <Box bg="#FFF" w="full" p={10} borderRadius="2xl">
            <Flex justify="space-between">
              <Heading fontSize="20px" mb={5} color="#4E5D66">
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
              <Text flex="none" fontSize="md" color="#4E5D66">
                Item 01
              </Text>
              <Divider borderColor="#c4c4c4" />
            </Flex>
            <Flex align="center" gap="80px" flexWrap="wrap">
              <VStack mt={8} align="flex-start" gap={5}>
                <Input
                  label="Código"
                  mr="auto"
                  height={10}
                  error={formState.errors}
                  {...register("items.code")}
                />
                <Flex
                  w="full"
                  justify="space-between"
                  flexDirection={{
                    base: "column",
                    md: "row",
                  }}
                  gap={{ base: 10, "2xl": 12 }}>
                  <Text as="label" fontSize="md" color="#4E5D66">
                    Cor:
                  </Text>
                  <Stack w="full">
                    <Select
                      variant="filled"
                      placeholder="Selecionar categorias"
                      maxW="300px"
                      color="#afa9a9"
                      {...register("items.color")}>
                      <option value="color1">color1</option>
                      <option value="color2">color2</option>
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
                  <Text as="label" fontSize="md" color="#4E5D66">
                    Tamanho:
                  </Text>
                  <Flex w="125px" align="center" gap={4}>
                    <Text order={1} flex="none">
                      m x
                    </Text>
                    <Input
                      height={10}
                      type="number"
                      error={formState.errors}
                      {...register("items.size.width")}
                    />
                  </Flex>
                  <Flex w="125px" align="center" gap={4}>
                    <Text order={1} flex="none">
                      m x
                    </Text>
                    <Input
                      height={10}
                      type="number"
                      error={formState.errors}
                      {...register("items.size.height")}
                    />
                  </Flex>
                  <Flex w="125px" align="center" gap={4}>
                    <Text order={1}>m</Text>
                    <Input name="length" height={10} />
                  </Flex>
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
                  <ChakraInput type="file" w="full" h="full" opacity={0} />
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Flex w="full" justify="flex-end" gap={4} mt="50px">
            <Link
              as={NextLink}
              bg="#c2c8cc"
              w="80px"
              h="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              fontWeight="normal"
              href="/dashboard">
              Cancelar
            </Link>
            <Button
              bg="#C0D7E5"
              maxW="120px"
              h={10}
              fontWeight="normal"
              type="submit">
              Criar
            </Button>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "loomiapp.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
