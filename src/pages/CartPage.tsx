import CartItemList from '@/features/cart/CartItemList';
import CartSummary from '@/features/cart/CartSummary';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          component='h1'
          sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '25px' }}
        >
          Shopping Cart
        </Typography>
        <Button variant='contained' onClick={handleGoBack}>
          Go back
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <CartItemList />
        <CartSummary />
      </Box>
    </>
  );
}

export default CartPage;
