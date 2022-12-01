import { Th, Thead, Tr } from "@chakra-ui/react";

export function THead() {
  return (
    <Thead>
      <Tr>
        <Th
          bg="#4E5D66"
          color="#FFF"
          display="block"
          mr={5}
          w="400px"
          borderRadius="md">
          Produto
        </Th>
        <Th
          bg="#4E5D66"
          color="#FFF"
          borderStartRadius="9px">
          Cores
        </Th>
        <Th
          bg="#4E5D66"
          color="#FFF"
          position="relative"
          _before={{
            content: '""',
            display: "inline-block",
            width: "2px",
            height: "25px",
            background: "#FFF",
            position: "absolute",
            top: 2,
            left: 0,
          }}
          _after={{
            content: '""',
            display: "inline-block",
            width: "2px",
            height: "25px",
            background: "#FFF",
            position: "absolute",
            top: 2,
            right: 0,
          }}>
          Especificações
        </Th>
        <Th bg="#4E5D66" color="#FFF" borderEndRadius="9px">
          Status
        </Th>
      </Tr>
    </Thead>
  );
}
