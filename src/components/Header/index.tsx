import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "hooks/useAuth";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const { user } = useAuth();

  return (
    <Flex
      as="header"
      justify="space-between"
      py={2}
      px={10}
      boxShadow="md"
      bg="#FFF">
      <Link href="/dashboard" role="link">
        <Image
          src="/loomi-logo.svg"
          width={60}
          height={60}
          alt="loomi"
          title="loomi"
        />
      </Link>
      <Flex align="center" gap="10px">
        <Text>{user?.name}</Text>
        <Avatar name={user?.name} src={user?.avatar} />
      </Flex>
    </Flex>
  );
}
