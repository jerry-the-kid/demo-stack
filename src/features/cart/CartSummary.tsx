import { Box, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { useMst } from '@/stores/Root';

const CartSummary = observer(() => {
  const { cart } = useMst();

  return (
    <Box
      sx={{
        width: '30%',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid gray',
        alignSelf: 'self-start',
      }}
    >
      <Box sx={{ padding: '.8rem 1.3rem', borderBottom: '1px solid gray' }}>
        <Typography
          component='h2'
          sx={{
            fontSize: '1.5rem',
            fontWeight: '400',
          }}
        >
          Summary
        </Typography>
      </Box>

      <Box
        sx={{
          padding: '.8rem 1.3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.6rem',
            fontWeight: '300',
          }}
        >
          Items ({cart.totalProducts})
        </Typography>
        <Typography
          sx={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
          }}
        >
          $ {cart.totalPrice}
        </Typography>
      </Box>
    </Box>
  );
});

export default CartSummary;
