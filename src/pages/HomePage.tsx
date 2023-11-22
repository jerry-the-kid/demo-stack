import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

import ProductsTab from '@/features/products/ProductsTab';
import CreateProductForm from '@/features/products/CreateProductForm';
import PageTabs from '@/ui/PageTabs';
import CardButton from '@/ui/CartButton';
import { useMst } from '@/stores/Root';

const tabsValue = [
  { label: 'Product List', value: 1 },
  { label: 'Add Product', value: 2 },
];

const HomePage = observer(() => {
  const navigate = useNavigate();
  const { cart } = useMst();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [tabValue, setTabValue] = useState<number>(1);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSetTabValue = (tabValue: number) => {
    setTabValue(tabValue);
  };

  const handleClickToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          component='h1'
          sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '25px' }}
        >
          Clothes Shop
        </Typography>
        <CardButton count={cart.totalItems} onClick={handleClickToCart} />
      </Box>

      <PageTabs
        tabsValue={tabsValue}
        value={tabValue}
        onSetTabValue={handleSetTabValue}
      />

      {tabValue == 1 && (
        <ProductsTab
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
      )}

      {tabValue == 2 && <CreateProductForm />}
    </>
  );
});

export default HomePage;
