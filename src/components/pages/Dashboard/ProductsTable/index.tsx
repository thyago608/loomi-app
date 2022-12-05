import { useState } from "react";
import { Table, TableContainer, Tbody, VStack } from "@chakra-ui/react";
import { THead } from "./THead";
import { TBodyItem } from "./TBodyItem";
import { Pagination } from "./Pagination";
import { Loading } from "components/Loading";
import { useProducts } from "hooks/useProducts";

export function ProductsTable() {
  const [page, setPage] = useState(1);

  const { fetchProducts } = useProducts(page);
  const { data, isLoading } = fetchProducts;

  function handleGoNextPage() {
    setPage((oldState) => oldState + 1);
  }

  function handleGoPreviousPage() {
    setPage((oldState) => oldState - 1);
  }

  return (
    <VStack w="100%" bg="#FFF">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TableContainer w="100%">
            <Table variant="simple">
              <THead />
              <Tbody>
                {data?.products.map((product) => (
                  <TBodyItem key={product.id} data={product} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          {!isLoading && data && (
            <Pagination
              currentPage={page}
              totalPages={data.totalPages}
              onNextPage={handleGoNextPage}
              onPreviousPage={handleGoPreviousPage}
            />
          )}
        </>
      )}
    </VStack>
  );
}
