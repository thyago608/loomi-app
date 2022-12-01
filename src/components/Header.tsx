import { Avatar, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      py={2}
      px={10}
      boxShadow="md"
      bg="#FFF">
      <Link href="/">
        <Image
          src="/loomi-logo.svg"
          width={60}
          height={60}
          alt="loomi"
        />
      </Link>
      <Flex align="center" gap="10px">
        <Text>Thyago</Text>
        <Avatar
          name="Thyago Ribeiro"
          src="https://bit.ly/broken-link"
        />
      </Flex>
    </Flex>
  );
}
