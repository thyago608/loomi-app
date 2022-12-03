import { Button, VStack, Box } from "@chakra-ui/react";
import { Equals } from "phosphor-react";
import { SidebarItem } from "./SidebarItem";
import { useState } from "react";

const ICONS = [
  "home",
  "cat",
  "services",
  "log",
  "buy",
  "card",
  "text",
  "person",
  "gear",
];

export function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  function handleOpenSidebar() {
    setIsOpenSidebar((oldState) => !oldState);
  }

  return (
    <VStack
      as="aside"
      bg="#FFF"
      p={2}
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
      {isOpenSidebar && (
        <VStack gap={2}>
          {ICONS.map((icon) => (
            <SidebarItem key={icon} icon={icon} path="/" />
          ))}
        </VStack>
      )}
    </VStack>
  );
}
