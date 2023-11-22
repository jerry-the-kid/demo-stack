import { Box, Typography } from '@mui/material';
import ProductList from './ProductList';
import CategorySelect from '@/features/categories/CategorySelect';

interface IProductsTabProps {
  readonly selectedCategory: string;
  readonly onSelectCategory: (category: string) => void;
}

function ProductsTab({
  selectedCategory,
  onSelectCategory,
}: IProductsTabProps) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <Typography
          component='h2'
          sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
        >
          Product List
        </Typography>
        <CategorySelect
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      </Box>
      <ProductList selectedCategory={selectedCategory} />
    </>
  );
}

export default ProductsTab;
