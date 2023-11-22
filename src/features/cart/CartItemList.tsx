import { Box } from '@mui/material';
import CartItem from './CartItem';
import { observer } from 'mobx-react-lite';
import { useMst } from '@/stores/Root';

const CartItemList = observer(() => {
  const { cart } = useMst();

  let content;

  if (cart.totalItems === 0) {
    content = (
      <Box sx={{ padding: '1.5rem 2rem' }}>
        <h3>Your cart is currently empty !!</h3>
      </Box>
    );
  } else {
    content = cart.cartItems.map((cartItem) => (
      <CartItem
        key={cartItem.id}
        imageUrl={cartItem.image}
        title={cartItem.title}
        totalPrice={cartItem.totalPrice}
        quantity={cartItem.quantity}
        onIncreaseQuantity={cartItem.increaseQuantity}
        onDecreaseQuantity={cartItem.decreaseQuantity}
        onRemoveItem={cartItem.remove}
      />
    ));
  }

  return (
    <Box
      sx={{
        width: '70%',
        marginRight: '2rem',
        borderRadius: '10px',
        border: '1px solid gray',
        overflow: 'hidden',
      }}
    >
      {content}
    </Box>
  );
});

export default CartItemList;
