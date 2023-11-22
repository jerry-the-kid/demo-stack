import { Box } from '@mui/material';

import Loading from '@/ui/Loading';
import useProducts from './useProducts';
import ProductCard from './ProductCard';

interface IProductListProps {
  readonly selectedCategory: string;
}

function ProductList({ selectedCategory }: IProductListProps) {
  const { products, error, isLoading } = useProducts(
    selectedCategory.toLowerCase()
  );

  if (isLoading || error)
    return (
      <Box
        sx={{
          width: '100%',
          height: '450',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Loading />
      </Box>
    );

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '20px',
      }}
    >
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
}

export default ProductList;
