import {
  Button,
  VStack,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  Equals,
  HouseSimple,
  Wrench,
  Truck,
  ShoppingCartSimple,
  ChatCentered,
  User,
  Nut,
} from "phosphor-react";
import { SidebarItem } from "./SidebarItem";
import { useState } from "react";

const ICONS = [
  {
    icon: <HouseSimple size={25} color="#bebbbb" />,
    path: "/dashboard",
    name: "Início",
  },
  {
    icon: <HouseSimple size={25} color="#bebbbb" />,
    path: "/addProduct",
    name: "Adicionar Produto",
  },
  {
    icon: <Wrench size={25} color="#bebbbb" />,
    path: "/",
    name: "Ajustes de perfil",
  },
  {
    icon: <Truck size={25} color="#bebbbb" />,
    path: "/",
    name: "Entrega",
  },
  {
    icon: <ShoppingCartSimple size={25} color="#bebbbb" />,
    path: "/",
    name: "Carrinho",
  },
  {
    icon: <ShoppingCartSimple size={25} color="#bebbbb" />,
    path: "/",
    name: "Compras",
  },
  {
    icon: <ChatCentered size={25} color="#bebbbb" />,
    path: "/",
    name: "Chat",
  },
  {
    icon: <User size={25} color="#bebbbb" />,
    path: "/",
    name: "Perfil",
  },
  {
    icon: <Nut size={25} color="#bebbbb" />,
    path: "/",
    name: "Configurações de conta",
  },
];

export function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const [isLargerThan1440] = useMediaQuery(
    "(min-width: 1440px)"
  );

  function handleOpenSidebar() {
    setIsOpenSidebar((oldState) => !oldState);
  }

  return (
    <VStack
      as="aside"
      bg="#FFF"
      px={1}
      py={2}
      borderRadius="lg"
      position="fixed"
      zIndex={3}
      top="100px"
      left="30px"
      gap={3}>
      <Box
        as="header"
        borderBottomWidth={1}
        borderColor={isOpenSidebar ? "#d2d2d2" : "#FFF"}>
        <Button
          bg="transparent"
          title="Abrir menu"
          iconSpacing={0}
          leftIcon={<Equals size={25} />}
          onClick={handleOpenSidebar}
        />
      </Box>
      {(isOpenSidebar || isLargerThan1440) && (
        <VStack gap={2}>
          {ICONS.map((item) => (
            <SidebarItem
              key={item.name}
              href={item.path}
              icon={item.icon}
            />
          ))}
        </VStack>
      )}
    </VStack>
  );
}
