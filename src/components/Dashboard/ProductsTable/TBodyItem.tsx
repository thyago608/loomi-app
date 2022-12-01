import { Flex, Td, Text, Tr } from "@chakra-ui/react";
import Image from "next/image";
import { Check } from "phosphor-react";

export function TBodyItem() {
  return (
    <Tr color="#333333" fontFamily="Ubuntu">
      <Td>
        <Flex align="center" gap={2}>
          <Image
            src="/chair.png"
            width={50}
            height={50}
            alt=""
          />
          Banco Cajá
        </Flex>
      </Td>
      <Td>Madeira escura; Madeira média</Td>
      <Td maxW={350} display="flex" flexWrap="wrap" gap={1}>
        <Text
          as="span"
          bg="#d5d8da"
          rounded="full"
          px={2}
          py={1}
          color="#333333"
          fontFamily="Ubuntu">
          banco
        </Text>
        <Text
          as="span"
          bg="#d5d8da"
          rounded="full"
          px={2}
          py={1}
          color="#333333"
          fontFamily="Ubuntu">
          sem braço
        </Text>
        <Text
          as="span"
          bg="#d5d8da"
          rounded="full"
          px={2}
          py={1}
          color="#333333"
          fontFamily="Ubuntu">
          sala de jantar
        </Text>
        <Text
          as="span"
          bg="#d5d8da"
          rounded="full"
          px={2}
          py={1}
          color="#333333"
          fontFamily="Ubuntu">
          madeira natural
        </Text>
      </Td>
      <Td color="#333333" fontFamily="Ubuntu">
        <Flex gap={2}>
          Ativo
          <Check size={20} weight="bold" color="#5A4CA7" />
        </Flex>
      </Td>
    </Tr>
  );
}
