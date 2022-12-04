import { useQuery } from "@tanstack/react-query";
import { api } from "services/api";
import { Product } from "types/Product";

const LIMIT_PER_PAGE = 10;

type ResponseFetchProducts = {
  products: Product[];
  totalPages: number;
};

async function getProducts(
  page: number
): Promise<ResponseFetchProducts> {
  const productsListResponse = await api.get<Product[]>(
    "/products"
  );
  const productsTotalAmount =
    productsListResponse.data.length;

  const totalPages = Math.ceil(
    productsTotalAmount / LIMIT_PER_PAGE
  );

  const products = await api.get<Product[]>(
    `products?page=${page}&limit=${LIMIT_PER_PAGE}`
  );

  return {
    products: products.data,
    totalPages,
  };
}

export function useFetchProducts(page: number) {
  return useQuery(
    ["products", page],
    () => getProducts(page),
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );
}
