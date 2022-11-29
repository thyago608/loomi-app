import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <Flex as="header" py={2} px={10}>
      <Link href="/">
        <Image
          src="/loomi-logo.svg"
          width={60}
          height={60}
          alt="loomi"
        />
      </Link>
    </Flex>
  );
}
