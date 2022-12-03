import NextLink from "next/link";
import { Link, ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SidebarItemProps extends ChakraProps {
  path: string;
  icon: ReactNode;
  active?: boolean;
}

export function SidebarItem({
  icon,
  path,
  active,
  ...rest
}: SidebarItemProps) {
  return (
    <Link
      as={NextLink}
      p={2}
      href={path}
      display="flex"
      justifyContent="center"
      borderRadius="md"
      bg={active ? "#5A4CA7" : "#FFF"}
      {...rest}>
      {icon}
    </Link>
  );
}
