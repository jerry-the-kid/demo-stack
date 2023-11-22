import { BASE_URL } from '@/utils/constants';

export const CategoryAPI = {
  all: async () => {
    return fetch(`${BASE_URL}products/categories`).then((res) => res.json());
  },
};
