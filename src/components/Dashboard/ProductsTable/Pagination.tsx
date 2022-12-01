import { Button, Flex, Text } from "@chakra-ui/react";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export function Pagination() {
  return (
    <Flex alignSelf="flex-end" alignItems="center" gap={4}>
      <Flex gap={2} color="#bcbcbd" fontSize="sm">
        <Text>1</Text>de<Text>40</Text>
      </Flex>
      <Flex gap={2}>
        <Button
          leftIcon={<FiChevronLeft size={18} />}
          minWidth="20px"
          w="30px"
          h="30px"
          title="previous"
          iconSpacing={0}
        />
        <Button
          leftIcon={<FiChevronRight size={18} />}
          minWidth="20px"
          w="30px"
          h="30px"
          title="next"
          iconSpacing={0}
        />
      </Flex>
    </Flex>
  );
}
