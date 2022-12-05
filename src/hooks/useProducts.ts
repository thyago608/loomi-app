import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "services/api";
import { client } from "services/queryClient";
import { IProduct } from "types/Product";

const LIMIT_PER_PAGE = 10;

type ResponseFetchProducts = {
  products: IProduct[];
  totalPages: number;
};

type CreateProductFormData = {
  code: string;
  id: string;
  name: string;
  productId: string;
  seller: string;
  deliveryDate: string;
  specificationsSubtitle: string;
  specificationsInfo: string;
  specificationsCares: string;
  categories: string;
  tags: string;
  items: {
    code: string;
    color: string;
    size: {
      height: number;
      width: number;
    };
  };
};

async function getProducts(page: number): Promise<ResponseFetchProducts> {
  const productsListResponse = await api.get<IProduct[]>("/products");
  const productsTotalAmount = productsListResponse.data.length;

  const totalPages = Math.ceil(productsTotalAmount / LIMIT_PER_PAGE);

  const products = await api.get<IProduct[]>(
    `products?page=${page}&limit=${LIMIT_PER_PAGE}`
  );

  return {
    products: products.data,
    totalPages,
  };
}

async function createNewProduct(product: CreateProductFormData) {
  await api.post("/create-product", product);
}

export function useProducts(page: number) {
  return {
    createNewProduct: useMutation(createNewProduct, {
      onSuccess: () => {
        client.invalidateQueries(["products"]);
      },
    }),
    fetchProducts: useQuery(["products", page], () => getProducts(page), {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }),
  };
}
