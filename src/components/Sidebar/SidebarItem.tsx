import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useRouter } from "next/router";

interface SidebarItemProps {
  icon: ReactElement;
  href: string;
}

export function SidebarItem({
  icon,
  href,
}: SidebarItemProps) {
  const { asPath } = useRouter();

  return (
    <Link
      as={NextLink}
      p={2}
      href={href}
      display="flex"
      justifyContent="center"
      borderRadius="md"
      bg={href === asPath ? "#5A4CA7" : "#FFF"}
      _hover={{
        bg: "#9b91d6",
      }}>
      {icon}
    </Link>
  );
}
