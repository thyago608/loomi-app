import { Button, Flex, Text } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from "phosphor-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
}: PaginationProps) {
  const isButtonPreviousDisabled = currentPage === 1;
  const isButtonNextDisabled = currentPage === totalPages;

  return (
    <Flex alignSelf="flex-end" alignItems="center" gap={4}>
      <Flex gap={2} color="#bcbcbd" fontSize="sm">
        <Text>{currentPage}</Text>de
        <Text>{totalPages}</Text>
      </Flex>
      <Flex gap={2}>
        <Button
          leftIcon={<CaretLeft size={18} weight="bold" />}
          minWidth="20px"
          w="30px"
          h="30px"
          title="previous"
          iconSpacing={0}
          disabled={isButtonPreviousDisabled}
          onClick={onPreviousPage}
        />
        <Button
          leftIcon={<CaretRight size={18} weight="bold" />}
          minWidth="20px"
          w="30px"
          h="30px"
          title="next"
          iconSpacing={0}
          disabled={isButtonNextDisabled}
          onClick={onNextPage}
        />
      </Flex>
    </Flex>
  );
}
