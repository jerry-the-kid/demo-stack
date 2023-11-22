import useSWR from 'swr';
import { ProductAPI } from '@/api/product';
import { Product } from '@/types/productType';
const fetcher = (category: string): Promise<Product[]> =>
  category === 'all' ? ProductAPI.all() : ProductAPI.byCategory(category);

const useProducts = (category: string) => {
  const {
    data: products,
    error,
    isLoading,
    mutate,
  } = useSWR(['product', category], ([, c]) => fetcher(c));

  return {
    products,
    error,
    isLoading,
    mutate,
  };
};

export default useProducts;
