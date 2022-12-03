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
import { useRouter } from "next/router";

const ICONS = [
  {
    id: 1,
    icon: <HouseSimple size={25} color="#bebbbb" />,
    path: "/dashboard",
  },
  {
    id: 2,
    icon: <HouseSimple size={25} color="#bebbbb" />,
    path: "/",
  },
  {
    id: 3,
    icon: <Wrench size={25} color="#bebbbb" />,
    path: "/",
  },
  {
    id: 4,
    icon: <Truck size={25} color="#bebbbb" />,
    path: "/",
  },
  {
    id: 5,
    icon: <ShoppingCartSimple size={25} color="#bebbbb" />,
    path: "/",
  },
  {
    id: 6,
    icon: <ShoppingCartSimple size={25} color="#bebbbb" />,
    path: "/",
  },
  {
    id: 7,
    icon: <ChatCentered size={25} color="#bebbbb" />,
    path: "/",
  },
  {
    id: 8,
    icon: <User size={25} color="#bebbbb" />,
    path: "/",
  },
  {
    id: 9,
    icon: <Nut size={25} color="#bebbbb" />,
    path: "/",
  },
];

export function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const [isLargerThan1440] = useMediaQuery(
    "(min-width: 1440px)"
  );

  const { asPath } = useRouter();

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
          {ICONS.map((icon) => (
            <SidebarItem
              key={icon.id}
              icon={icon.icon}
              path={icon.path}
              active={asPath === icon.path}
            />
          ))}
        </VStack>
      )}
    </VStack>
  );
}
