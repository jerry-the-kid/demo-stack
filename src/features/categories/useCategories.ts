import useSWRImmutable from 'swr';
import { CategoryAPI } from '@/api/categories';

const useCategories = () => {
  return useSWRImmutable<string[], string>(
    '/products/categories',
    CategoryAPI.all
  );
};

export default useCategories;
