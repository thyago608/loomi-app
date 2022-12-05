import { Button, VStack, Box, useMediaQuery } from "@chakra-ui/react";
import { Equals } from "phosphor-react";
import { SidebarLink } from "./SidebarLink";
import { useState } from "react";
import { ICONS } from "./Icons";

export function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const [isLargerThan1440] = useMediaQuery("(min-width: 1440px)");

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
            <SidebarLink key={item.name} href={item.path} icon={item.icon} />
          ))}
        </VStack>
      )}
    </VStack>
  );
}
