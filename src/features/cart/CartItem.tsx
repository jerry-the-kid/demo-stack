import { Box, Typography, IconButton, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface ICartItemProps {
  readonly imageUrl: string;
  readonly title: string;
  readonly totalPrice: number;
  readonly quantity: number;
  readonly onIncreaseQuantity: () => void;
  readonly onDecreaseQuantity: () => void;
  readonly onRemoveItem: () => void;
}

function CartItem({
  imageUrl,
  title,
  totalPrice,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}: ICartItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '1.5rem 1rem',
        borderBottom: '1px solid gray',
      }}
    >
      <img
        style={{ width: '7.5rem', height: '5.5rem', objectFit: 'contain' }}
        src={imageUrl}
      />
      <Box
        marginLeft='1.2rem'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Typography
          component='h3'
          sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '25px' }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            aria-label='remove'
            size='small'
            onClick={onDecreaseQuantity}
          >
            <RemoveIcon fontSize='small' />
          </IconButton>
          <Typography sx={{ marginX: '.7rem' }}>{quantity}</Typography>
          <IconButton
            aria-label='add'
            size='small'
            onClick={onIncreaseQuantity}
          >
            <AddIcon fontSize='small' />
          </IconButton>
        </Box>
      </Box>
      <Box
        marginLeft='auto'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Typography
          component='h3'
          sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '25px' }}
        >
          $ {totalPrice}
        </Typography>
        <Button
          onClick={onRemoveItem}
          sx={{ color: 'gray' }}
          component='label'
          color='inherit'
          startIcon={<DeleteForeverIcon />}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
}

export default CartItem;
