import { Product } from '@/types/productType';
import { BASE_URL } from '@/utils/constants';

export const ProductAPI = {
  all: async () => {
    return fetch(`${BASE_URL}products`).then((res) => res.json());
  },
  byCategory: async (category: string) => {
    return fetch(`${BASE_URL}products/category/${category}`).then((res) =>
      res.json()
    );
  },
  create: async (product: Partial<Product>): Promise<{ id: number }> => {
    return fetch(`${BASE_URL}products`, {
      method: 'POST',
      body: JSON.stringify(product),
    }).then((res) => res.json());
  },
};
