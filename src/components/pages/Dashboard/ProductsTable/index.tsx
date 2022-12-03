import {
  Table,
  TableContainer,
  Tbody,
  VStack,
} from "@chakra-ui/react";
import { TBodyItem } from "./TBodyItem";
import { Pagination } from "./Pagination";
import { THead } from "./THead";

export function ProductsTable() {
  return (
    <VStack w="100%" bg="#FFF">
      <TableContainer w="100%">
        <Table variant="simple">
          <THead />
          <Tbody>
            <TBodyItem />
            <TBodyItem />
            <TBodyItem />
            <TBodyItem />
            <TBodyItem />
            <TBodyItem />
            <TBodyItem />
            <TBodyItem />
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination />
    </VStack>
  );
}
