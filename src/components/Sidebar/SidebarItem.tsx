import NextLink from "next/link";
import { Link, ChakraProps } from "@chakra-ui/react";
import Image from "next/image";

interface SidebarItemProps extends ChakraProps {
  icon: string;
  path: string;
}

export function SidebarItem({
  icon,
  path,
  ...rest
}: SidebarItemProps) {
  return (
    <Link
      as={NextLink}
      href={path}
      {...rest}
      display="flex"
      justifyContent="center">
      <Image
        src={`/icons/${icon}.svg`}
        alt=""
        width={35}
        height={35}
      />
    </Link>
  );
}
